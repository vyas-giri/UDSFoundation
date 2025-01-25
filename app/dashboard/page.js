"use client";
import React from 'react'
import LeftDashboard from '@/components/DashboardSections/LeftDashboard';
import MiddleDashboard from '@/components/DashboardSections/MiddleDashboard';
import RightDashboard from '@/components/DashboardSections/RightDashboard';
import withAuth from '@/util/authHoc';

function Dashboard() {
  return (
    <div>
      <div>
        <div className="flex bg-[#F0F7FF] dark:bg-slate-600 items-center justify-between h-screen">
          <LeftDashboard />
          <MiddleDashboard />
          <RightDashboard />
        </div>
      </div>
    </div>
  )
}

export default withAuth(Dashboard)