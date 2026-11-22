import ImageTool from "@/components/ImageTool";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="text-xl font-black tracking-tight text-slate-900">SmartUtility<span className="text-blue-600">Tools</span></a>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Free · Private · No sign-up</span>
        </div>
      </header>
      <ImageTool />
      <footer className="border-t border-slate-200 bg-white px-4 py-7 text-center text-sm text-slate-500">© {new Date().getFullYear()} SmartUtilityTools · Your images are processed in your browser.</footer>
    </main>
  );
}
