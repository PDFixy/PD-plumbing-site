
'use client';

import Link from 'next/link';
import Image from 'next/image';

const blogs = [
  {
    title: 'Top 5 Emergency Plumbing Tips',
    slug: 'emergency-plumbing-tips',
    excerpt: 'What to do when plumbing disasters strike — fast action steps from PD Plumbing’s top techs.',
    fixyImg: '/images/fixy/fixy-toolbox.png',
    workImg: '/images/work/emergency-job.jpg',
  },
  {
    title: 'Why You Should Never Ignore a Dripping Faucet',
    slug: 'dripping-faucet-warning-signs',
    excerpt: 'It’s not just a drip. Discover how a small leak can waste gallons of water and cost you big.',
    fixyImg: '/images/fixy/fixy-thumbs-up.png',
    workImg: '/images/work/faucet-repair.jpg',
  },
  {
    title: 'Tank vs. Tankless Water Heaters — What’s Best?',
    slug: 'tank-vs-tankless',
    excerpt: 'Explore the pros and cons of each system and which one our techs prefer in Wichita homes.',
    fixyImg: '/images/fixy/fixy-wave.png',
    workImg: '/images/work/water-heater.jpg',
  }
];

export default function BlogIndex() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-900">PD Plumbing Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((post) => (
          <div key={post.slug} className="bg-white border border-gray-200 rounded-xl shadow p-6">
            <div className="flex gap-4 mb-4">
              <Image src={post.fixyImg} alt="Fixy" width={60} height={60} className="rounded" />
              <Image src={post.workImg} alt="Job site" width={60} height={60} className="rounded" />
            </div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 font-semibold hover:underline">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
