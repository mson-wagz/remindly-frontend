'use client'

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { useWhatsAppStatus, useWhatsAppGroups, useRestartWhatsApp, useLogoutWhatsApp, useReinitializeWhatsApp } from "../../hooks/useWhatsApp"
import { Smartphone, Users, RefreshCw, QrCode, AlertCircle, LogOut, RotateCcw } from "lucide-react"

export function WhatsAppStatus() {
  const { data: status, isLoading, error } = useWhatsAppStatus()
  const { data: groups, isLoading: groupsLoading } = useWhatsAppGroups()
  const { mutate: restart, isPending: isRestarting } = useRestartWhatsApp()
  const { mutate: logout, isPending: isLoggingOut } = useLogoutWhatsApp()
  const { mutate: reinitialize, isPending: isReinitializing } = useReinitializeWhatsApp()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Connection Status */}
      <Card className="glass-card border-0 shadow-lg rounded-2xl">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 border-b border-gray-100">
          <CardTitle className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <span className="text-gray-900">WhatsApp Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {isLoading ? (
            <div className="flex items-center space-x-2 p-3 border rounded-xl bg-gray-50">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
              <span className="text-sm text-gray-600">Checking status...</span>
            </div>
          ) : error ? (
            <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <span className="text-sm text-red-800">Connection Error</span>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Status Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    status?.ready ? 'bg-green-500 animate-pulse' : 
                    status?.error ? 'bg-red-500' : 'bg-yellow-500 animate-pulse'
                  }`}></div>
                  <Badge 
                    className={`${
                      status?.ready ? 'bg-green-100 text-green-800' :
                      status?.error ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                    variant="outline"
                  >
                    {status?.ready ? 'Connected' : status?.error ? 'Error' : 'Connecting'}
                  </Badge>
                </div>
                {status?.initialized && !status?.ready && (
                  <span className="text-xs text-gray-500 animate-pulse">Initializing...</span>
                )}
              </div>

              {/* QR Code Notice */}
              {status?.hasQR && (
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <QrCode className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-yellow-800 mb-2">QR Code Ready</p>
                      
                      {/* Display QR Code Image if available */}
                      {status.qrCodeImage ? (
                        <div className="space-y-3">
                          <div className="flex justify-center p-4 bg-white rounded-lg border">
                            <img 
                              src={status.qrCodeImage} 
                              alt="WhatsApp QR Code" 
                              className="w-48 h-48"
                            />
                          </div>
                          <div className="space-y-2 text-xs text-yellow-700">
                            <p className="font-medium">📱 How to scan:</p>
                            <ol className="list-decimal list-inside space-y-1 pl-2">
                              <li>Open WhatsApp on your phone</li>
                              <li>Go to Settings → Linked Devices</li>
                              <li>Tap "Link a Device"</li>
                              <li>Scan the QR code above</li>
                              <li>Wait for connection to establish</li>
                            </ol>
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs text-yellow-700">Check server logs to scan the QR code with your WhatsApp mobile app</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Error Display */}
              {status?.error && (
                <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-800">Connection Error</p>
                      <p className="text-xs text-red-700">{status.error}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-3">
                {/* Logout Button */}
                {status?.ready && (
                  <Button
                    onClick={() => logout()}
                    disabled={isLoggingOut}
                    variant="outline"
                    size="sm"
                    className="w-full rounded-xl border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                  >
                    {isLoggingOut ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600 mr-2"></div>
                        Logging out...
                      </>
                    ) : (
                      <>
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout WhatsApp
                      </>
                    )}
                  </Button>
                )}

                {/* Generate New QR Button */}
                {!status?.ready && (
                  <Button
                    onClick={() => reinitialize()}
                    disabled={isReinitializing}
                    variant="outline"
                    size="sm"
                    className="w-full rounded-xl border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300"
                  >
                    {isReinitializing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2"></div>
                        Generating QR...
                      </>
                    ) : (
                      <>
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Generate New QR
                      </>
                    )}
                  </Button>
                )}

                {/* Restart Button */}
                <Button
                  onClick={() => restart()}
                  disabled={isRestarting}
                  variant="outline"
                  size="sm"
                  className="w-full rounded-xl"
                >
                  {isRestarting ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Restarting...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Restart Service
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Available Groups */}
      <Card className="glass-card border-0 shadow-lg rounded-2xl">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-100">
          <CardTitle className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <span className="text-gray-900">WhatsApp Groups</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {groupsLoading ? (
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-100 rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : groups && groups.length > 0 ? (
            <div className="space-y-3 max-h-80 overflow-y-auto">
              <div className="text-sm text-gray-600 mb-3">
                Found {groups.length} group{groups.length !== 1 ? 's' : ''}
              </div>
              {groups.map((group, index) => (
                <div
                  key={group.id}
                  className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-violet-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{group.name}</p>
                    <p className="text-xs text-gray-500 truncate">ID: {group.id.split('@')[0]}</p>
                  </div>
                  <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                    #{index + 1}
                  </Badge>
                </div>
              ))}
            </div>
          ) : !status?.ready ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">WhatsApp Not Connected</h3>
              <p className="text-xs text-gray-500 mb-3">
                Connect your WhatsApp account to see available groups
              </p>
              {status?.hasQR ? (
                <p className="text-xs text-yellow-600 font-medium">
                  ⬆️ Scan the QR code above to connect
                </p>
              ) : (
                <Button 
                  onClick={() => reinitialize()}
                  disabled={isReinitializing}
                  size="sm"
                  variant="outline"
                  className="rounded-xl border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  {isReinitializing ? 'Connecting...' : 'Connect WhatsApp'}
                </Button>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">No Groups Found</h3>
              <p className="text-xs text-gray-500 mb-3">
                Make sure you're part of some WhatsApp groups
              </p>
              <Button 
                onClick={() => window.location.reload()}
                size="sm"
                variant="outline"
                className="rounded-xl"
              >
                Refresh Page
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}