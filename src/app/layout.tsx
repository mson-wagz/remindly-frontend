/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-comment-textnodes */
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../components/providers";

export const metadata: Metadata = {
  title: "Remindly - WhatsApp Reminder System",
  description: "Automated WhatsApp reminder system integrated with Google Sheets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 font-sans antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 shadow-sm">
              <div className="container flex h-16 items-center justify-between px-6">
                <div className="flex items-center space-x-8">
                  <a className="flex items-center space-x-3" href="/">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600">
                      <span className="text-sm font-bold text-white">R</span>
                    </div>
                    <span className="text-xl font-bold bg-purple-600 bg-clip-text text-transparent">
                      Remindly
                    </span>
                  </a>
                  <nav className="hidden md:flex items-center space-x-1">
                    <a href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200">
                      Dashboard
                    </a>
                    <a href="/reminders" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200">
                      Reminders
                    </a>
                    <a href="/whatsapp" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200">
                      WhatsApp
                    </a>
                  </nav>
                </div>
                
                
                <div className="md:hidden">
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                
                <div className="hidden md:flex items-center space-x-2">
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>System Online</span>
                  </div>
                </div>
              </div>
            </header>
            
            <main className="flex-1 relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
              {children}
            </main>
            
            <footer className="border-t border-gray-200/50 bg-white/50 backdrop-blur-lg">
              <div className="container px-6 py-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <p>© 2025 Remindly. All rights reserved.</p>
                  <p>Powered by WhatsApp & Google Sheets</p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
