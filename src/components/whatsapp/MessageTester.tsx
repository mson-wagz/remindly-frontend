'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { useSendToGroup, useSendToContact, useWhatsAppGroups } from "../../hooks/useWhatsApp"
import { Send, MessageSquare, User, Users } from "lucide-react"

export function MessageTester() {
  const [message, setMessage] = useState('')
  const [target, setTarget] = useState('')
  const [targetType, setTargetType] = useState<'group' | 'contact'>('group')
  
  const { data: groups } = useWhatsAppGroups()
  const { mutate: sendToGroup, isPending: sendingToGroup } = useSendToGroup()
  const { mutate: sendToContact, isPending: sendingToContact } = useSendToContact()

  const handleSend = () => {
    if (!message.trim() || !target.trim()) return

    if (targetType === 'group') {
      sendToGroup({ message, targetGroup: target })
    } else {
      sendToContact({ contactName: target, message })
    }

    // Clear form on success
    setMessage('')
    setTarget('')
  }

  const isPending = sendingToGroup || sendingToContact

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5" />
          <span>Test Messages</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Target Type Selection */}
        <div className="flex space-x-2">
          <Button
            variant={targetType === 'group' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTargetType('group')}
            className="flex items-center space-x-1"
          >
            <Users className="h-3 w-3" />
            <span>Group</span>
          </Button>
          <Button
            variant={targetType === 'contact' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTargetType('contact')}
            className="flex items-center space-x-1"
          >
            <User className="h-3 w-3" />
            <span>Contact</span>
          </Button>
        </div>

        {/* Target Selection */}
        <div>
          <label className="text-sm font-medium mb-2 block">
            {targetType === 'group' ? 'Group Name' : 'Contact Name'}
          </label>
          {targetType === 'group' && groups && groups.length > 0 ? (
            <select
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full p-2 border border-input rounded-md bg-background"
            >
              <option value="">Select a group...</option>
              {groups.map((group) => (
                <option key={group.id} value={group.name}>
                  {group.name}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder={targetType === 'group' ? 'Enter group name...' : 'Enter contact name...'}
              className="w-full p-2 border border-input rounded-md bg-background"
            />
          )}
        </div>

        {/* Message Input */}
        <div>
          <label className="text-sm font-medium mb-2 block">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your test message..."
            rows={4}
            className="w-full p-2 border border-input rounded-md bg-background resize-none"
          />
          <div className="text-xs text-muted-foreground mt-1">
            {message.length}/1000 characters
          </div>
        </div>

        {/* Send Button */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {targetType === 'group' ? 'Send to WhatsApp group' : 'Send to individual contact'}
          </div>
          <Button
            onClick={handleSend}
            disabled={isPending || !message.trim() || !target.trim()}
            className="flex items-center space-x-2"
          >
            {isPending ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send Test Message</span>
              </>
            )}
          </Button>
        </div>

        {/* Quick Message Templates */}
        <div className="border-t pt-4">
          <p className="text-sm font-medium mb-2">Quick Templates:</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Test message from Remindly',
              'System status check',
              'Hello from the reminder system!'
            ].map((template) => (
              <Button
                key={template}
                variant="outline"
                size="sm"
                onClick={() => setMessage(template)}
                className="text-xs"
              >
                {template}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}