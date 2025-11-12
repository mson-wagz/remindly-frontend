'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { useWhatsAppGroups, useScheduleAnnouncement } from "../../hooks/useWhatsApp"
import { Calendar, Clock, MessageSquare, Send, CheckCircle, AlertCircle, Users, Repeat } from "lucide-react"

export function AnnouncementScheduler() {
  const { data: groups, isLoading: groupsLoading } = useWhatsAppGroups()
  const { mutate: scheduleAnnouncement, isPending, isSuccess, isError, error } = useScheduleAnnouncement()

  const [formData, setFormData] = useState({
    message: '',
    targetGroup: '',
    date: '',
    time: '',
    repeat: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.message || !formData.targetGroup || !formData.date || !formData.time) {
      return
    }

    const formattedDate = formatDateForAPI(formData.date)

    scheduleAnnouncement({
      ...formData,
      date: formattedDate
    }, {
      onSuccess: () => {
        setFormData({
          message: '',
          targetGroup: '',
          date: '',
          time: '',
          repeat: ''
        })
      }
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const formatDateForAPI = (inputDate: string) => {
    if (!inputDate) return ''
    const date = new Date(inputDate)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const isFormValid = formData.message && formData.targetGroup && formData.date && formData.time

  return (
    <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardTitle className="flex items-center space-x-3 text-xl">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <MessageSquare className="h-5 w-5" />
          </div>
          <span>Schedule New Announcement</span>
        </CardTitle>
        <p className="text-blue-100 text-sm">Create and schedule WhatsApp messages for your groups</p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-gray-700">
              <MessageSquare className="h-4 w-4 mr-2 text-blue-600" />
              Message Content
            </label>
            <div className="relative">
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Enter your announcement message here..."
                className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                rows={4}
                maxLength={500}
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400 bg-white px-2 py-1 rounded-full">
                {formData.message.length}/500
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-gray-700">
              <Users className="h-4 w-4 mr-2 text-green-600" />
              Target Group
            </label>
            {groupsLoading ? (
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-2"></div>
                Loading groups...
              </div>
            ) : (
              <div className="relative">
                <select
                  value={formData.targetGroup}
                  onChange={(e) => handleInputChange('targetGroup', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none"
                >
                  <option value="">Choose a WhatsApp group...</option>
                  {groups?.map((group) => (
                    <option key={group.id} value={group.name}>
                      {group.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <Clock className="h-4 w-4 mr-2 text-orange-600" />
                Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-gray-700">
              <Repeat className="h-4 w-4 mr-2 text-indigo-600" />
              Repeat Schedule (Optional)
            </label>
            <select
              value={formData.repeat}
              onChange={(e) => handleInputChange('repeat', e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none"
            >
              <option value="">One-time only</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          {isSuccess && (
            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl animate-slide-up">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-green-800">Success!</p>
                <p className="text-sm text-green-700">Your announcement has been scheduled successfully.</p>
              </div>
            </div>
          )}

          {isError && (
            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl animate-slide-up">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="font-medium text-red-800">Error occurred</p>
                <p className="text-sm text-red-700">{error?.message || 'Failed to schedule announcement'}</p>
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={!isFormValid || isPending}
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Scheduling...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Schedule Announcement
              </>
            )}
          </Button>
        </form>

        {isFormValid && (
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
            <h4 className="flex items-center text-sm font-semibold text-blue-900 mb-3">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs">Message</Badge>
                <p className="text-gray-700 flex-1">{formData.message}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">Target</Badge>
                <p className="text-gray-700">{formData.targetGroup}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">When</Badge>
                <p className="text-gray-700">{formatDateForAPI(formData.date)} at {formData.time}</p>
              </div>
              {formData.repeat && (
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">Repeat</Badge>
                  <p className="text-gray-700 capitalize">{formData.repeat}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}