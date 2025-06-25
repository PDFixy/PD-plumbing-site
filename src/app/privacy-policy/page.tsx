"use client";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At PD Plumbing, your privacy is important to us. This website uses
        Google Analytics to help us understand how visitors interact with our
        site. Google Analytics collects anonymous data such as browser type,
        pages visited, time spent, and general location based on IP address.
      </p>
      <p className="mb-4">
        We use this data solely to improve our website and customer experience.
        No personally identifiable information is collected or stored by PD
        Plumbing.
      </p>
      <p className="mb-4">
        To learn more about how Google collects and processes data, visit{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google’s Privacy Policy
        </a>
        .
      </p>
      <p className="mb-4">
        By continuing to use our site, you consent to our use of cookies and
        tracking technologies. You can disable cookies in your browser settings
        if you prefer.
      </p>
    </div>
  );
}

