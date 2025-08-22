import React from 'react'
import ClientProvider from '../ClientProvider'

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <ClientProvider>
            {children}
        </ClientProvider>
    </div>
  )
}
