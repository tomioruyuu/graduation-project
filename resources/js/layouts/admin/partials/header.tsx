// resources/js/layouts/admin/partials/header.tsx
import { Bell, Download } from 'lucide-react'

export default function Header() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white border-b shadow-sm">
      {/* Left: search bar or title */}
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

      {/* Right: actions */}
      <div className="flex items-center gap-4">
        

        <button className="relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <img
          src="/images/img.jpg"
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover border"
        />
      </div>
    </div>
  )
}
