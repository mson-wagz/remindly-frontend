import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../lib/api'
import { Reminder, SendMessageRequest } from '../lib/types'

export function useReminders() {
  return useQuery({
    queryKey: ['reminders'],
    queryFn: () => api.getReminders(),
    refetchInterval: 30000, // Refetch every 30 seconds
  })
}

export function useTestReminders() {
  return useQuery({
    queryKey: ['test-reminders'],
    queryFn: () => api.testReminders(),
  })
}

export function useSendReminderNow() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (data: SendMessageRequest) => api.sendReminderNow(data),
    onSuccess: () => {
      // Refresh reminders after sending
      queryClient.invalidateQueries({ queryKey: ['reminders'] })
    },
  })
}