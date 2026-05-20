'use client'

import Sidebar from '../components/Sidebar'
import {
  Search,
  Bell,
  History,
  Download,
  Filter,
  Calendar,
  MoreHorizontal,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Star,
  Barcode
} from 'lucide-react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts'

// ── Mock Data ──────────────────────────────────────────────────────────────
const trendData = [
  { name: '1', inbound: 120, outbound: 80 },
  { name: '5', inbound: 190, outbound: 110 },
  { name: '10', inbound: 150, outbound: 90 },
  { name: '15', inbound: 220, outbound: 140 },
  { name: '20', inbound: 180, outbound: 120 },
  { name: '25', inbound: 250, outbound: 170 },
  { name: '30', inbound: 210, outbound: 140 }
]

const categoryData = [
  { name: 'IT Equipment', value: 35, color: '#d32f2f' },
  { name: 'Industrial Tools', value: 35, color: '#1976d2' },
  { name: 'Furniture', value: 20, color: '#f57c00' },
  { name: 'Vehicles', value: 10, color: '#424242' }
]

const zoneData = [
  { name: 'Zone A', scans: 350 },
  { name: 'Zone B', scans: 520 },
  { name: 'Zone C', scans: 210 },
  { name: 'Zone D', scans: 480 },
  { name: 'Zone E', scans: 150 }
]

const activityLog = [
  { time: '10:42 AM', event: 'Bulk Relocation Complete', status: 'SUCCESS' },
  { time: '09:15 AM', event: 'Low Stock Alert triggered', status: 'ALERT' },
  { time: '08:00 AM', event: 'Daily Audit Initiated', status: 'IN PROGRESS' },
  { time: 'Yesterday', event: 'New Shipment Scanned', status: 'SUCCESS' },
  { time: 'Yesterday', event: 'Unregistered Tag Detected', status: 'WARNING' }
]

// ── Page ──────────────────────────────────────────────────────────────────
export default function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-[#FBFBFA]">
      <Sidebar />

      <main className="flex-1 ml-[220px] flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-8 py-3 flex items-center gap-4">
          <h2 className="font-semibold text-[15px] text-gray-800 shrink-0">Asset Control</h2>

          <div className="relative flex-1 max-w-[400px] ml-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets, zones..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d32f2f]/20 focus:border-[#d32f2f] transition-all"
            />
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-orange-500 rounded-full border border-white" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
              <History className="w-4 h-4" />
            </button>
            <div className="w-8 h-8 rounded-full ml-2 overflow-hidden border border-gray-200">
              <img src="https://ui-avatars.com/api/?name=User&background=1f2937&color=fff" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8">
          
          {/* Header Section */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-[28px] font-bold text-gray-900 tracking-tight">Reports & Analytics</h1>
              <p className="text-gray-500 text-sm mt-1">
                Comprehensive overview of inventory health and movement patterns.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <Download className="w-4 h-4 text-gray-500" />
                Export
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <Filter className="w-4 h-4 text-gray-500" />
                Filter by Zone: All Zones
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <Calendar className="w-4 h-4 text-gray-500" />
                Last 30 Days
              </button>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between mb-2">
                <p className="text-[11px] font-bold text-gray-500 tracking-wider">TOTAL SCANS (MO)</p>
                <div className="text-blue-500">
                  <Barcode className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-end gap-3 mt-1">
                <h3 className="text-3xl font-bold text-gray-900">142k</h3>
                <p className="text-[13px] font-semibold text-emerald-500 flex items-center mb-1">
                  <ArrowUpRight className="w-3 h-3 mr-0.5" />
                  12%
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between mb-2">
                <p className="text-[11px] font-bold text-gray-500 tracking-wider">ACCURACY RATE</p>
                <div className="text-emerald-500">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-end gap-3 mt-1">
                <h3 className="text-3xl font-bold text-gray-900">99.8%</h3>
                <p className="text-[12px] text-gray-500 mb-1">Target: 99.5%</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between mb-2">
                <p className="text-[11px] font-bold text-[#d32f2f] tracking-wider">MISSING ASSETS</p>
                <div className="text-red-500 bg-red-50 rounded-full p-1 border border-red-100">
                  <AlertCircle className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-end gap-3 mt-1">
                <h3 className="text-3xl font-bold text-[#d32f2f]">24</h3>
                <p className="text-[12px] font-medium text-[#d32f2f] mb-1">Requires audit</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between mb-2">
                <p className="text-[11px] font-bold text-gray-500 tracking-wider">MOST ACTIVE ZONE</p>
                <div className="text-orange-500">
                  <Star className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-1">
                <h3 className="text-[18px] font-bold text-gray-900">Server Room B</h3>
                <p className="text-[12px] text-gray-500">4,201 events</p>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            
            {/* Asset Movement Trends (Col Span 2) */}
            <div className="col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[15px] font-semibold text-gray-900">Asset Movement Trends</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-[#d32f2f] bg-white" />
                    <span className="text-[12px] text-gray-500">Inbound</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-[#1976d2] bg-white" />
                    <span className="text-[12px] text-gray-500">Outbound</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 ml-2">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorInbound" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d32f2f" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#d32f2f" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorOutbound" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1976d2" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#1976d2" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
                    <RechartsTooltip />
                    <Area type="monotone" dataKey="inbound" stroke="#d32f2f" fillOpacity={1} fill="url(#colorInbound)" strokeWidth={2} activeDot={{ r: 6 }} />
                    <Area type="monotone" dataKey="outbound" stroke="#1976d2" fillOpacity={1} fill="url(#colorOutbound)" strokeWidth={2} activeDot={{ r: 6 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Distribution by Category (Col Span 1) */}
            <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[15px] font-semibold text-gray-900">Distribution by Category</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="h-[200px] w-full relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey="value"
                      stroke="none"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-4 ml-2">
                {categoryData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-[12px] text-gray-600 truncate">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scans by Zone (Col Span 2) */}
            <div className="col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[15px] font-semibold text-gray-900">Scans by Zone</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={zoneData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barSize={36}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
                    <RechartsTooltip cursor={{ fill: '#f9fafb' }} />
                    <Bar dataKey="scans" fill="#ff9999" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity Log (Col Span 1) */}
            <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[15px] font-semibold text-gray-900">Recent Activity Log</h3>
                <button className="text-[12px] font-semibold text-[#d32f2f] hover:text-[#b71c1c]">
                  View All
                </button>
              </div>

              <div className="flex-1 overflow-auto -mx-2">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100 bg-red-50/40 text-[11px] font-semibold text-gray-500">
                      <th className="py-2.5 px-3 rounded-l-md whitespace-nowrap">Timestamp</th>
                      <th className="py-2.5 px-3 whitespace-nowrap">Event</th>
                      <th className="py-2.5 px-3 rounded-r-md whitespace-nowrap">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px]">
                    {activityLog.map((log, i) => {
                      let statusBadge = null
                      if (log.status === 'SUCCESS') {
                        statusBadge = (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 font-semibold text-[10px] whitespace-nowrap border border-emerald-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            SUCCESS
                          </span>
                        )
                      } else if (log.status === 'ALERT') {
                        statusBadge = (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-50 text-red-600 font-semibold text-[10px] whitespace-nowrap border border-red-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            ALERT
                          </span>
                        )
                      } else if (log.status === 'IN PROGRESS') {
                        statusBadge = (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-600 font-semibold text-[10px] whitespace-nowrap border border-blue-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            IN PROGRESS
                          </span>
                        )
                      } else if (log.status === 'WARNING') {
                        statusBadge = (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-orange-50 text-orange-500 font-semibold text-[10px] whitespace-nowrap border border-orange-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            WARNING
                          </span>
                        )
                      }

                      return (
                        <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="py-3.5 px-3 text-gray-500 whitespace-nowrap align-middle">{log.time}</td>
                          <td className={`py-3.5 px-3 font-medium whitespace-nowrap align-middle ${log.status === 'ALERT' ? 'text-red-600' : 'text-gray-900'}`}>
                            {log.event}
                          </td>
                          <td className="py-3.5 px-3 whitespace-nowrap align-middle">{statusBadge}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
