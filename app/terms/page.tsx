import Link from "next/link";

export const metadata = { title: "Terms of Use | SmartUtilityTools", description: "Terms for using SmartUtilityTools." };

export default function TermsPage() {
  return <main className="mx-auto min-h-screen max-w-3xl px-5 py-12">
    <Link href="/" className="text-sm font-semibold text-blue-600">← Back to SmartUtilityTools</Link>
    <h1 className="mt-6 text-3xl font-bold">Terms of Use</h1>
    <p className="mt-2 text-sm text-slate-500">Last updated: November 22, 2026</p>
    <p className="mt-5 leading-7 text-slate-700">By accessing SmartUtilityTools, you agree to use the website lawfully and in accordance with these terms.</p>
    <h2 className="mt-8 text-xl font-semibold">Using the tools</h2>
    <p className="mt-3 leading-7 text-slate-700">You are responsible for ensuring that you have the rights and permission to use any image you process. Do not use the website to process unlawful content or infringe another person&apos;s rights.</p>
    <h2 className="mt-8 text-xl font-semibold">Accuracy and acceptance</h2>
    <p className="mt-3 leading-7 text-slate-700">The tools are provided for general convenience. We do not guarantee that an output will meet the technical, legal or submission requirements of a passport office, government department, employer, school or other third party. Check the receiving organization&apos;s current specifications before submitting an image.</p>
    <h2 className="mt-8 text-xl font-semibold">Availability</h2>
    <p className="mt-3 leading-7 text-slate-700">We may update, suspend or discontinue any feature without notice. The website is provided on an “as is” and “as available” basis to the extent permitted by law.</p>
    <h2 className="mt-8 text-xl font-semibold">Limitation</h2>
    <p className="mt-3 leading-7 text-slate-700">To the extent permitted by applicable law, SmartUtilityTools is not liable for indirect or consequential loss arising from use of the website or reliance on generated files.</p>
    <h2 className="mt-8 text-xl font-semibold">Changes</h2>
    <p className="mt-3 leading-7 text-slate-700">We may revise these terms as the service changes. Continued use after an update means you accept the revised terms.</p>
  </main>;
}
