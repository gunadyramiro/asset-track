'use client'

import Sidebar from '../components/Sidebar'
import {
  Search,
  Bell,
  History,
  ChevronRight,
  UserPlus,
  ExternalLink,
  Pencil,
  Trash2
} from 'lucide-react'

// ── Mock Data ──────────────────────────────────────────────────────────────
const teamMembers = [
  {
    id: 1,
    initials: 'A',
    name: 'Alex Mercer',
    email: 'alex.mercer@assettrack.pro',
    role: 'SYSTEM ADMIN',
    status: 'Active',
    lastActive: '2 mins ago',
    avatarColor: 'bg-indigo-100 text-indigo-700'
  },
  {
    id: 2,
    initials: 'JS',
    name: 'Jordan Smith',
    email: 'j.smith@assettrack.pro',
    role: 'INVENTORY MANAGER',
    status: 'Active',
    lastActive: '1 hour ago',
    avatarColor: 'bg-orange-100 text-orange-700'
  },
  {
    id: 3,
    initials: 'RL',
    name: 'Riley Loft',
    email: 'riley.l@assettrack.pro',
    role: 'SCANNER OPERATOR',
    status: 'Pending',
    lastActive: '-',
    avatarColor: 'bg-red-100 text-[#d32f2f]'
  }
]

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-[#FBFBFA]">
      <Sidebar />

      <main className="flex-1 ml-[220px] flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-8 py-3 flex items-center gap-4">
          <div className="relative flex-1 max-w-[400px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search settings..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d32f2f]/20 focus:border-[#d32f2f] transition-all"
            />
          </div>

          <div className="flex-1 flex justify-center">
            <h2 className="font-bold text-[14px] text-[#d32f2f]">Inventory Management</h2>
          </div>

          <div className="flex items-center gap-3 ml-auto flex-1 justify-end">
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
              <Bell className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
              <History className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 flex">
          
          {/* Settings Sidebar Menu */}
          <div className="w-[280px] bg-[#FBFBFA] border-r border-gray-100 p-8 shrink-0">
            <h2 className="text-[20px] font-bold text-gray-900 mb-8">Settings</h2>
            <nav className="space-y-1.5">
              <a href="#" className="block px-4 py-3 text-[13px] font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">RFID Scanner Calibration</a>
              <a href="#" className="block px-4 py-3 text-[13px] font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">Account Profile</a>
              <a href="#" className="block px-4 py-3 text-[13px] font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">System Configuration</a>
              <a href="#" className="flex items-center justify-between px-4 py-3 text-[13px] font-medium text-[#d32f2f] bg-red-50/70 rounded-lg transition-colors">
                Team Management
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#" className="block px-4 py-3 text-[13px] font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">Notification Preferences</a>
            </nav>
          </div>

          {/* Settings Main Content Area */}
          <div className="flex-1 p-10 bg-white">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
                <p className="text-gray-500 text-[13px] mt-1.5">
                  Manage user access, roles, and permissions across your organization.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-[13px] font-medium rounded-md transition-colors shadow-sm">
                <UserPlus className="w-4 h-4" />
                Invite Member
              </button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Find team members..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d32f2f]/20 focus:border-[#d32f2f] transition-all"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase">Roles & Permissions:</span> 
                <a href="#" className="text-[#d32f2f] hover:underline flex items-center gap-1.5 text-[13px] font-bold">
                  Manage Roles <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Table Container */}
            <div className="border border-red-100 rounded-lg overflow-hidden bg-white">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-red-50/40 border-b border-red-100">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap">User Info</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap">Role</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap">Last Active</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-50">
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-red-50/10 transition-colors">
                      <td className="px-6 py-4 align-middle">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-[13px] shrink-0 ${member.avatarColor}`}>
                            {member.initials}
                          </div>
                          <div>
                            <div className="text-[13.5px] font-bold text-gray-900">{member.name}</div>
                            <div className="text-[12px] text-gray-500 mt-0.5">{member.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 align-middle">
                        <span className={`inline-flex px-2 py-1 rounded text-[9.5px] font-bold tracking-widest uppercase ${
                          member.role === 'SYSTEM ADMIN' ? 'bg-red-50 text-[#d32f2f]' :
                          member.role === 'INVENTORY MANAGER' ? 'bg-orange-50 text-orange-600' :
                          'bg-red-50 text-red-400'
                        }`}>
                          {member.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 align-middle">
                        <div className={`flex items-center gap-2 text-[12px] font-bold ${
                          member.status === 'Active' ? 'text-emerald-600' : 'text-gray-500'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${member.status === 'Active' ? 'bg-emerald-500' : 'bg-gray-400'}`}></span> 
                          {member.status}
                        </div>
                      </td>
                      <td className="px-6 py-4 align-middle whitespace-nowrap text-[12px] font-medium text-gray-600">
                        {member.lastActive}
                      </td>
                      <td className="px-6 py-4 align-middle">
                        <div className="flex items-center gap-3.5 text-gray-400">
                          <button className="hover:text-gray-700 transition-colors"><Pencil className="w-4 h-4" /></button>
                          <button className="hover:text-gray-700 transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
