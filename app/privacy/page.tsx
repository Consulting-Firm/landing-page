import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy — Archthorpe",
  description: "How Archthorpe collects and uses personal data.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        This policy explains how {COMPANY.name} (&ldquo;Archthorpe&rdquo;,
        &ldquo;we&rdquo;) collects and uses personal data when you visit this
        site or get in touch. We are the data controller.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Contact details</strong> you choose to share — your name,
          email and anything you write when you email us or book a call.
        </li>
        <li>
          <strong>Scheduling data</strong> processed by Calendly when you book a
          call, under Calendly&apos;s own privacy policy.
        </li>
        <li>
          <strong>Basic usage data</strong> — standard server logs and
          privacy-friendly analytics to understand traffic. No advertising
          trackers.
        </li>
      </ul>

      <h2>Why we use it</h2>
      <p>
        To reply to enquiries, schedule and run calls, deliver our services, and
        keep the site secure. Our legal bases under the GDPR are your consent,
        our legitimate interest in running the business, and steps taken at your
        request before entering a contract.
      </p>

      <h2>Sharing &amp; processors</h2>
      <p>
        We never sell your data. We rely on a small set of processors to run the
        site and our work — for example our hosting provider, Calendly
        (scheduling) and our email provider — each bound to protect your data.
      </p>

      <h2>Retention</h2>
      <p>
        We keep enquiry and project data only as long as needed for the purposes
        above and any legal obligations, then delete it.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the GDPR you can request access, correction, deletion,
        restriction, portability, or object to processing. To exercise any of
        these, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. You
        may also lodge a complaint with the Romanian Data Protection Authority
        (ANSPDCP).
      </p>

      <h2>Contact</h2>
      <p>
        {COMPANY.name}, {COMPANY.address}. Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
