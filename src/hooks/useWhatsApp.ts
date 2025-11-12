import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../lib/api'
import { WhatsAppGroup, WhatsAppStatus, SendMessageRequest, ScheduleAnnouncementRequest } from '../lib/types'

export function useWhatsAppStatus() {
  return useQuery({
    queryKey: ['whatsapp-status'],
    queryFn: () => api.getWhatsAppStatus(),
    refetchInterval: 10000, // Check status every 10 seconds
  })
}

export function useWhatsAppGroups() {
  return useQuery({
    queryKey: ['whatsapp-groups'],
    queryFn: () => api.getWhatsAppGroups(),
    refetchInterval: 60000, // Refresh groups every minute
  })
}

export function useSystemStatus() {
  return useQuery({
    queryKey: ['system-status'],
    queryFn: () => api.getSystemStatus(),
    refetchInterval: 15000, // Check system status every 15 seconds
  })
}

export function useSendToGroup() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (data: SendMessageRequest) => api.sendToGroup(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reminders'] })
    },
  })
}

export function useSendToContact() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ contactName, message }: { contactName: string; message: string }) => 
      api.sendToContact(contactName, message),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reminders'] })
    },
  })
}

export function useRestartWhatsApp() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: () => api.restartWhatsApp(),
    onSuccess: () => {
      // Refresh WhatsApp status after restart
      queryClient.invalidateQueries({ queryKey: ['whatsapp-status'] })
      queryClient.invalidateQueries({ queryKey: ['system-status'] })
    },
  })
}

export function useScheduleAnnouncement() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (data: ScheduleAnnouncementRequest) => api.scheduleAnnouncement(data),
    onSuccess: () => {
      // Refresh reminders list after scheduling
      queryClient.invalidateQueries({ queryKey: ['reminders'] })
    },
  })
}

export function useLogoutWhatsApp() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: () => api.logoutWhatsApp(),
    onSuccess: () => {
      // Refresh WhatsApp status after logout
      queryClient.invalidateQueries({ queryKey: ['whatsapp-status'] })
      queryClient.invalidateQueries({ queryKey: ['system-status'] })
    },
  })
}

export function useReinitializeWhatsApp() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: () => api.reinitializeWhatsApp(),
    onSuccess: () => {
      // Refresh WhatsApp status after reinitialize
      queryClient.invalidateQueries({ queryKey: ['whatsapp-status'] })
      queryClient.invalidateQueries({ queryKey: ['system-status'] })
    },
  })
}