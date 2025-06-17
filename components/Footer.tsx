export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-sm p-6 mt-10">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <p>© {new Date().getFullYear()} PD Plumbing Heating & Cooling</p>
          <p>Wichita, KS • (316) 871-5499</p>
          <p>Mon–Sat: 8am–6pm • Emergency: 24/7</p>
        </div>
        <div className="text-center">
          <img src="/fixy-mini.png" alt="Fixy Mascot" className="h-12 inline" />
          <p className="italic">"The Face of Fast, Friendly Plumbing!"</p>
          <img src="/badge-5stars.png" alt="5-Star Reviews" className="h-8 mt-2" />
        </div>
      </div>
    </footer>
  );
}
