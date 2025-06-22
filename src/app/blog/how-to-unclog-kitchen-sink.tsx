import Image from 'next/image';
import CallToAction from '@/app/components/CallToAction';

export default function BlogPost() {
  return (
    <main className="px-4 sm:px-8 lg:px-24 py-12 space-y-10">
      <article className="prose lg:prose-lg max-w-none mx-auto">
        <Image
          src="/assets/images/work/plumbing-van-company-logo.jpg"
          alt="How To Unclog Kitchen Sink"
          width={1200}
          height={600}
          className="rounded shadow"
        />
        <h1>How To Unclog Kitchen Sink</h1>
        <p><strong>Snippet:</strong> Learn how to handle how to unclog kitchen sink with expert tips from PD Plumbing, Wichita's go-to fast and friendly team.</p>

        <h2>Outline</h2>
        <ul>
          <li>Common causes and warning signs</li>
          <li>DIY tips and what to avoid</li>
          <li>When to call a pro</li>
          <li>Preventative maintenance tips</li>
        </ul>

        <h2>Key Tips</h2>
        <p>Always shut off your water supply in an emergency and avoid harsh chemicals that can damage your pipes. For professional help, call PD Plumbing.</p>

        <h2>Pro Tips</h2>
        <ul>
          <li>✅ Schedule annual inspections to prevent surprise issues</li>
          <li>✅ Install smart leak detectors for early warnings</li>
        </ul>

        <CallToAction />
      </article>
    </main>
  );
}
