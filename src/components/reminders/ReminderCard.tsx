'use client'

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Clock, MessageSquare, Send, Users } from "lucide-react"
import { Reminder } from "../../lib/types"
import { formatDateTime, getTimeUntil, getStatusColor } from "../../lib/utils"
import { useSendReminderNow } from "../../hooks/useReminders"

interface ReminderCardProps {
  reminder: Reminder
}

export function ReminderCard({ reminder }: ReminderCardProps) {
  const { mutate: sendNow, isPending } = useSendReminderNow()

  const handleSendNow = () => {
    if (reminder.targetGroup) {
      sendNow({
        message: reminder.message,
        targetGroup: reminder.targetGroup
      })
    }
  }

  const isOverdue = () => {
    try {
      const [day, month, year] = reminder.date.split('/').map(Number)
      const [hours, minutes] = reminder.time.split(':').map(Number)
      const targetDate = new Date(year, month - 1, day, hours, minutes)
      return new Date() > targetDate
    } catch {
      return false
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base font-medium line-clamp-2">
            {reminder.message}
          </CardTitle>
          <Badge 
            variant={reminder.status?.toLowerCase() === 'sent' ? 'success' : 
                     reminder.status?.toLowerCase() === 'disabled' ? 'destructive' : 
                     'default'}
            className="ml-2 shrink-0"
          >
            {reminder.status || 'pending'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{formatDateTime(reminder.date, reminder.time)}</span>
            </div>
            {isOverdue() && reminder.status !== 'sent' && (
              <Badge variant="destructive" className="text-xs">
                Overdue
              </Badge>
            )}
          </div>

         
          <div className="text-sm text-muted-foreground">
            {reminder.status?.toLowerCase() === 'sent' ? (
              'Already sent'
            ) : (
              `${getTimeUntil(reminder.date, reminder.time)} remaining`
            )}
          </div>

          
          {reminder.targetGroup && (
            <div className="flex items-center space-x-1 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{reminder.targetGroup}</span>
            </div>
          )}

          {reminder.repeat && reminder.repeat !== '' && (
            <div className="text-xs text-muted-foreground">
              Repeats: {reminder.repeat}
            </div>
          )}

          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              {reminder.rowIndex && (
                <span className="text-xs text-muted-foreground">
                  Row {reminder.rowIndex}
                </span>
              )}
            </div>
            
            {reminder.status?.toLowerCase() !== 'sent' && reminder.targetGroup && (
              <Button
                size="sm"
                variant="outline"
                onClick={handleSendNow}
                disabled={isPending}
                className="flex items-center space-x-1"
              >
                {isPending ? (
                  <>
                    <div className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-3 w-3" />
                    <span>Send Now</span>
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}