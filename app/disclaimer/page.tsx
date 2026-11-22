import Link from "next/link";

export const metadata = { title: "Disclaimer | SmartUtilityTools", description: "Important information about using SmartUtilityTools." };

export default function DisclaimerPage() {
  return <main className="mx-auto min-h-screen max-w-3xl px-5 py-12">
    <Link href="/" className="text-sm font-semibold text-blue-600">← Back to SmartUtilityTools</Link>
    <h1 className="mt-6 text-3xl font-bold">Disclaimer</h1>
    <p className="mt-2 text-sm text-slate-500">Last updated: November 22, 2026</p>
    <p className="mt-5 leading-7 text-slate-700">SmartUtilityTools is an independent collection of general-purpose image utilities. It is not affiliated with or endorsed by any government department, passport authority, examination board or other institution.</p>
    <h2 className="mt-8 text-xl font-semibold">Passport and identity photographs</h2>
    <p className="mt-3 leading-7 text-slate-700">The 400 × 600 pixel setting is a convenient portrait-size preset only. It does not certify that a photograph meets a particular authority&apos;s rules for physical size, face position, background, file size, format or image quality. Always check the latest instructions from the organization receiving your photograph.</p>
    <h2 className="mt-8 text-xl font-semibold">Output and responsibility</h2>
    <p className="mt-3 leading-7 text-slate-700">Results depend on the original image, browser and settings selected. Please review downloaded files before using or submitting them. You are responsible for ensuring you have permission to use the images you process.</p>
    <h2 className="mt-8 text-xl font-semibold">External links and advertising</h2>
    <p className="mt-3 leading-7 text-slate-700">This website may link to third-party services and may display advertising if advertising services are enabled. Third-party services operate under their own terms and policies.</p>
  </main>;
}
