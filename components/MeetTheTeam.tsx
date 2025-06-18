import React from 'react';

const teamMembers = [
  { name: 'Andy', image: '/assets/images/team/Andy.jpg', description: `Andy is...` },
  { name: 'Ari', image: '/assets/images/team/Ari.jpg', description: `Ari is...` },
  { name: 'Britt', image: '/assets/images/team/Britt.jpg', description: `Britt is...` },
  { name: 'Dylan', image: '/assets/images/team/Dylan.jpg', description: `Dylan is...` },
  { name: 'Hunter', image: '/assets/images/team/Hunter.jpg', description: `Hunter is...` },
  { name: 'Kaleb', image: '/assets/images/team/Kaleb.jpg', description: `Kaleb is...` },
  { name: 'Kayla', image: '/assets/images/team/Kayla.jpg', description: `Kayla is...` },
  { name: 'Kaylee', image: '/assets/images/team/Kaylee.jpg', description: `Kaylee is...` },
  { name: 'Steven', image: '/assets/images/team/Steven.jpg', description: `Steven is...` },
  { name: 'Tyler', image: '/assets/images/team/Tyler.jpg', description: `Tyler is...` },
];

const MeetTheTeam = () => {
  return (
    <section className="team-section">
      <h2>Meet the Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
