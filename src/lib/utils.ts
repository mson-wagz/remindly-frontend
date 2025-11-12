import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateTime(date: string, time: string): string {
  try {
    const [day, month, year] = date.split('/').map(Number)
    const [hours, minutes] = time.split(':').map(Number)
    
    const dateObj = new Date(year, month - 1, day, hours, minutes)
    
    return dateObj.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch (error) {
    return `${date} ${time}`
  }
}

export function getTimeUntil(date: string, time: string): string {
  try {
    const [day, month, year] = date.split('/').map(Number)
    const [hours, minutes] = time.split(':').map(Number)
    
    const targetDate = new Date(year, month - 1, day, hours, minutes)
    const now = new Date()
    const diff = targetDate.getTime() - now.getTime()
    
    if (diff < 0) return 'Overdue'
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours_remaining = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes_remaining = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    if (days > 0) return `${days}d ${hours_remaining}h`
    if (hours_remaining > 0) return `${hours_remaining}h ${minutes_remaining}m`
    return `${minutes_remaining}m`
  } catch (error) {
    return 'Invalid date'
  }
}

export function getStatusColor(status: string): string {
  switch (status?.toLowerCase()) {
    case 'active':
    case 'pending':
      return 'bg-blue-100 text-blue-800'
    case 'sent':
      return 'bg-green-100 text-green-800'
    case 'disabled':
    case 'failed':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}