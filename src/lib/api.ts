import { 
  Reminder, 
  WhatsAppGroup, 
  SystemStatus, 
  WhatsAppStatus, 
  SendMessageRequest, 
  SendMessageResponse,
  ScheduleAnnouncementRequest,
  ScheduleAnnouncementResponse
} from './types'

class RemindlyAPI {
  private baseURL: string

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  // System Status
  async getSystemStatus(): Promise<SystemStatus> {
    return this.request<SystemStatus>('/status')
  }

  // Reminders
  async getReminders(): Promise<Reminder[]> {
    return this.request<Reminder[]>('/reminders')
  }

  async testReminders(): Promise<Reminder[]> {
    return this.request<Reminder[]>('/reminders/test')
  }

  async sendReminderNow(data: SendMessageRequest): Promise<SendMessageResponse> {
    return this.request<SendMessageResponse>('/reminder/send', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // WhatsApp
  async getWhatsAppStatus(): Promise<WhatsAppStatus> {
    return this.request<WhatsAppStatus>('/whatsapp/status')
  }

  async getWhatsAppGroups(): Promise<WhatsAppGroup[]> {
    return this.request<WhatsAppGroup[]>('/whatsapp/groups')
  }

  async sendToGroup(data: SendMessageRequest): Promise<SendMessageResponse> {
    return this.request<SendMessageResponse>('/whatsapp/send-to-group', {
      method: 'POST',
      body: JSON.stringify({
        groupName: data.targetGroup,
        message: data.message,
      }),
    })
  }

  async sendToContact(contactName: string, message: string): Promise<SendMessageResponse> {
    return this.request<SendMessageResponse>('/whatsapp/send-to-contact', {
      method: 'POST',
      body: JSON.stringify({
        contactName,
        message,
      }),
    })
  }

  async restartWhatsApp(): Promise<{ success: boolean; message: string }> {
    return this.request('/whatsapp/restart', {
      method: 'POST',
    })
  }

  // WhatsApp logout and reinitialize
  async logoutWhatsApp(): Promise<{ success: boolean; message: string }> {
    return this.request('/whatsapp/logout', {
      method: 'POST',
    })
  }

  async reinitializeWhatsApp(): Promise<{ success: boolean; message: string }> {
    return this.request('/whatsapp/reinitialize', {
      method: 'POST',
    })
  }

  // Announcements
  async scheduleAnnouncement(data: ScheduleAnnouncementRequest): Promise<ScheduleAnnouncementResponse> {
    return this.request<ScheduleAnnouncementResponse>('/announcements/schedule', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Debug endpoints
  async testMessage(): Promise<unknown> {
    return this.request('/debug/test-message')
  }

  async getWhatsAppDebugStatus(): Promise<unknown> {
    return this.request('/debug/whatsapp-status')
  }
}

export const api = new RemindlyAPI()
export default api