// components/CallToAction.tsx
const CallToAction = () => {
  return (
    <div className="mt-12 text-center bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">
        Need Plumbing or HVAC Help?
      </h2>
      <p className="text-blue-700 mb-4">
        Call now or book online. We're here 24/7!
      </p>
      <a
        href="tel:3168715499"
        className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
      >
        📞 Call 316-871-5499
      </a>
    </div>
  );
};

export default CallToAction;
