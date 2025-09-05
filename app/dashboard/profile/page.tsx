import { 
  User, 
  Eye, 
  Search, 
  Bell,
  Settings,
  Edit,
  Camera,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Globe,
  Award,
  Clock,
  Users,
  FileText,
  Activity
} from 'lucide-react'
import Link from 'next/link'

export default function ProfilePage() {
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
                  placeholder="Search profile..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/notifications" className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </Link>
              <Link href="/dashboard/settings" className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="w-5 h-5" />
              </Link>
              <Link href="/dashboard/profile" className="flex items-center space-x-2 bg-blue-100 rounded-full px-3 py-2 border-2 border-primary">
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
              <User className="w-6 h-6 text-primary mr-3" />
              Profile
            </h1>
            <p className="text-gray-600 mt-1">Manage your personal information and professional details</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
            <Edit className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 mb-6 border-b border-gray-200">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 pb-2">Overview</Link>
          <Link href="/dashboard/crisis-map" className="text-gray-600 hover:text-gray-900 pb-2">Crisis Map</Link>
          <Link href="/dashboard/analysis" className="text-gray-600 hover:text-gray-900 pb-2">Analysis</Link>
          <Link href="/dashboard/reports" className="text-gray-600 hover:text-gray-900 pb-2">Reports</Link>
          <span className="text-primary border-b-2 border-primary pb-2 font-medium">Profile</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">H</span>
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 hover:bg-gray-50">
                    <Camera className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Humanitarian Analyst</h2>
                <p className="text-gray-600 mb-4">UNICEF Operations</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    New York, USA
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined 2022
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">42</div>
                      <div className="text-xs text-gray-500">Active Cases</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">156</div>
                      <div className="text-xs text-gray-500">Reports</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">2.3M</div>
                      <div className="text-xs text-gray-500">People Helped</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">Generate Report</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg">
                  <Activity className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">View Analytics</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">Team Collaboration</span>
                </button>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <User className="w-5 h-5 text-primary mr-2" />
                  Personal Information
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <div className="text-gray-900">Humanitarian Analyst</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employee ID</label>
                    <div className="text-gray-900">UN-2024-0156</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <div className="flex items-center text-gray-900">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      analyst@unicef.org
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <div className="flex items-center text-gray-900">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      +1 (555) 123-4567
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="flex items-center text-gray-900">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      New York, USA
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <div className="text-gray-900">Emergency Response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Award className="w-5 h-5 text-primary mr-2" />
                  Professional Details
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                    <div className="text-gray-900">Senior Humanitarian Analyst</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                    <div className="text-gray-900">8 years</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                    <div className="text-gray-900">Crisis Response & Data Analysis</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
                    <div className="text-gray-900">English, French, Spanish</div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Certifications</label>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Humanitarian Response</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Data Analysis</span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Crisis Management</span>
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">GIS Mapping</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  Recent Activity
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">Updated crisis alert for Eastern Ukraine</p>
                      <p className="text-sm text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">Generated weekly analysis report</p>
                      <p className="text-sm text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">Coordinated aid distribution in Northern Ethiopia</p>
                      <p className="text-sm text-gray-500">3 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">Reviewed team collaboration requests</p>
                      <p className="text-sm text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Activity className="w-5 h-5 text-primary mr-2" />
                  Performance Metrics
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Response Rate</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">47s</div>
                    <div className="text-sm text-gray-600">Avg Response Time</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
                    <div className="text-sm text-gray-600">Reports Generated</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
