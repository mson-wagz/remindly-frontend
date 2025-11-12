'use client'

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { useWhatsAppStatus, useSystemStatus, useRestartWhatsApp } from "../../hooks/useWhatsApp"
import { useReminders } from "../../hooks/useReminders"
import { Smartphone, Calendar, MessageSquare, RefreshCw, Clock } from "lucide-react"

export function SystemStatusCard() {
  const { data: whatsappStatus, isLoading: whatsappLoading } = useWhatsAppStatus()
  const { data: systemStatus, isLoading: systemLoading } = useSystemStatus()
  const { data: reminders, isLoading: remindersLoading } = useReminders()
  const { mutate: restartWhatsApp, isPending: isRestarting } = useRestartWhatsApp()

  const activeReminders = reminders?.filter(r => r.status?.toLowerCase() === 'active' || r.status?.toLowerCase() === 'pending') || []
  const upcomingToday = reminders?.filter(r => {
    if (!r.date) return false
    const today = new Date().toDateString()
    try {
      const [day, month, year] = r.date.split('/')
      const reminderDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
      return reminderDate.toDateString() === today
    } catch {
      return false
    }
  }) || []

  const getStatusBadge = (ready: boolean, hasError?: boolean) => {
    if (hasError) return <Badge variant="destructive">Error</Badge>
    if (ready) return <Badge variant="success">Connected</Badge>
    return <Badge variant="warning">Connecting</Badge>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
     
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">WhatsApp Status</CardTitle>
          <Smartphone className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            {whatsappLoading ? (
              <Badge variant="outline">Loading...</Badge>
            ) : (
              getStatusBadge(whatsappStatus?.ready || false, !!whatsappStatus?.error)
            )}
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => restartWhatsApp()}
                disabled={isRestarting}
              >
                {isRestarting ? (
                  <RefreshCw className="h-3 w-3 animate-spin" />
                ) : (
                  <RefreshCw className="h-3 w-3" />
                )}
                Restart
              </Button>
              {whatsappStatus?.hasQR && (
                <Badge variant="warning">QR Required</Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

    
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Reminders</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {remindersLoading ? '...' : activeReminders.length}
          </div>
          <p className="text-xs text-muted-foreground">
            Total in spreadsheet: {remindersLoading ? '...' : reminders?.length || 0}
          </p>
        </CardContent>
      </Card>

     
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Today&apos;s Schedule</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {remindersLoading ? '...' : upcomingToday.length}
          </div>
          <p className="text-xs text-muted-foreground">
            Reminders scheduled for today
          </p>
        </CardContent>
      </Card>

     
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">System Health</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            {systemLoading ? (
              <Badge variant="outline">Checking...</Badge>
            ) : (
              getStatusBadge(systemStatus?.whatsappReady || false)
            )}
            <p className="text-xs text-muted-foreground">
              Last check: {systemStatus?.timestamp 
                ? new Date(systemStatus.timestamp).toLocaleTimeString()
                : 'Unknown'
              }
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}