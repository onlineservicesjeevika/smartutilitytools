import Link from "next/link";

export const metadata = { title: "Privacy Policy | SmartUtilityTools", description: "Read the SmartUtilityTools privacy policy." };

export default function PrivacyPolicyPage() {
  return <main className="mx-auto min-h-screen max-w-3xl px-5 py-12">
    <Link href="/" className="text-sm font-semibold text-blue-600">← Back to SmartUtilityTools</Link>
    <h1 className="mt-6 text-3xl font-bold">Privacy Policy</h1>
    <p className="mt-2 text-sm text-slate-500">Last updated: November 22, 2026</p>
    <p className="mt-5 leading-7 text-slate-700">This Privacy Policy explains how SmartUtilityTools handles information when you visit and use this website.</p>
    <h2 className="mt-8 text-xl font-semibold">Images and tool processing</h2>
    <p className="mt-3 leading-7 text-slate-700">The Image Compressor, Image Resizer and Signature Resizer process selected images locally in your browser. The current tools do not intentionally send the image file to our server. Your browser may retain temporary local data while the page is open; you can close the page to end that session.</p>
    <h2 className="mt-8 text-xl font-semibold">Information collected automatically</h2>
    <p className="mt-3 leading-7 text-slate-700">Our hosting provider may process technical information such as IP address, browser details, request time and security logs to deliver and protect the website. We do not currently ask visitors to create an account.</p>
    <h2 className="mt-8 text-xl font-semibold">Cookies, analytics and advertising</h2>
    <p className="mt-3 leading-7 text-slate-700">The website may use essential technologies needed for hosting and security. If analytics or advertising services, including Google AdSense, are enabled in the future, those providers may use cookies or similar technologies to measure visits, prevent fraud or show and personalize ads, subject to their own policies and your applicable choices. This policy will be updated when such services are introduced.</p>
    <h2 className="mt-8 text-xl font-semibold">Third-party services</h2>
    <p className="mt-3 leading-7 text-slate-700">Links to third-party websites are governed by those websites' own privacy policies. We are not responsible for their content or practices.</p>
    <h2 className="mt-8 text-xl font-semibold">Children's privacy</h2>
    <p className="mt-3 leading-7 text-slate-700">This website is a general-purpose utility site and is not intended to knowingly collect personal information from children.</p>
    <h2 className="mt-8 text-xl font-semibold">Policy updates and contact</h2>
    <p className="mt-3 leading-7 text-slate-700">We may update this policy as the website changes. For privacy questions, contact us at Kaushalk100@gmail.com.</p>
  </main>;
}
