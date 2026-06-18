import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Legal Notice — Archthorpe",
  description: "Company registration details for Archthorpe.",
};

export default function Legal() {
  return (
    <LegalPage title="Legal Notice" updated="June 2026">
      <p>Archthorpe is operated by the company below, registered in Romania.</p>

      <h2>Company details</h2>
      <dl>
        <dt>Legal name</dt>
        <dd>{COMPANY.name}</dd>
        <dt>Trade Register no.</dt>
        <dd>{COMPANY.regCom}</dd>
        <dt>Tax ID (CUI / CIF)</dt>
        <dd>{COMPANY.cui}</dd>
        <dt>Registered office</dt>
        <dd>{COMPANY.address}</dd>
        <dt>Email</dt>
        <dd>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </dd>
      </dl>

      <h2>Consumer dispute resolution</h2>
      <p>
        Under EU rules you may use the European Commission&apos;s online dispute
        resolution platform at{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          ec.europa.eu/consumers/odr
        </a>
        . In Romania, the competent consumer-protection authority is the ANPC (
        <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer">
          anpc.ro
        </a>
        ).
      </p>

      <h2>Get in touch</h2>
      <p>
        For anything at all, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> — we read
        everything.
      </p>
    </LegalPage>
  );
}
