'use client'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign in to Fin Sage</h2>
      <Button onClick={() => signIn('google')} className="w-64">
        Sign in with Google
      </Button>
    </div>
  )
}
