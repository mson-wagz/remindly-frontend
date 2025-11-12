import { WhatsAppStatus } from "../../components/whatsapp/WhatsAppStatus";
import { MessageTester } from "../../components/whatsapp/MessageTester";

export default function WhatsAppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Header Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            WhatsApp Integration
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 bg-clip-text text-transparent">
            WhatsApp Management
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect, monitor, and test your WhatsApp integration with QR code authentication
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 px-6">
        <div className="container mx-auto space-y-8">
          {/* Connection Status */}
          <div className="animate-fade-in">
            <WhatsAppStatus />
          </div>

          {/* Message Testing */}
          <div className="animate-slide-up">
            <MessageTester />
          </div>
        </div>
      </section>
    </div>
  );
}