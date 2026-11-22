import Link from "next/link";

export const metadata = { title: "About Us | SmartUtilityTools", description: "Learn about SmartUtilityTools and our free browser-based image utilities." };

export default function AboutPage() {
  return <main className="mx-auto min-h-screen max-w-3xl px-5 py-12">
    <Link href="/" className="text-sm font-semibold text-blue-600">← Back to SmartUtilityTools</Link>
    <h1 className="mt-6 text-3xl font-bold">About SmartUtilityTools</h1>
    <p className="mt-5 leading-7 text-slate-700">SmartUtilityTools provides simple online image utilities designed to help people complete common image tasks in their browser.</p>
    <h2 className="mt-8 text-xl font-semibold">Our tools</h2>
    <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700">
      <li><strong>Image Compressor:</strong> reduce image file size and choose an output format.</li>
      <li><strong>Image Resizer:</strong> resize images to custom dimensions, with a 400 × 600 pixel portrait preset and adjustable crop positioning.</li>
      <li><strong>Signature Resizer:</strong> prepare an image at custom dimensions, with an optional white background.</li>
    </ul>
    <h2 className="mt-8 text-xl font-semibold">Privacy-focused processing</h2>
    <p className="mt-3 leading-7 text-slate-700">The image processing features currently run in your browser using web technologies. Images selected for these tools are not intentionally uploaded to our server by the processing features.</p>
    <p className="mt-8 leading-7 text-slate-700">We aim to keep the tools straightforward and useful. Please check the requirements of the website, institution, or form where you plan to use an image; dimensions alone do not guarantee acceptance.</p>
  </main>;
}
