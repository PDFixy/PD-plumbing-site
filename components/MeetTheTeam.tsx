// components/MeetTheTeamPreview.tsx
const teamMembers = [
  {
    name: 'Britt',
    role: 'Plumbing Lead',
    image: '/assets/images/team/britt.jpg',
  },
  {
    name: 'Hunter',
    role: 'Service Tech',
    image: '/assets/images/team/hunter.jpg',
  },
  {
    name: 'Dylan',
    role: 'Installer',
    image: '/assets/images/team/dylan.jpg',
  },
  {
    name: 'Ari',
    role: 'HVAC Lead',
    image: '/assets/images/team/ari.jpg',
  },
];

export default function MeetTheTeamPreview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {teamMembers.map((member) => (
        <div key={member.name} className="text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 mx-auto rounded-full object-cover shadow"
          />
          <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
          <p className="text-gray-500">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
