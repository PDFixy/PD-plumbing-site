import React from 'react';
import Image from 'next/image';
import './MeetTheTeam.css';

import andyBio from '@/public/assets/images/team/Andy.txt';
import ariBio from '@/public/assets/images/team/Ari.txt';
import brittBio from '@/public/assets/images/team/Britt.txt';
import dylanBio from '@/public/assets/images/team/Dylan.txt';
import hunterBio from '@/public/assets/images/team/Hunter.txt';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: 'Britt',
    title: 'Operations Manager',
    image: '/assets/images/team/Britt.jpg',
    bio: brittBio,
  },
  {
    name: 'Hunter',
    title: 'Plumbing Technician',
    image: '/assets/images/team/Hunter.jpg',
    bio: hunterBio,
  },
  {
    name: 'Dylan',
    title: 'Lead HVAC Technician',
    image: '/assets/images/team/Dylan.jpg',
    bio: dylanBio,
  },
  {
    name: 'Ari',
    title: 'Customer Service Coordinator',
    image: '/assets/images/team/Ari.jpg',
    bio: ariBio,
  },
  {
    name: 'Andy',
    title: 'Plumbing Apprentice',
    image: '/assets/images/team/Andy.jpg',
    bio: andyBio,
  },
];

const MeetTheTeam: React.FC = () => {
  return (
    <div className="meet-the-team">
      <h2>Meet the Team</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            <Image src={member.image} alt={member.name} width={300} height={300} />
            <h3>{member.name}</h3>
            <p><strong>{member.title}</strong></p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
