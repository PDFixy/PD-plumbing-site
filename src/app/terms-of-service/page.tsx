"use client";

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <p className="mb-4">
        By accessing or using the PD Plumbing website, you agree to be bound by
        these Terms of Service. If you do not agree with any part of these
        terms, you must not use this website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Site</h2>
      <p className="mb-4">
        The information on this website is provided for general informational
        purposes only. We make every effort to ensure the accuracy of the
        content, but PD Plumbing makes no warranties or guarantees.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Service Terms</h2>
      <p className="mb-4">
        Services are subject to availability and may require confirmation or
        additional verification before scheduling. Quotes are estimates only and
        subject to change based on actual inspection and work required.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        PD Plumbing is not liable for any indirect, incidental, or consequential
        damages resulting from the use of this website or services. Service is
        provided “as is” without warranty of any kind.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Privacy</h2>
      <p className="mb-4">
        Use of this site is also governed by our{" "}
        <a href="/privacy-policy" className="text-blue-600 underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update these Terms of Service at any time. It is
        your responsibility to check this page for changes.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
