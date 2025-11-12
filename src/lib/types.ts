export interface Reminder {
  message: string
  date: string
  time: string
  repeat?: string
  targetGroup?: string
  status?: string
  rowIndex?: number
}

export interface ScheduleAnnouncementRequest {
  message: string
  targetGroup: string
  date: string
  time: string
  repeat?: string
}

export interface ScheduleAnnouncementResponse {
  success: boolean
  message: string
  data?: ScheduleAnnouncementRequest
}

export interface WhatsAppGroup {
  id: string
  name: string
}

export interface SystemStatus {
  whatsappReady: boolean
  timestamp: string
}

export interface WhatsAppStatus {
  initialized: boolean
  ready: boolean
  hasQR: boolean
  qrCode?: string
  qrCodeImage?: string
  error?: string
}

export interface SendMessageRequest {
  message: string
  targetGroup: string
}

export interface SendMessageResponse {
  success: boolean
  message: string
  targetGroup?: string
  contactName?: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface DashboardStats {
  totalReminders: number
  activeReminders: number
  sentToday: number
  upcomingToday: number
  whatsappConnected: boolean
  lastSyncTime: string
}