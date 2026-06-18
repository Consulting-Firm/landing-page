import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Service — Archthorpe",
  description: "The terms that govern working with Archthorpe.",
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="June 2026">
      <p>
        These terms govern your use of this website and any proposal or
        engagement with {COMPANY.name} (&ldquo;Archthorpe&rdquo;). By working
        with us, you agree to them.
      </p>

      <h2>Our services</h2>
      <p>
        We design and build software — product engineering, cloud &amp;
        infrastructure, AI and automation. The scope, deliverables, timeline and
        price of any engagement are set out in a written Statement of Work
        (SOW), which prevails over these terms where they differ.
      </p>

      <h2>Proposals &amp; quotes</h2>
      <p>
        Quotes are fixed for the scope described in the SOW. Work outside that
        scope is agreed and quoted separately before it starts.
      </p>

      <h2>Fees &amp; payment</h2>
      <p>
        Fees, milestones and payment terms are defined in the SOW and invoices
        are payable as stated there.
      </p>

      <h2>Intellectual property</h2>
      <p>
        On full payment, ownership of the custom deliverables we build for you
        transfers to you. We retain our pre-existing tools, libraries and
        know-how, and may reference the work in our portfolio unless agreed
        otherwise.
      </p>

      <h2>Confidentiality</h2>
      <p>
        We keep your confidential information private and use it only to deliver
        the work.
      </p>

      <h2>Warranties &amp; liability</h2>
      <p>
        We deliver our work with reasonable skill and care. To the extent
        permitted by law, our total liability for an engagement is limited to
        the fees paid for it, and we are not liable for indirect or
        consequential loss.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by Romanian law, and any disputes fall under
        the competent courts of Romania.
      </p>

      <h2>Contact</h2>
      <p>
        {COMPANY.name}, {COMPANY.address}. Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
