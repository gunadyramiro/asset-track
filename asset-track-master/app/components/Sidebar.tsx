'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  LayoutDashboard,
  ScanLine,
  Package,
  BarChart3,
  Settings,
  Plus,
  HelpCircle,
  LogOut,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: ScanLine, label: 'Live Scanner', href: '/live-scanner' },
  { icon: Package, label: 'Inventory', href: '/inventory' },
  { icon: BarChart3, label: 'Reports', href: '/reports' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[220px] bg-white border-r border-gray-100 flex flex-col fixed h-full z-20">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-binus-maroon rounded-lg flex items-center justify-center shrink-0">
            <ScanLine className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-headline font-bold text-sm leading-tight text-gray-900">RFID Manager</p>
            <p className="text-[11px] text-binus-taupe leading-tight">Enterprise v2.4</p>
          </div>
        </div>
      </div>

      {/* Scan New Zone */}
      <div className="px-4 pt-4">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-binus-maroon hover:bg-[#b81e15] text-white text-sm font-medium rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          Scan New Zone
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 pt-3 space-y-0.5">
        {navItems.map(({ icon: Icon, label, href }) => {
          const active = pathname === href
          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? 'bg-red-50 text-binus-maroon border-l-4 border-binus-maroon pl-2'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom links */}
      <div className="px-3 pb-5 space-y-0.5 border-t border-gray-100 pt-3">
        <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 transition-colors">
          <HelpCircle className="w-4 h-4" />
          Support
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 transition-colors">
          <LogOut className="w-4 h-4" />
          Logout
        </a>
      </div>
    </aside>
  )
}
