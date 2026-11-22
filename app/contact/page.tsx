import Link from "next/link";

export const metadata = {
  title: "Contact Us | SmartUtilityTools",
  description: "Contact the SmartUtilityTools team for questions, feedback or support."
};

export default function ContactPage() {
  return <main className="mx-auto min-h-screen max-w-3xl px-5 py-12">
    <Link href="/" className="text-sm font-semibold text-blue-600">← Back to SmartUtilityTools</Link>
    <h1 className="mt-6 text-3xl font-bold">Contact Us</h1>
    <p className="mt-5 leading-7 text-slate-700">Have a question, suggestion, or found a problem with one of our image tools? We would be happy to hear from you.</p>
    <section className="mt-8 rounded-2xl border border-slate-200 p-6">
      <h2 className="text-xl font-semibold">Email support</h2>
      <p className="mt-3 leading-7 text-slate-700">For general questions, feedback, or support, email us at:</p>
      <a className="mt-2 inline-block break-all font-semibold text-blue-600 underline" href="mailto:Kaushalk100@gmail.com">Kaushalk100@gmail.com</a>
      <p className="mt-4 text-sm leading-6 text-slate-500">Please do not email sensitive identity documents or private photographs unless it is necessary and you understand the risks of sharing them by email.</p>
    </section>
  </main>;
}
