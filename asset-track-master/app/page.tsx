'use client'

import Sidebar from './components/Sidebar'
import {
  Search,
  Bell,
  History,
  ArrowUpRight,
  ArrowDownRight,
  Wrench,
  AlertTriangle,
  Package,
} from 'lucide-react'

const zones = [
  { label: 'Zone A', inStock: 82, missing: 18 },
  { label: 'Zone B', inStock: 91, missing: 9 },
  { label: 'Zone C', inStock: 74, missing: 26 },
  { label: 'Zone D', inStock: 88, missing: 12 },
  { label: 'Zone E', inStock: 95, missing: 5 },
]

const floors = [
  { id: 'FL3', pct: 85, colorClass: 'bg-binus-maroon', label: '85% Capacity' },
  { id: 'FL2', pct: 95, colorClass: 'bg-binus-orange', label: '95% Capacity' },
  { id: 'FL1', pct: 45, colorClass: 'bg-binus-maroon opacity-50', label: '45% Capacity' },
]

const recentScans = [
  { tag: 'E200-45A2-8B1C', asset: 'Microscope Model X', zone: 'Zone A – Laboratory', status: 'Active', time: '2 min ago' },
  { tag: 'E200-78B3-2D9E', asset: 'Centrifuge Pro', zone: 'Zone B – Storage', status: 'Maintenance', time: '15 min ago' },
  { tag: 'E200-11C4-5F3A', asset: 'Spectrometer', zone: 'Zone C – Equipment', status: 'Missing', time: '1 hr ago' },
  { tag: 'E200-99D5-8E7B', asset: 'PCR Machine', zone: 'Zone A – Laboratory', status: 'Active', time: '2 hrs ago' },
]

const statusStyle: Record<string, string> = {
  Active: 'bg-green-50 text-green-700',
  Maintenance: 'bg-yellow-50 text-yellow-700',
  Missing: 'bg-red-50 text-red-700',
}

const BAR_MAX_H = 96

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />

      <main className="flex-1 ml-[220px] flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-10 bg-white/85 backdrop-blur border-b border-gray-100 px-8 py-3 flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Assets, Zones, Tags…"
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon"
            />
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-binus-orange rounded-full border border-white" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <History className="w-5 h-5 text-gray-500" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm font-semibold ml-1">
              LA
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Title row */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-headline font-bold text-2xl text-gray-900">Executive Summary</h1>
              <p className="text-sm text-binus-taupe mt-0.5">Real-time asset tracking across all operational zones.</p>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <button className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
                Export
              </button>
              <button className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
                Filter
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <p className="text-xs uppercase tracking-wider text-binus-taupe font-medium">Total Active Assets</p>
                <Package className="w-5 h-5 text-binus-maroon opacity-80" />
              </div>
              <p className="font-headline font-bold text-4xl text-gray-900 leading-none">14,285</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>2.4% vs last month</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <p className="text-xs uppercase tracking-wider text-binus-taupe font-medium">Items Missing (Alert)</p>
                <AlertTriangle className="w-5 h-5 text-binus-orange opacity-80" />
              </div>
              <p className="font-headline font-bold text-4xl text-binus-maroon leading-none">42</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-binus-maroon">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>12 new since yesterday</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <p className="text-xs uppercase tracking-wider text-binus-taupe font-medium">Pending Repairs</p>
                <Wrench className="w-5 h-5 text-binus-orange opacity-80" />
              </div>
              <p className="font-headline font-bold text-4xl text-gray-900 leading-none">186</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                <ArrowDownRight className="w-3.5 h-3.5" />
                <span>Steady avg 4 days turnaround</span>
              </div>
            </div>
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-[1fr_320px] gap-6">
            {/* Zone Bar Chart */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-headline font-semibold text-base text-gray-900">Inventory Completeness by Zone</h2>
                <button className="text-sm text-binus-maroon font-medium hover:underline">View Details</button>
              </div>
              <div className="flex items-end justify-around gap-3 h-28">
                {zones.map(({ label, inStock, missing }) => {
                  const totalH = BAR_MAX_H
                  const inH = Math.round((inStock / 100) * totalH)
                  const misH = Math.round((missing / 100) * totalH)
                  return (
                    <div key={label} className="flex flex-col items-center gap-1 flex-1">
                      <div className="flex flex-col-reverse items-center w-full gap-0.5" style={{ height: totalH }}>
                        <div className="w-full rounded-sm bg-binus-maroon" style={{ height: inH }} />
                        <div className="w-full rounded-sm bg-binus-orange opacity-80" style={{ height: misH }} />
                      </div>
                      <span className="text-[11px] text-gray-500 font-mono">{label}</span>
                    </div>
                  )
                })}
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="w-3 h-3 rounded-sm bg-binus-maroon inline-block" />
                  In Stock
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="w-3 h-3 rounded-sm bg-binus-orange opacity-80 inline-block" />
                  Missing/Alert
                </div>
              </div>
            </div>

            {/* Distribution Map */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="mb-1">
                <h2 className="font-headline font-semibold text-base text-gray-900">Distribution Map</h2>
                <p className="text-xs text-binus-orange mt-0.5">High-density asset clusters.</p>
              </div>
              <div className="space-y-4 mt-5">
                {floors.map(({ id, pct, colorClass, label }) => (
                  <div key={id} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-gray-700">{id}</span>
                      <span className="text-xs text-gray-500">{label}</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${colorClass}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Scans */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
              <h2 className="font-headline font-semibold text-base text-gray-900">Recent RFID Scans</h2>
              <button className="text-sm text-binus-maroon font-medium hover:underline">View All</button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-binus-taupe uppercase tracking-wider bg-gray-50">
                  <th className="px-6 py-3 font-medium">RFID Tag</th>
                  <th className="px-4 py-3 font-medium">Asset Name</th>
                  <th className="px-4 py-3 font-medium">Zone</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentScans.map(({ tag, asset, zone, status, time }) => (
                  <tr key={tag} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-6 py-3.5 font-mono text-binus-blue text-xs">{tag}</td>
                    <td className="px-4 py-3.5 text-gray-900 font-medium">{asset}</td>
                    <td className="px-4 py-3.5 text-gray-500">{zone}</td>
                    <td className="px-4 py-3.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyle[status]}`}>{status}</span>
                    </td>
                    <td className="px-4 py-3.5 text-gray-400 text-xs font-mono">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
