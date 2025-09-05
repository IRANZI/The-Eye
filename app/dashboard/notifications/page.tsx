import { 
  Bell, 
  Eye, 
  Search, 
  Settings, 
  AlertTriangle,
  Clock,
  CheckCircle,
  X,
  Filter
} from 'lucide-react'
import Link from 'next/link'

export default function NotificationsPage() {
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
                  placeholder="Search notifications..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/notifications" className="p-2 text-primary bg-blue-50 rounded-lg">
                <Bell className="w-5 h-5" />
              </Link>
              <Link href="/dashboard/settings" className="p-2 text-gray-400 hover:text-gray-600">
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
              <Bell className="w-6 h-6 text-primary mr-3" />
              Notifications
            </h1>
            <p className="text-gray-600 mt-1">Stay updated with crisis alerts and system notifications</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
              <CheckCircle className="w-4 h-4" />
              <span>Mark All Read</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 mb-6 border-b border-gray-200">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 pb-2">Overview</Link>
          <Link href="/dashboard/crisis-map" className="text-gray-600 hover:text-gray-900 pb-2">Crisis Map</Link>
          <Link href="/dashboard/analysis" className="text-gray-600 hover:text-gray-900 pb-2">Analysis</Link>
          <Link href="/dashboard/reports" className="text-gray-600 hover:text-gray-900 pb-2">Reports</Link>
          <span className="text-primary border-b-2 border-primary pb-2 font-medium">Notifications</span>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {/* Critical Alert */}
          <div className="bg-white border-l-4 border-red-500 rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">Critical Alert: Eastern Ukraine</h3>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">Critical</span>
                  </div>
                  <p className="text-gray-700 mb-2">Escalating conflict affecting civilian infrastructure. Immediate medical supplies needed for 150,000 affected civilians.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    2 minutes ago
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* High Priority Alert */}
          <div className="bg-white border-l-4 border-yellow-500 rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">Food Security Alert: Northern Ethiopia</h3>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">High Priority</span>
                  </div>
                  <p className="text-gray-700 mb-2">Severe food insecurity detected in rural areas affecting 89,000 people. Food assistance coordination required.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    15 minutes ago
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* System Notification */}
          <div className="bg-white border-l-4 border-blue-500 rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">System Update</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Info</span>
                  </div>
                  <p className="text-gray-700 mb-2">Crisis mapping system has been updated with enhanced satellite imagery processing capabilities.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    1 hour ago
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Medium Priority Alert */}
          <div className="bg-white border-l-4 border-orange-500 rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">Health Alert: Haiti</h3>
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">Medium Priority</span>
                  </div>
                  <p className="text-gray-700 mb-2">Cholera outbreak spreading in Port-au-Prince affecting 45,000 people. Medical response teams deployed.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    2 hours ago
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Read Notification */}
          <div className="bg-gray-50 border-l-4 border-gray-300 rounded-lg shadow-sm p-6 opacity-75">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-700">Weekly Report Generated</h3>
                    <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">Completed</span>
                  </div>
                  <p className="text-gray-600 mb-2">Your weekly crisis analysis report has been generated and is ready for review.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    1 day ago
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
