import Link from "next/link";
import ImageTool from "@/components/ImageTool";

export default function HomePage() {
  return <main className="min-h-screen">
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-black tracking-tight text-slate-900">SmartUtility<span className="text-blue-600">Tools</span></Link>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Free · Private · No sign-up</span>
      </div>
    </header>
    <ImageTool />
    <footer className="border-t border-slate-200 bg-white px-4 py-7 text-center text-sm text-slate-500"><nav aria-label="Footer navigation" className="mx-auto mb-4 flex max-w-3xl flex-wrap justify-center gap-x-5 gap-y-3"><Link href="/about/" className="hover:text-blue-600">About Us</Link><Link href="/contact/" className="hover:text-blue-600">Contact Us</Link><Link href="/privacy-policy/" className="hover:text-blue-600">Privacy Policy</Link><Link href="/terms/" className="hover:text-blue-600">Terms of Use</Link><Link href="/disclaimer/" className="hover:text-blue-600">Disclaimer</Link></nav><p>© {new Date().getFullYear()} SmartUtilityTools · Images are processed in your browser.</p></footer>
  </main>;
}
