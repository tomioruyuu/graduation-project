// resources/js/layouts/admin/partials/sidebar.tsx
import { Link } from '@inertiajs/react'
import { Home, Table, Type, Layers, LogIn, UserPlus } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm border-r h-screen px-6 py-4 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-600 mb-10">
          <Link href="/">MatDash</Link>
        </div>

        {/* Menu */}
        <nav className="space-y-6 text-gray-600 text-sm">
          <div>
            <p className="uppercase text-xs text-gray-400 mb-2">Home</p>
            <Link href="/admin/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-100 text-purple-700 font-medium">
              <Home size={16} /> Dashboard
            </Link>
          </div>

          <div>
            <p className="uppercase text-xs text-gray-400 mb-2">Utilities</p>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <Type size={16} /> Typography
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <Table size={16} /> Table
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <Layers size={16} /> Form
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="uppercase text-xs text-gray-400 mb-2">Auth</p>
            <ul className="space-y-2">
              <li>
                <Link href="/login" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <LogIn size={16} /> Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <UserPlus size={16} /> Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  )
}
