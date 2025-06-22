'use client';

import { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Hunter Tilson',
    title: 'HVAC Department Manager',
    image: '/assets/images/team/Hunter.jpg',
    bio: `Hunter brings nearly a decade of HVAC expertise and leads our department with precision, integrity, and a customer-first mindset. Outside of work, he's a devoted father of three who enjoys virtual racing and the outdoors.`,
  },
  {
    name: 'Kaleb',
    title: 'HVAC Technician',
    image: '/assets/images/team/Kaleb.jpg',
    bio: `Kaleb is a skilled HVAC tech known for sharp diagnostics, dependable results, and a passion for problem-solving. When he's not on the job, he’s managing a ranch and spending time with family outdoors.`,
  },
  {
    name: 'Ari Yazdani',
    title: 'General Manager',
    image: '/assets/images/team/Ari.jpg',
    bio: `Ari combines plumbing mastery with a background in accounting, MMA, and music. As General Manager, he leads with values like honesty and self-improvement—and recently became a proud U.S. citizen.`,
  },
  {
    name: 'Dylan',
    title: 'Customer Comfort Advisor',
    image: '/assets/images/team/Dylan.jpg',
    bio: `Dylan is a go-to leader known for customer advocacy and plumbing know-how. A family man and sports fan, he brings dedication and a winning mindset to every call and project.`,
  },
  {
    name: 'Tyler',
    title: 'Apprentice Plumber',
    image: '/assets/images/team/Tyler.jpg',
    bio: `Tyler is a fast-learning apprentice known for his curiosity, consistency, and drive. Off the job, he’s a diesel tinkerer, gym-goer, and chess enthusiast with a bright future in the trade.`,
  },
  {
    name: 'Britt Moore',
    title: 'Founder & Master Plumber',
    image: '/assets/images/team/Britt.jpg',
    bio: `Britt has led PD Plumbing since 2011 with over 30 years of trade experience. He's a Master Plumber, Master Falconer, real estate investor, and mentor committed to quality, training, and community leadership.`,
  },
  {
    name: 'Kayla',
    title: 'Office Manager',
    image: '/assets/images/team/Kayla.jpg',
    bio: `Kayla is the operational heartbeat of PD Plumbing—juggling scheduling, systems, and morale with grace. A supermom of five, she brings calm and creativity to every workday.`,
  },
  {
    name: 'Kaylee',
    title: 'Dispatcher',
    image: '/assets/images/team/Kaylee.jpg',
    bio: `Kaylee is the voice behind every call and the glue holding our schedule together. Known for her humor, calm under pressure, and tireless dedication, she’s the team’s go-to problem solver.`,
  },
  {
    name: 'Andy',
    title: 'Apprentice Plumber',
    image: '/assets/images/team/Andy.jpg',
    bio: `Andy is a rising star apprentice known for positivity, eagerness to learn, and natural leadership. He’s quickly becoming a favorite among techs and customers alike.`,
  },
  {
    name: 'Steven Lietzel',
    title: 'HVACR Technician',
    image: '/assets/images/team/Steven.jpg',
    bio: `Steven made the leap from chef to HVAC technician, bringing precision and care to every install. He leads with character, puts customers first, and embodies our commitment to integrity.`,
  },
];

export default function MeetTheTeam() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleBio = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className='py-16 px-4 max-w-7xl mx-auto'>
      <h2 className='text-4xl font-bold text-center mb-12'>Meet the Team</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 cursor-pointer'
            onClick={() => toggleBio(index)}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className='mx-auto rounded-full object-cover w-40 h-40'
            />
            <h3 className='text-xl font-semibold mt-4 text-center'>{member.name}</h3>
            <p className='text-sm text-gray-500 text-center'>{member.title}</p>

            {activeIndex === index && (
              <div className='mt-4 text-sm text-gray-700 text-left transition-all duration-300'>
                <p className='whitespace-pre-line'>{member.bio}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
