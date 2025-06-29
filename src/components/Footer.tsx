import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-10 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-bold">Fin Sage</h2>
                    <p className="mt-2 text-sm">Wise tools to manage your finances.</p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/features">Features</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold mb-2">Contact</h3>
                    <p className="text-sm">support@finsage.app</p>
                </div>
            </div>

            <div className="mt-10 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} Fin Sage. All rights reserved.
            </div>
        </footer>
    );
}
