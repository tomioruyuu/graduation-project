// resources/js/pages/admin/dashboard.tsx
import React, { ReactNode } from 'react'
import { Head } from '@inertiajs/react'
import Layout from '@/layouts/admin/master_layout'

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-gray-500 text-sm">New Customers</p>
          <h2 className="text-2xl font-bold text-purple-600">128</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-gray-500 text-sm">Total Income</p>
          <h2 className="text-2xl font-bold text-green-600">$1,280</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-gray-500 text-sm">Bookings</p>
          <h2 className="text-2xl font-bold text-blue-600">35</h2>
        </div>
      </div>
    </>
  )
}

// Gắn layout admin
Dashboard.layout = (page: ReactNode) => <Layout>{page}</Layout>
