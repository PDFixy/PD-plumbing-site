"use client";

import { useState } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Hunter Tilson",
    image: "/images/team/Hunter.jpg",
    summary:
      "Master HVAC Technician and Department Lead. Focused on personalized service and high-integrity results.",
    fullBio: `Hunter Tilson is PD Plumbing’s HVAC Department Manager and Master HVAC Technician...`,
  },
  {
    name: "Kaleb",
    image: "/images/team/Kaleb.jpg",
    summary:
      "Skilled HVAC tech with a focus on precision, leadership, and customer-first problem solving.",
    fullBio: `Kaleb is a skilled HVAC technician with a background in ventilation and strong leadership instincts...`,
  },
  {
    name: "Ari Yazdani",
    image: "/images/team/Ari.jpg",
    summary:
      "General Manager. Licensed plumber with background in MMA, accounting, and music. Leads with integrity.",
    fullBio: `Ari is a licensed plumber and PD’s General Manager with over a decade of hands-on plumbing and leadership experience...`,
  },
  {
    name: "Dylan",
    image: "/images/team/Dylan.jpg",
    summary:
      "Customer Comfort Advisor. Trusted plumber, family man, and award-winning leader at PD.",
    fullBio: `Dylan is a trusted team member who brings energy, loyalty, and creative problem-solving to every customer interaction...`,
  },
  {
    name: "Tyler",
    image: "/images/team/Tyler.jpg",
    summary:
      "Apprentice plumber with a hands-on mindset. Passionate about learning and leadership.",
    fullBio: `Tyler is a rising apprentice trained by PD veterans, always eager to grow and take on leadership roles...`,
  },
  {
    name: "Britt Moore",
    image: "/images/team/Britt.jpg",
    summary:
      "Founder. Master Plumber, entrepreneur, falconer, and industry leader with 30+ years of experience.",
    fullBio: `Britt Moore founded PD Plumbing in 2011 after decades of experience. He leads with passion, community focus, and training...`,
  },
  {
    name: "Kayla",
    image: "/images/team/Kayla.jpg",
    summary: "Office Manager. Team glue, morale booster, and multitasking pro.",
    fullBio: `Kayla runs the front office, schedules, supports the team, and makes work feel like family...`,
  },
  {
    name: "Kaylee",
    image: "/images/team/Kaylee.jpg",
    summary:
      "Dispatcher and operations MVP. Calm under pressure, heart of the crew.",
    fullBio: `Kaylee is the voice behind the phone and the engine behind the schedule — dependable, warm, and fierce...`,
  },
  {
    name: "Andy",
    image: "/images/team/Andy.jpg",
    summary:
      "Apprentice with positive energy, coachable spirit, and big potential.",
    fullBio: `Andy is an apprentice who quickly stood out for his energy, enthusiasm, and leadership-by-example...`,
  },
  {
    name: "Steven Lietzel",
    image: "/images/team/Steven.jpg",
    summary:
      "HVAC tech and former chef with unmatched work ethic and character.",
    fullBio: `Steven transitioned careers and brings precision, compassion, and integrity to every job he touches...`,
  },
];

export default function MeetTheTeam() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleBio = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => toggleBio(index)}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
              className="mx-auto rounded-full object-cover w-32 h-32"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              {member.summary}
            </p>
            {activeIndex === index && (
              <div className="mt-4 text-sm text-gray-700 text-left whitespace-pre-line">
                <p>{member.fullBio}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
