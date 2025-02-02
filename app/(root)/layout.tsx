import React from 'react'
import BaseLayout from '@/components/shared/layout/base-layout'
import { SceneTransitionProvider } from '@/components/shared/hoc'
import { GalaxyBackground } from '@/components/dev'
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Toaster />
      <GalaxyBackground />
      <SceneTransitionProvider>
        <BaseLayout>
          {children}
        </BaseLayout>
      </SceneTransitionProvider>
    </>
  )
}