"use client"
import './globals.css'
import NavBar from './components/NavBar'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Footer from './components/Footer'

const queryClient = new QueryClient()


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          {children}
          <Footer />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </body>
    </html>
  )
}
