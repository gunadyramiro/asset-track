'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import {
  Search,
  Bell,
  History,
  Filter,
  Download,
  Scan,
  RefreshCw,
  X,
  Edit2,
  MapPin,
  Move,
  SignalHigh,
  SignalMedium,
  SignalLow,
  SignalZero,
  CheckCircle2,
  Plus,
  AlertTriangle,
  Play,
  Wifi,
  Laptop,
  Armchair,
  Wrench,
  Server,
  Info
} from 'lucide-react'

// ── Components ────────────────────────────────────────────────────────
function SignalStrength({ level }: { level: number }) {
  if (level === 4) return <SignalHigh className="w-4 h-4 text-binus-maroon" />
  if (level === 3) return <SignalMedium className="w-4 h-4 text-binus-maroon" />
  if (level === 2) return <SignalLow className="w-4 h-4 text-binus-maroon opacity-70" />
  if (level === 1) return <SignalZero className="w-4 h-4 text-gray-300" />
  return <SignalZero className="w-4 h-4 text-gray-200" />
}

export default function LiveScannerPage() {
  const [isRelocateModalOpen, setIsRelocateModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />

      <main className="flex-1 ml-[220px] flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-8 py-3 flex items-center gap-4">
          <h2 className="font-headline font-bold text-base text-gray-900 shrink-0">Asset Control</h2>

          <div className="relative flex-1 max-w-sm ml-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets, UIDs..."
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon"
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
            <div className="w-9 h-9 rounded-full bg-slate-800 overflow-hidden flex items-center justify-center ml-1 text-white text-xs">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Content Area - Split Layout */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Main Left Column (Scanner & Table) */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-5 mb-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-binus-orange animate-pulse" />
                  <span className="text-[11px] font-bold text-binus-orange uppercase tracking-wider">Scanning Active</span>
                </div>
                <h1 className="font-headline font-bold text-4xl text-gray-900 mb-2">Live RFID Scanner</h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Real-time asset detection for Zone A. Ensure scanner wand is within 5 meters of target items for optimal read rates.
                </p>
              </div>
              
              <div className="flex items-center gap-3 shrink-0 mt-2 xl:mt-0">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  Filter Assets
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                  Export Data
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#D92D20] hover:bg-binus-maroon text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                  <Scan className="w-4 h-4" />
                  Scan New Zone
                </button>
              </div>
            </div>

            {/* Filter Box */}
            <div className="bg-red-50/50 border border-red-100 rounded-xl p-5 mb-8 shrink-0">
              <div className="flex flex-wrap items-end gap-5">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Search Asset</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Asset Name or UID"
                      className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon"
                    />
                  </div>
                </div>
                <div className="w-40">
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Category</label>
                  <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon appearance-none">
                    <option>All</option>
                  </select>
                </div>
                <div className="w-40">
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Status</label>
                  <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon appearance-none">
                    <option>All</option>
                  </select>
                </div>
                <div className="w-40">
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Signal</label>
                  <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon appearance-none">
                    <option>All</option>
                  </select>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-sm font-medium text-binus-maroon hover:underline px-2">
                    Clear Filters
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 py-2 bg-[#990a0a] hover:bg-binus-maroon text-white rounded-lg text-sm font-medium transition-colors">
                    <Filter className="w-4 h-4" fill="currentColor" />
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Table Area */}
            <div className="bg-white border text-sm border-gray-200 rounded-xl shadow-sm flex flex-col shrink-0">
              {/* Header row */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
                <span className="text-sm text-gray-600 font-medium">Showing <span className="font-bold text-gray-900">42</span> detected items</span>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <RefreshCw className="w-3.5 h-3.5" />
                  Last update: Just now
                </div>
              </div>

              {/* Bulk Actions Toolbar (Active State) */}
              <div className="bg-red-50/80 px-5 py-3 border-b border-red-100 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <span className="text-sm font-semibold text-binus-maroon">3 items selected <span className="text-gray-300 font-normal px-1">|</span></span>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-binus-maroon transition-colors">
                      <Edit2 className="w-3.5 h-3.5" /> Change Status
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-binus-maroon transition-colors">
                      <Download className="w-3.5 h-3.5" /> Export Selection
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-binus-maroon transition-colors">
                      <MapPin className="w-3.5 h-3.5" /> Assign to Zone
                    </button>
                    <button 
                      className="flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-binus-maroon transition-colors"
                      onClick={() => setIsRelocateModalOpen(true)}
                    >
                      <Move className="w-3.5 h-3.5" /> Batch Relocate
                    </button>
                  </div>
                </div>
                <button className="p-1 hover:bg-red-100 rounded text-gray-500 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Table rendering */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 border-b border-gray-100 bg-red-50/30">
                      <th className="px-5 py-3 w-10">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-binus-maroon focus:ring-binus-maroon" checked readOnly/>
                      </th>
                      <th className="px-3 py-3 font-semibold text-gray-700">No.</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Item Name</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">UID Tag</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Category</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Last Detected</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Signal</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    
                    {/* Row 1 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4">
                        <input type="checkbox" checked readOnly className="w-4 h-4 rounded border-gray-300 text-binus-maroon focus:ring-binus-maroon bg-binus-maroon accent-binus-maroon"/>
                      </td>
                      <td className="px-3 py-4 text-gray-500 font-mono text-xs">01</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-[#1e293b] flex items-center justify-center text-white shrink-0">
                            <Laptop className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-gray-900">MacBook Pro 16"</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-gray-600 font-mono text-xs">E28B.1130.45A1</td>
                      <td className="px-4 py-4 text-gray-500">IT Equipment</td>
                      <td className="px-4 py-4 text-gray-500 font-mono text-xs">10:42:01 AM</td>
                      <td className="px-4 py-4"><SignalStrength level={4} /></td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-binus-orange" />
                          <span className="text-xs font-semibold text-gray-700 bg-orange-50 px-2 py-0.5 rounded">Detected</span>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4">
                        <input type="checkbox" checked readOnly className="w-4 h-4 rounded border-gray-300 text-binus-maroon focus:ring-binus-maroon bg-binus-maroon accent-binus-maroon"/>
                      </td>
                      <td className="px-3 py-4 text-gray-500 font-mono text-xs">02</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-red-50 text-binus-maroon flex items-center justify-center shrink-0">
                            <Armchair className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-gray-900">Ergonomic Chair</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-gray-600 font-mono text-xs">E28B.1130.8BB2</td>
                      <td className="px-4 py-4 text-gray-500">Furniture</td>
                      <td className="px-4 py-4 text-gray-500 font-mono text-xs">10:42:00 AM</td>
                      <td className="px-4 py-4"><SignalStrength level={3} /></td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-binus-orange" />
                          <span className="text-xs font-semibold text-gray-700 bg-orange-50 px-2 py-0.5 rounded">In Stock</span>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 - Missing */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4">
                        <input type="checkbox" readOnly className="w-4 h-4 rounded border-gray-300 text-binus-maroon focus:ring-binus-maroon"/>
                      </td>
                      <td className="px-3 py-4 text-gray-500 font-mono text-xs">03</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-red-50 text-binus-maroon flex items-center justify-center shrink-0">
                            <Wrench className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-binus-maroon">Calibration Tool Beta</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-binus-maroon font-semibold font-mono text-xs">E28B.1130.00F9</td>
                      <td className="px-4 py-4 text-gray-500">Tools</td>
                      <td className="px-4 py-4 text-gray-500 font-mono text-xs leading-tight">Yesterday,<br/>14:30</td>
                      <td className="px-4 py-4"><SignalStrength level={1} /></td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-binus-maroon" />
                          <span className="text-xs font-semibold text-binus-maroon bg-red-50 px-2 py-0.5 rounded">Missing</span>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4">
                        <input type="checkbox" checked readOnly className="w-4 h-4 rounded border-gray-300 text-binus-maroon focus:ring-binus-maroon bg-binus-maroon accent-binus-maroon"/>
                      </td>
                      <td className="px-3 py-4 text-gray-500 font-mono text-xs">04</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-red-50 text-binus-maroon flex items-center justify-center shrink-0">
                            <Server className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-gray-900">Cisco Switch X900</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-gray-600 font-mono text-xs">E28B.1130.22C4</td>
                      <td className="px-4 py-4 text-gray-500">IT Equipment</td>
                      <td className="px-4 py-4 text-gray-500 font-mono text-xs">10:41:55 AM</td>
                      <td className="px-4 py-4"><SignalStrength level={3} /></td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-binus-orange" />
                          <span className="text-xs font-semibold text-gray-700 bg-orange-50 px-2 py-0.5 rounded">Processing</span>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
            
          </div>

          {/* Right Column (Telemetry & Events) */}
          <div className="w-[340px] bg-white border-l border-gray-100 p-6 flex flex-col overflow-y-auto shrink-0">
            
            {/* Scanner Telemetry */}
            <div className="mb-10">
              <h3 className="font-headline font-semibold text-[15px] text-gray-900 mb-4">Scanner Telemetry</h3>
              
              <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Scan Rate</p>
                  <p className="font-headline font-bold text-2xl text-gray-900">42 <span className="text-sm font-normal text-gray-500">t/s</span></p>
                </div>
                
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Antenna</p>
                  <p className="font-headline font-bold text-2xl text-binus-orange">98%</p>
                </div>
              </div>

              <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-4 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Active Reader IP</p>
                  <p className="font-mono text-sm font-semibold text-gray-900">192.168.1.104</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white border border-orange-100 flex items-center justify-center text-binus-orange">
                  <Wifi className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Recent Events */}
            <div>
              <h3 className="font-headline font-semibold text-[15px] text-gray-900 mb-5">Recent Events</h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                
                {/* Event 1 */}
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shadow-sm shrink-0 relative z-10">
                    <Plus className="w-4 h-4 text-binus-maroon" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">New Asset Registered</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-snug">UID: E28B.1130.45A1 was added to Zone A inventory.</p>
                    <p className="text-[10px] text-gray-400 font-mono mt-1.5">10:42:01 AM</p>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shadow-sm shrink-0 relative z-10">
                    <AlertTriangle className="w-4 h-4 text-binus-maroon" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-binus-maroon">Asset Missing Alert</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-snug">Calibration Tool Beta not detected in last sweep.</p>
                    <p className="text-[10px] text-gray-400 font-mono mt-1.5">10:35:00 AM</p>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shadow-sm shrink-0 relative z-10">
                    <Play className="w-3.5 h-3.5 text-binus-maroon ml-0.5 relative" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Scan Session Started</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-snug">Zone A sweep initiated by System.</p>
                    <p className="text-[10px] text-gray-400 font-mono mt-1.5">10:30:00 AM</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Batch Relocate Modal */}
      {isRelocateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-red-50/20">
              <h3 className="font-headline font-bold text-[17px] text-gray-900">Batch Relocate Assets</h3>
              <button 
                onClick={() => setIsRelocateModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="flex items-center gap-3 px-4 py-3 bg-red-50/80 border border-red-100 text-binus-maroon rounded-lg mb-6">
                <Info className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold">Relocating 3 selected assets</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Target Zone</label>
                  <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon appearance-none">
                    <option value="" disabled selected>Select target location</option>
                    <option value="A">Zone A - Main Lobby</option>
                    <option value="B">Zone B - Storage Room</option>
                    <option value="C">Zone C - Executive Suite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Reason for Move (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="Describe why these assets are being moved..."
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50/50">
              <button 
                onClick={() => setIsRelocateModalOpen(false)}
                className="px-5 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsRelocateModalOpen(false)}
                className="px-5 py-2.5 bg-[#a30b0b] hover:bg-binus-maroon text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                Confirm Relocation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
