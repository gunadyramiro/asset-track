'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'
import {
  Search,
  Bell,
  History,
  Filter,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  ArrowRightLeft,
  CheckCircle2,
  Pencil,
  Trash2,
  Eye,
  SlidersHorizontal,
} from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────
type StatusKey = 'Active' | 'Missing' | 'In Transit'

interface Asset {
  id: string
  name: string
  category: string
  location: string
  status: StatusKey
}

// ── Data ───────────────────────────────────────────────────────────────────
const assets: Asset[] = [
  { id: 'BNS-3392-CMP-881', name: 'Dell Latitude 7420',    category: 'IT Equipment',  location: 'Fl 3, Rm 302',        status: 'Active' },
  { id: 'BNS-2898-FUR-842', name: 'Herman Miller Aeron',   category: 'Furniture',      location: 'Fl 2, Open Area B',   status: 'Active' },
  { id: 'BNS-4404-TST-888', name: 'Fluke 87V Multimeter',  category: 'Testing Gear',   location: 'Lab 4 (Last Seen)',   status: 'Missing' },
  { id: 'BNS-4488-CMP-815', name: 'MacBook Pro 16"',       category: 'IT Equipment',   location: 'Fl 4, Exec Suite',    status: 'In Transit' },
]

// ── Status Badge ───────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: StatusKey }) {
  if (status === 'Active') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-green-200 bg-white text-green-700 text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-binus-orange inline-block" />
        Active
      </span>
    )
  }
  if (status === 'Missing') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-amber-300 bg-amber-50 text-amber-700 text-xs font-medium">
        <AlertTriangle className="w-3 h-3" />
        Missing
      </span>
    )
  }
  // In Transit
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-blue-200 bg-blue-50 text-blue-600 text-xs font-medium">
      <ArrowRightLeft className="w-3 h-3" />
      In Transit
    </span>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function InventoryPage() {
  const [categoryFilter] = useState('All Assets')
  const [statusFilter] = useState('Any Status')
  const currentPage = 1
  const totalEntries = 1248
  const perPage = 20

  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />

      <main className="flex-1 ml-[220px] flex flex-col">

        {/* ── Top bar ─────────────────────────────────────────────────── */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-8 py-3 flex items-center gap-4">
          {/* Page title inside topbar */}
          <h2 className="font-headline font-bold text-base text-gray-900 shrink-0">Asset Control</h2>

          {/* Search */}
          <div className="relative flex-1 max-w-xs ml-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search inventory..."
              className="w-full pl-9 pr-4 py-2 bg-red-50/60 border border-red-100 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon"
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
            <div className="w-9 h-9 rounded-full bg-gray-400 overflow-hidden flex items-center justify-center ml-1">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
          </div>
        </header>

        {/* ── Content ─────────────────────────────────────────────────── */}
        <div className="flex-1 p-8 flex flex-col">

          {/* Page heading row */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="font-headline font-bold text-2xl text-gray-900">Registered Assets</h1>
              <p className="text-sm text-binus-taupe mt-0.5">
                Manage and monitor{' '}
                <span className="text-binus-orange font-medium">all active RFID tags</span>{' '}
                within the facility.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>
              <Link href="/inventory/new" className="inline-flex items-center gap-2 px-4 py-2 bg-binus-maroon hover:bg-[#b81e15] text-white text-sm font-medium rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                Add New Inventory
              </Link>
            </div>
          </div>

          {/* Table card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col flex-1">

            {/* Filter bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 border border-red-100 text-binus-maroon text-xs font-medium rounded-md hover:bg-red-100 transition-colors">
                  {categoryFilter}
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium rounded-md hover:bg-gray-100 transition-colors">
                  {statusFilter}
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
              <span className="text-xs text-gray-500 font-mono">
                Total: <span className="font-semibold text-gray-700">1,248</span>
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                    <th className="px-5 py-3 font-semibold text-gray-700">Asset ID</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Item Name</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Category</th>
                    <th className="px-4 py-3 font-semibold text-binus-maroon">Location</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {assets.map((asset) => (
                    <tr key={asset.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-5 py-3.5 font-mono text-xs text-binus-maroon font-medium">
                        {asset.id}
                      </td>
                      <td className="px-4 py-3.5 text-binus-maroon font-medium hover:underline cursor-pointer">
                        {asset.name}
                      </td>
                      <td className="px-4 py-3.5 text-gray-600">{asset.category}</td>
                      <td className="px-4 py-3.5 text-binus-orange font-medium">{asset.location}</td>
                      <td className="px-4 py-3.5">
                        <StatusBadge status={asset.status} />
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-1.5">
                          <button className="p-1.5 rounded hover:bg-blue-50 text-binus-blue transition-colors" title="View">
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 rounded hover:bg-yellow-50 text-yellow-600 transition-colors" title="Edit">
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 rounded hover:bg-red-50 text-red-500 transition-colors" title="Delete">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                Showing{' '}
                <span className="font-medium text-gray-700">
                  {(currentPage - 1) * perPage + 1}
                </span>{' '}
                to{' '}
                <span className="font-medium text-gray-700">
                  {Math.min(currentPage * perPage, totalEntries)}
                </span>{' '}
                of{' '}
                <span className="font-medium text-gray-700">{totalEntries.toLocaleString('en-US')}</span>{' '}
                entries
              </p>

              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500 disabled:opacity-40 transition-colors" disabled>
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                      page === currentPage
                        ? 'bg-binus-maroon text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
