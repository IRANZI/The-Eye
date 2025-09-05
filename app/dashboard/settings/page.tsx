import { 
  Settings, 
  Eye, 
  Search, 
  Bell,
  User,
  Shield,
  Globe,
  Palette,
  Monitor,
  Save,
  RefreshCw,
  Mail,
  Smartphone,
  Volume2,
  Lock
} from 'lucide-react'
import Link from 'next/link'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <span className="text-2xl font-bold text-secondary">The Eye</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search settings..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/notifications" className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </Link>
              <Link href="/dashboard/settings" className="p-2 text-primary bg-blue-50 rounded-lg">
                <Settings className="w-5 h-5" />
              </Link>
              <Link href="/dashboard/profile" className="flex items-center space-x-2 bg-blue-50 rounded-full px-3 py-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">H</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Humanitarian Analyst</div>
                  <div className="text-gray-500">UNICEF Operations</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full px-6 py-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Settings className="w-6 h-6 text-primary mr-3" />
              Settings
            </h1>
            <p className="text-gray-600 mt-1">Manage your account preferences and system configuration</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <RefreshCw className="w-4 h-4" />
              <span>Reset to Default</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 mb-6 border-b border-gray-200">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 pb-2">Overview</Link>
          <Link href="/dashboard/crisis-map" className="text-gray-600 hover:text-gray-900 pb-2">Crisis Map</Link>
          <Link href="/dashboard/analysis" className="text-gray-600 hover:text-gray-900 pb-2">Analysis</Link>
          <Link href="/dashboard/reports" className="text-gray-600 hover:text-gray-900 pb-2">Reports</Link>
          <span className="text-primary border-b-2 border-primary pb-2 font-medium">Settings</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <nav className="space-y-2">
                <a href="#account" className="flex items-center space-x-3 px-3 py-2 text-primary bg-blue-50 rounded-md">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Account</span>
                </a>
                <a href="#notifications" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                  <Bell className="w-4 h-4" />
                  <span>Notifications</span>
                </a>
                <a href="#security" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                  <Shield className="w-4 h-4" />
                  <span>Security</span>
                </a>
                <a href="#preferences" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                  <Palette className="w-4 h-4" />
                  <span>Preferences</span>
                </a>
                <a href="#system" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                  <Monitor className="w-4 h-4" />
                  <span>System</span>
                </a>
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Account Settings */}
            <div id="account" className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <User className="w-5 h-5 text-primary mr-2" />
                  Account Information
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Humanitarian Analyst"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="analyst@unicef.org"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                    <input
                      type="text"
                      defaultValue="UNICEF Operations"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary">
                      <option>Humanitarian Analyst</option>
                      <option>Field Coordinator</option>
                      <option>Operations Manager</option>
                      <option>Regional Director</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div id="notifications" className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Bell className="w-5 h-5 text-primary mr-2" />
                  Notification Preferences
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">Email Notifications</p>
                        <p className="text-sm text-gray-500">Receive crisis alerts via email</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">Push Notifications</p>
                        <p className="text-sm text-gray-500">Real-time alerts on your device</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Volume2 className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">Sound Alerts</p>
                        <p className="text-sm text-gray-500">Audio notifications for critical alerts</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div id="security" className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-2" />
                  Security & Privacy
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-blue-50">
                    Enable 2FA
                  </button>
                </div>
              </div>
            </div>

            {/* System Preferences */}
            <div id="preferences" className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Palette className="w-5 h-5 text-primary mr-2" />
                  Display Preferences
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Auto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary">
                    <option>Afrikaans</option>
                    <option>Albanian</option>
                    <option>Amharic</option>
                    <option>Arabic</option>
                    <option>Armenian</option>
                    <option>Azerbaijani</option>
                    <option>Basque</option>
                    <option>Belarusian</option>
                    <option>Bengali</option>
                    <option>Bosnian</option>
                    <option>Bulgarian</option>
                    <option>Catalan</option>
                    <option>Chinese (Simplified)</option>
                    <option>Chinese (Traditional)</option>
                    <option>Croatian</option>
                    <option>Czech</option>
                    <option>Danish</option>
                    <option>Dutch</option>
                    <option selected>English</option>
                    <option>Estonian</option>
                    <option>Filipino</option>
                    <option>Finnish</option>
                    <option>French</option>
                    <option>Galician</option>
                    <option>Georgian</option>
                    <option>German</option>
                    <option>Greek</option>
                    <option>Gujarati</option>
                    <option>Haitian Creole</option>
                    <option>Hausa</option>
                    <option>Hebrew</option>
                    <option>Hindi</option>
                    <option>Hungarian</option>
                    <option>Icelandic</option>
                    <option>Igbo</option>
                    <option>Indonesian</option>
                    <option>Irish</option>
                    <option>Italian</option>
                    <option>Japanese</option>
                    <option>Javanese</option>
                    <option>Kannada</option>
                    <option>Kazakh</option>
                    <option>Khmer</option>
                    <option>Korean</option>
                    <option>Kurdish</option>
                    <option>Kyrgyz</option>
                    <option>Lao</option>
                    <option>Latin</option>
                    <option>Latvian</option>
                    <option>Lithuanian</option>
                    <option>Luxembourgish</option>
                    <option>Macedonian</option>
                    <option>Malagasy</option>
                    <option>Malay</option>
                    <option>Malayalam</option>
                    <option>Maltese</option>
                    <option>Maori</option>
                    <option>Marathi</option>
                    <option>Mongolian</option>
                    <option>Myanmar (Burmese)</option>
                    <option>Nepali</option>
                    <option>Norwegian</option>
                    <option>Pashto</option>
                    <option>Persian</option>
                    <option>Polish</option>
                    <option>Portuguese</option>
                    <option>Punjabi</option>
                    <option>Romanian</option>
                    <option>Russian</option>
                    <option>Samoan</option>
                    <option>Scottish Gaelic</option>
                    <option>Serbian</option>
                    <option>Sesotho</option>
                    <option>Shona</option>
                    <option>Sindhi</option>
                    <option>Sinhala</option>
                    <option>Slovak</option>
                    <option>Slovenian</option>
                    <option>Somali</option>
                    <option>Spanish</option>
                    <option>Sundanese</option>
                    <option>Swahili</option>
                    <option>Swedish</option>
                    <option>Tajik</option>
                    <option>Tamil</option>
                    <option>Telugu</option>
                    <option>Thai</option>
                    <option>Turkish</option>
                    <option>Ukrainian</option>
                    <option>Urdu</option>
                    <option>Uzbek</option>
                    <option>Vietnamese</option>
                    <option>Welsh</option>
                    <option>Xhosa</option>
                    <option>Yiddish</option>
                    <option>Yoruba</option>
                    <option>Zulu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary">
                    <option>UTC</option>
                    <option>EST (UTC-5)</option>
                    <option>PST (UTC-8)</option>
                    <option>CET (UTC+1)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
