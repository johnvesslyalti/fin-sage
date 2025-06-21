'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./ui/avatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import ModeToggle from "./ModeToggle";

export default function Navbar() {
    const { data: session } = useSession();
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Expenses", href: "/expenses" },
    ];

    return (
        <nav className="flex justify-between items-center p-5">
            <div className="flex flex-1 items-center gap-10">
                <div className="text-xl font-bold">FinSage</div>

                {session && (
                    <div className="flex gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "cursor-pointer transition-all hover:font-bold",
                                    pathname === item.href ? "border-b-2 dark:border-white border-black font-bold" : ""
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-4">
                {session ? (
                    <>
                        <ModeToggle />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage
                                        src={session.user?.image || ""}
                                        alt={session.user?.name || "User"}
                                    />
                                    <AvatarFallback>
                                        {session.user?.name?.[0] ?? "U"}
                                    </AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-40">
                                <DropdownMenuItem asChild>
                                    <Link href="/profile">Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })} className="text-red-100">
                                    Sign Out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                ) : (
                    <Button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
                        Sign In
                    </Button>
                )}
            </div>
        </nav>
    );
}
