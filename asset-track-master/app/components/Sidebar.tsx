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
          <div className="w-9 h-9 bg-[#C53030] rounded-lg flex items-center justify-center shrink-0">
            <ScanLine className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-headline font-bold text-[15px] leading-tight text-[#C53030]">AssetTrack Pro</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">Enterprise RFID</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 pt-3 space-y-0.5 mt-4">
        {navItems.map(({ icon: Icon, label, href }) => {
          const active = pathname === href || (pathname.startsWith(href) && href !== '/');
          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? 'bg-[#d32f2f] text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Profile */}
      <div className="px-5 py-6 border-t border-gray-100 mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
            <img src="https://ui-avatars.com/api/?name=Alex+Mercer&background=1f2937&color=fff" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden">
            <p className="text-[13px] font-bold text-gray-900 truncate leading-tight">Alex Mercer</p>
            <p className="text-[11px] text-gray-500 truncate leading-tight">System Admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
