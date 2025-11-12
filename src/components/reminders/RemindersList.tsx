'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ReminderCard } from "./ReminderCard"
import { useReminders } from "../../hooks/useReminders"
import { Reminder } from "../../lib/types"
import { RefreshCw, Filter, Search, Clock, CheckCircle, AlertTriangle, Calendar } from "lucide-react"

export function RemindersList() {
  const { data: reminders, isLoading, error, refetch } = useReminders()
  const [filter, setFilter] = useState<'all' | 'active' | 'sent' | 'overdue'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filterReminders = (reminders: Reminder[]) => {
    let filtered = reminders

    if (filter === 'active') {
      filtered = filtered.filter(r => r.status?.toLowerCase() === 'active' || r.status?.toLowerCase() === 'pending')
    } else if (filter === 'sent') {
      filtered = filtered.filter(r => r.status?.toLowerCase() === 'sent')
    } else if (filter === 'overdue') {
      filtered = filtered.filter(r => {
        if (r.status?.toLowerCase() === 'sent') return false
        try {
          const [day, month, year] = r.date.split('/').map(Number)
          const [hours, minutes] = r.time.split(':').map(Number)
          const targetDate = new Date(year, month - 1, day, hours, minutes)
          return new Date() > targetDate
        } catch {
          return false
        }
      })
    }

    if (searchTerm) {
      filtered = filtered.filter(r =>
        r.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.targetGroup?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered
  }

  const filteredReminders = reminders ? filterReminders(reminders) : []

  const getFilterCount = (filterType: typeof filter) => {
    if (!reminders) return 0
    const tempFilter = filter
    // Temporarily change filter to calculate count
    const counts = {
      all: reminders.length,
      active: reminders.filter(r => r.status?.toLowerCase() === 'active' || r.status?.toLowerCase() === 'pending').length,
      sent: reminders.filter(r => r.status?.toLowerCase() === 'sent').length,
      overdue: reminders.filter(r => {
        if (r.status?.toLowerCase() === 'sent') return false
        try {
          const [day, month, year] = r.date.split('/').map(Number)
          const [hours, minutes] = r.time.split(':').map(Number)
          const targetDate = new Date(year, month - 1, day, hours, minutes)
          return new Date() > targetDate
        } catch {
          return false
        }
      }).length
    }
    return counts[filterType]
  }

  const getFilterIcon = (filterType: typeof filter) => {
    switch (filterType) {
      case 'all': return <Calendar className="h-3 w-3" />
      case 'active': return <Clock className="h-3 w-3" />
      case 'sent': return <CheckCircle className="h-3 w-3" />
      case 'overdue': return <AlertTriangle className="h-3 w-3" />
      default: return null
    }
  }

  const getFilterColor = (filterType: typeof filter) => {
    switch (filterType) {
      case 'all': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'active': return 'bg-green-100 text-green-800 border-green-200'
      case 'sent': return 'bg-gray-100 text-gray-800 border-gray-200'
      case 'overdue': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  if (error) {
    return (
      <Card className="glass-card border-0 shadow-lg rounded-2xl">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to Load Reminders</h3>
              <p className="text-gray-600 mb-4">{error.message}</p>
              <Button onClick={() => refetch()} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <Card className="glass-card border-0 shadow-lg rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-purple-50 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-900">Your Reminders</span>
            </CardTitle>
            <Button
              onClick={() => refetch()}
              variant="outline"
              size="sm"
              disabled={isLoading}
              className="rounded-xl border-gray-200 hover:bg-purple-50"
            >
              {isLoading ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
              <span className="hidden sm:inline ml-2">Refresh</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by message or group..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 border border-gray-200 rounded-xl w-full bg-gray-50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {(['all', 'active', 'sent', 'overdue'] as const).map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  filter === filterType 
                    ? `${getFilterColor(filterType)} shadow-md` 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {getFilterIcon(filterType)}
                <span className="capitalize">{filterType}</span>
                <Badge 
                  className={`ml-2 ${filter === filterType ? 'bg-white/20 text-current' : 'bg-gray-100 text-gray-600'}`}
                  variant="secondary"
                >
                  {getFilterCount(filterType)}
                </Badge>
              </button>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="text-center p-3 rounded-xl bg-purple-50">
              <div className="text-2xl font-bold text-purple-600">{reminders?.length || 0}</div>
              <div className="text-xs text-purple-600 font-medium">Total</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-green-50">
              <div className="text-2xl font-bold text-green-600">{getFilterCount('active')}</div>
              <div className="text-xs text-green-600 font-medium">Active</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-gray-50">
              <div className="text-2xl font-bold text-gray-600">{getFilterCount('sent')}</div>
              <div className="text-xs text-gray-600 font-medium">Sent</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-red-50">
              <div className="text-2xl font-bold text-red-600">{getFilterCount('overdue')}</div>
              <div className="text-xs text-red-600 font-medium">Overdue</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reminders Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="glass-card border-0 shadow-lg rounded-2xl animate-pulse">
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredReminders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredReminders.map((reminder, index) => (
            <div key={`${reminder.rowIndex}-${index}`} className="animate-fade-in">
              <ReminderCard reminder={reminder} />
            </div>
          ))}
        </div>
      ) : (
        <Card className="glass-card border-0 shadow-lg rounded-2xl">
          <CardContent className="p-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {searchTerm ? 'No Results Found' : `No ${filter === 'all' ? '' : filter} Reminders`}
                </h3>
                <p className="text-gray-600">
                  {searchTerm ? (
                    <>No reminders found matching &quot;{searchTerm}&quot;</>
                  ) : filter === 'all' ? (
                    'Start by creating your first announcement above'
                  ) : (
                    `No ${filter} reminders at the moment`
                  )}
                </p>
                {searchTerm && (
                  <Button 
                    onClick={() => setSearchTerm('')}
                    variant="outline" 
                    className="mt-4 rounded-xl"
                  >
                    Clear Search
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}