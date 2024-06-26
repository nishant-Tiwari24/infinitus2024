import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './responsive.css'
import {Space_Grotesk, Bebas_Neue} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const space = Space_Grotesk({
  subsets:['latin-ext'],
  weight:['300','400','700'],
  variable:'--font-space'
})


export const metadata: Metadata = {
  title: 'Infinitus 2024',
  description: 'Annual Cultural fest of SRM University of Andhra Pradesh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${space.variable}`}>
      <body className={`${inter.className} bg-[#030014] overflow-y-auto overflow-x-hidden `}>{children}</body>
    </html>
  )
}
