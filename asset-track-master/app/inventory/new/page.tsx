'use client'

import { useState, useMemo } from 'react'
import Sidebar from '../../components/Sidebar'
import {
  Search,
  Bell,
  History,
  CheckCircle2,
  LayoutGrid,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function NewInventoryPage() {
  const [regType, setRegType] = useState('New Intake')
  
  // New Intake state
  const [floor, setFloor] = useState('2100')
  const [deviceCat, setDeviceCat] = useState('MON')
  const [counter, setCounter] = useState('001')
  const [itemName, setItemName] = useState('')

  // Replacement state (assumed based on context)
  const [oldAssetId, setOldAssetId] = useState('')

  const fullAssetId = useMemo(() => {
    if (regType === 'New Intake') {
      return `BNS-${floor || '----'}-${deviceCat || '---'}-${counter || '---'}`
    } else {
      return `BNS-REP-${counter || '---'}`
    }
  }, [regType, floor, deviceCat, counter])

  const rfidEpc = useMemo(() => {
    // Fake hex string generation from asset ID
    return fullAssetId.split('').map(c => c.charCodeAt(0).toString(16).toUpperCase()).join('')
  }, [fullAssetId])

  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />

      <main className="flex-1 ml-[220px] flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-8 py-3 flex items-center gap-4">
          <h2 className="font-headline font-bold text-base text-gray-900 shrink-0">Asset Control</h2>

          <div className="relative flex-1 max-w-xs ml-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets, tags, locations..."
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
            <div className="w-9 h-9 rounded-full bg-gray-400 overflow-hidden flex items-center justify-center ml-1">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8">
          <div>
            <h1 className="font-headline font-bold text-2xl text-gray-900">Zone Alpha Overview</h1>
            <p className="text-sm text-gray-500 mt-1">Real-time telemetry and inventory registration.</p>
          </div>

          <div className="mt-8 bg-white rounded-xl border border-red-50 shadow-sm max-w-[800px]">
            {/* Header */}
            <div className="p-6 bg-red-50/30 border-b border-red-50 rounded-t-xl flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-binus-maroon rounded-xl flex items-center justify-center shadow-sm">
                  <LayoutGrid className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-headline font-bold text-lg text-gray-900">Asset Registration</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Configure encoding segments for new inventory tracking.</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-red-100/50 text-binus-maroon font-semibold text-xs rounded-lg mt-1 border border-red-100">
                Prefix: BNS
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col md:flex-row gap-8">
              
              {/* Left Column */}
              <div className="flex-1">
                <h3 className="text-[11px] font-bold text-binus-maroon uppercase tracking-wider mb-5">
                  Segment Configuration
                </h3>

                <div className="space-y-4">
                  {/* Registration Type */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Registration Type</label>
                    <select 
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon bg-white"
                      value={regType}
                      onChange={(e) => setRegType(e.target.value)}
                    >
                      <option>New Intake</option>
                      <option>Replacement</option>
                    </select>
                  </div>

                  {regType === 'New Intake' ? (
                    <>
                      {/* Row 2 */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">Floor & Room</label>
                          <input 
                            type="text" 
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon"
                            value={floor}
                            onChange={(e) => setFloor(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">Device Category</label>
                          <select 
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon bg-white"
                            value={deviceCat}
                            onChange={(e) => setDeviceCat(e.target.value)}
                          >
                            <option value="MON">MON (Monitor)</option>
                            <option value="PC">PC (Desktop)</option>
                            <option value="LAP">LAP (Laptop)</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Counter (001-100)</label>
                        <input 
                          type="text" 
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon"
                          value={counter}
                          onChange={(e) => setCounter(e.target.value)}
                        />
                      </div>

                      {/* Row 4 */}
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Item Name</label>
                        <input 
                          type="text" 
                          placeholder='e.g. Dell UltraSharp 27"'
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon"
                          value={itemName}
                          onChange={(e) => setItemName(e.target.value)}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Alternative form fields for "Replacement" */}
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Old Asset ID</label>
                        <input 
                          type="text" 
                          placeholder='e.g. BNS-2100-MON-999'
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon"
                          value={oldAssetId}
                          onChange={(e) => setOldAssetId(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Counter / New Tag #</label>
                        <input 
                          type="text" 
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-binus-maroon/20 focus:border-binus-maroon"
                          value={counter}
                          onChange={(e) => setCounter(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1">
                <h3 className="text-[11px] font-bold text-binus-maroon uppercase tracking-wider mb-5">
                  Encoding Logic Output
                </h3>

                <div className="bg-red-50/80 border border-red-100 rounded-xl p-5 flex flex-col h-[calc(100%-2rem)] relative overflow-hidden">
                  <div className="space-y-4 flex-1">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Full Asset ID</label>
                      <div className="w-full bg-white border border-red-100 rounded-lg px-4 py-2.5 text-center shadow-sm">
                        <span className="font-mono font-medium text-binus-maroon text-lg">{fullAssetId}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">RFID EPC (Hex)</label>
                      <div className="w-full bg-[#362f2e] border border-gray-800 rounded-lg px-4 py-2.5 shadow-inner">
                        <span className="font-mono text-[13px] text-white tracking-widest break-all">{rfidEpc}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 italic mt-1.5">Hexadecimal representation for hardware writing</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t-2 border-amber-600/30">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                      <span className="text-xs font-bold text-amber-600">Checksum Valid</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-gray-100 bg-gray-50/50 rounded-b-xl">
              <button className="px-5 py-2.5 border border-gray-300 bg-white rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button className="px-5 py-2.5 bg-[#a30b0b] hover:bg-binus-maroon text-white rounded-lg text-sm font-medium transition-colors shadow-sm inline-flex items-center gap-2">
                Register & Encode Tag <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
