import { RemindersList } from "../../components/reminders/RemindersList";
import { AnnouncementScheduler } from "../../components/reminders/AnnouncementScheduler";

export default function RemindersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Reminder Management
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
            Manage Your Reminders
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create new announcements and track all your scheduled reminders from Google Sheets
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            {/* Announcement Scheduler */}
            <div className="xl:col-span-5">
              <div className="sticky top-24">
                <AnnouncementScheduler />
              </div>
            </div>
            
            {/* Reminders List */}
            <div className="xl:col-span-7">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Active Reminders</h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Auto-synced with Google Sheets</span>
                  </div>
                </div>
                <RemindersList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}