"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("pdplumbing_cookie_consent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("pdplumbing_cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white px-4 py-3 text-sm z-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p>
          We use cookies to improve your experience and analyze website traffic.
          By using our site, you agree to our{" "}
          <a
            href="/privacy-policy"
            className="underline text-blue-300 hover:text-blue-200"
          >
            Privacy Policy
          </a>
          .
        </p>
        <button
          onClick={handleAccept}
          className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500 transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
