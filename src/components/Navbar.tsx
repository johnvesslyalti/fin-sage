'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <nav className="w-full bg-background text-foreground px-6 sm:px-12 py-4 shadow-lg border-b border-border z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          <span className="text-primary">Fin</span> Sage
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {session && (
            <Link href="/dashboard" className="text-sm hover:underline">
              Dashboard
            </Link>
          )}

          {session ? (
            <Button
              onClick={() => signOut({ callbackUrl: `${window.location.origin}/` })}
              variant="outline"
              size="sm"
            >
              Sign Out
            </Button>
          ) : (
            <Button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              size="sm"
            >
              Sign In
            </Button>
          )}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden mt-4 px-2 space-y-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {session && (
              <Link href="/dashboard" onClick={() => setOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Dashboard
                </Button>
              </Link>
            )}

            {session ? (
              <Button
                onClick={() => signOut({ callbackUrl: `${window.location.origin}/` })}
                variant="outline"
                className="w-full"
              >
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="w-full"
              >
                Sign In
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
