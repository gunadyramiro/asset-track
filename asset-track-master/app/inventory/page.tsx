'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'
import {
  Search,
  Bell,
  History,
  Filter,
  Download,
  PlusSquare,
  ArrowUp,
  AlertTriangle,
  Truck,
  DollarSign,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Package,
  CheckSquare,
  Square
} from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────
type StatusKey = 'In Stock' | 'Low Stock' | 'In-Transit'

interface Asset {
  id: string
  name: string
  category: string
  locationZone: string
  locationDetail: string
  status: StatusKey
  statusCount: number
  lastAudit: string
  image: string
}

// ── Data ───────────────────────────────────────────────────────────────────
const assets: Asset[] = [
  { 
    id: 'RFID-883A-92', 
    name: 'ThinkPad X1 Carbon', 
    category: 'IT Equipment',  
    locationZone: 'Zone Alpha', 
    locationDetail: 'Bin 42-B',
    status: 'In Stock',
    statusCount: 24,
    lastAudit: 'Oct 24, 2023',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=64&h=64&fit=crop&auto=format'
  },
  { 
    id: 'RFID-712B-04', 
    name: 'Makita Impact Driver', 
    category: 'Industrial Tools',      
    locationZone: 'Zone Beta', 
    locationDetail: 'Rack 12-A',
    status: 'Low Stock',
    statusCount: 2,
    lastAudit: 'Oct 20, 2023',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=64&h=64&fit=crop&auto=format'
  },
  { 
    id: 'RFID-991C-44', 
    name: 'Herman Miller Aeron',  
    category: 'Office Furniture',   
    locationZone: 'Zone Alpha', 
    locationDetail: 'Floor 3',
    status: 'In-Transit',
    statusCount: 12,
    lastAudit: 'Sep 15, 2023',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=64&h=64&fit=crop&auto=format'
  },
]

// ── Status Badge ───────────────────────────────────────────────────────────
function StatusBadge({ status, count }: { status: StatusKey, count: number }) {
  if (status === 'In Stock') {
    return (
      <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[11px] font-semibold border border-orange-100 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
        {status} ({count})
      </span>
    )
  }
  if (status === 'Low Stock') {
    return (
      <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[11px] font-semibold border border-red-100 whitespace-nowrap">
        {status} ({count})
      </span>
    )
  }
  // In Transit
  return (
    <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[11px] font-semibold border border-amber-100 whitespace-nowrap">
      {status} ({count})
    </span>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function InventoryPage() {
  const totalEntries = 1248

  return (
    <div className="flex min-h-screen bg-[#FBFBFA]">
      <Sidebar />

      <main className="flex-1 ml-[220px] flex flex-col min-h-screen">
        {/* ── Top bar ─────────────────────────────────────────────────── */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-8 py-3 flex items-center gap-4">
          <h2 className="font-semibold text-[15px] text-gray-800 shrink-0">Asset Control</h2>

          {/* Search */}
          <div className="relative flex-1 max-w-[400px] ml-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets, zones, or IDs..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon transition-all"
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

        {/* ── Content ─────────────────────────────────────────────────── */}
        <div className="flex-1 p-8">
          
          {/* Header Section */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-[28px] font-bold text-gray-900 tracking-tight">Inventory Management</h1>
              <p className="text-gray-500 text-sm mt-1">
                Manage, track, and audit active enterprise assets.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <Download className="w-4 h-4 text-gray-500" />
                Export List
              </button>
              <Link href="/inventory/new" className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                <PlusSquare className="w-4 h-4" />
                Register Asset
              </Link>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <p className="text-[13px] font-medium text-gray-500">Total Assets</p>
                <div className="p-1.5 bg-red-50 border border-red-100 text-[#d32f2f] rounded-md">
                  <Package className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1,248</h3>
              <p className="text-[12px] font-medium text-[#d32f2f] flex items-center gap-1 mt-1">
                <ArrowUp className="w-3 h-3" />
                +12 this week
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <p className="text-[13px] font-medium text-gray-500">Low Stock Alerts</p>
                <div className="p-1.5 text-orange-500">
                  <AlertTriangle className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">12</h3>
              <p className="text-[12px] text-gray-500 mt-1">Requires immediate attention</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <p className="text-[13px] font-medium text-gray-500">Assets In-Transit</p>
                <div className="p-1.5 text-blue-500">
                  <Truck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">45</h3>
              <p className="text-[12px] text-gray-500 mt-1">Across 3 zones</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <p className="text-[13px] font-medium text-gray-500">Total Value</p>
                <div className="p-1.5 bg-red-50 border border-red-100 text-[#d32f2f] rounded-md">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$1.2M</h3>
              <p className="text-[12px] text-gray-500 mt-1">Estimated book value</p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex gap-6 items-start">
            
            {/* Filters Sidebar */}
            <div className="w-[260px] shrink-0 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-gray-800 font-semibold">
                <Filter className="w-4 h-4" />
                <h2>Filters</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[12px] font-medium text-gray-500 mb-2 block">Warehouse / Zone</label>
                  <button className="w-full flex items-center justify-between px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    All Zones
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                <div>
                  <label className="text-[12px] font-medium text-gray-500 mb-3 block">Asset Category</label>
                  <div className="space-y-2.5">
                    {[
                      { label: 'IT Equipment', checked: true },
                      { label: 'Industrial Tools', checked: true },
                      { label: 'Office Furniture', checked: false },
                      { label: 'Vehicles', checked: false },
                    ].map((item) => (
                      <label key={item.label} className="flex items-center gap-3 cursor-pointer group">
                        {item.checked ? (
                          <div className="text-[#d32f2f]">
                            <CheckSquare className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="text-gray-300 group-hover:text-gray-400 transition-colors">
                            <Square className="w-4 h-4" />
                          </div>
                        )}
                        <span className="text-sm text-gray-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-medium text-gray-500 mb-3 block">Stock Status</label>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1.5 bg-red-50 text-[#d32f2f] text-[12px] font-medium rounded-full border border-red-100 whitespace-nowrap">
                      In Stock
                    </button>
                    <button className="px-3 py-1.5 bg-white text-gray-600 text-[12px] font-medium rounded-full border border-gray-200 hover:bg-gray-50 whitespace-nowrap">
                      Low Stock
                    </button>
                    <button className="px-3 py-1.5 bg-white text-gray-600 text-[12px] font-medium rounded-full border border-gray-200 hover:bg-gray-50 whitespace-nowrap">
                      Out of Stock
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-gray-100 bg-white">
                      <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">Asset ID</th>
                      <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">Asset Details</th>
                      <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">Location</th>
                      <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">Status</th>
                      <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">Last Audit</th>
                      <th className="px-5 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {assets.map((asset) => (
                      <tr key={asset.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-5 py-4 align-middle whitespace-nowrap">
                          <span className="text-[13px] font-medium text-gray-900">{asset.id}</span>
                        </td>
                        <td className="px-5 py-4 align-middle">
                          <div className="flex items-center gap-3 w-max">
                            <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden shrink-0 border border-gray-200">
                              <img src={asset.image} alt={asset.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="text-[13px] font-semibold text-gray-900 whitespace-nowrap">{asset.name}</div>
                              <div className="text-[12px] text-gray-500 mt-0.5 whitespace-nowrap">{asset.category}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 align-middle whitespace-nowrap">
                          <div className="text-[13px] font-medium text-gray-900">{asset.locationZone}</div>
                          <div className="text-[12px] text-gray-500 mt-0.5">{asset.locationDetail}</div>
                        </td>
                        <td className="px-5 py-4 align-middle whitespace-nowrap">
                          <StatusBadge status={asset.status} count={asset.statusCount} />
                        </td>
                        <td className="px-5 py-4 align-middle whitespace-nowrap">
                          <span className="text-[13px] text-gray-700">{asset.lastAudit}</span>
                        </td>
                        <td className="px-5 py-4 align-middle whitespace-nowrap">
                          {/* Empty actions to match image */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-white">
                <span className="text-[13px] text-gray-500">
                  Showing 1 to 3 of {totalEntries.toLocaleString()} assets
                </span>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 bg-gray-50 disabled:opacity-50" disabled>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
