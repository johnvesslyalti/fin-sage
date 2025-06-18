// components/Navbar.tsx

'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0f172a] text-white px-6 sm:px-12 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Fin Sage
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/features" className="hover:text-primary">Features</Link>
          <Link href="/pricing" className="hover:text-primary">Pricing</Link>
          <Link href="/dashboard" className="hover:text-primary">Dashboard</Link>
          <Link href="/api/auth/signin"><Button size="sm" className="cursor-pointer">Login</Button></Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 space-y-3">
          <Link href="/features" className="block hover:text-primary">Features</Link>
          <Link href="/pricing" className="block hover:text-primary">Pricing</Link>
          <Link href="/dashboard" className="block hover:text-primary">Dashboard</Link>
          <Button size="sm" className="w-full">Login</Button>
        </div>
      )}
    </nav>
  );
}
