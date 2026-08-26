import Link from 'next/link';
import Image from 'next/image';

import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | OyeYar',
  description: 'Privacy Policy for OyeYar.',
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-background" />

      <div className="legal-container">
        {/* ==================== NAVBAR ==================== */}

        <header className="legal-navbar glass-panel">
          <Link href="/" className="legal-brand">
            <Image
              src="/images/logo.png"
              alt="OyeYar"
              width={48}
              height={48}
              priority
              className="legal-logo"
            />

            <span>OyeYar</span>
          </Link>

          <Link href="/" className="back-home">
            <ArrowLeft size={17} />
            Back to home
          </Link>
        </header>

        {/* ==================== HERO ==================== */}

        <section className="legal-hero">
          <div className="legal-eyebrow">
            <ShieldCheck size={15} />
            LEGAL
          </div>

          <h1>Privacy Policy</h1>

          <p>
            Your privacy matters to us. This policy explains how information is handled when you use
            the OyeYar website.
          </p>

          <span className="last-updated">Last updated: August 27, 2026</span>
        </section>

        {/* ==================== CONTENT ==================== */}

        <article className="legal-content glass-panel">
          <section>
            <h2>1. Introduction</h2>

            <p>
              OyeYar respects your privacy and is committed to handling your information
              responsibly.
            </p>

            <p>
              This Privacy Policy explains what information may be collected when you visit or
              interact with the OyeYar website and how that information may be used.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>

            <p>You can browse the OyeYar website without creating an account.</p>

            <p>
              If you choose to subscribe for updates, we may collect the email address that you
              voluntarily provide through the subscription form.
            </p>

            <p>
              We only collect information that is reasonably necessary for the purpose for which it
              is provided.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>

            <p>
              If you provide your email address, it may be used to send you updates or
              communications related to OyeYar.
            </p>

            <p>We may also use information to:</p>

            <ul>
              <li>Respond to enquiries or communications.</li>
              <li>Maintain and improve the website.</li>
              <li>Understand and protect the security of the website.</li>
              <li>Communicate information you have requested to receive.</li>
            </ul>
          </section>

          <section>
            <h2>4. Email Communications</h2>

            <p>
              If you choose to subscribe to updates, you may receive emails from OyeYar based on the
              subscription you requested.
            </p>

            <p>
              You may choose to stop receiving these communications at any time using the
              unsubscribe option provided in applicable emails.
            </p>
          </section>

          <section>
            <h2>5. Information Sharing</h2>

            <p>OyeYar does not sell your personal information.</p>

            <p>
              Information may be processed or stored using trusted third-party service providers
              that help operate website functionality or communications. Such providers may process
              information only as necessary to provide their services.
            </p>

            <p>
              Information may also be disclosed where required by applicable law or where reasonably
              necessary to protect the security, rights, or integrity of OyeYar and its users.
            </p>
          </section>

          <section>
            <h2>6. Cookies and Similar Technologies</h2>

            <p>
              The website may use cookies or similar technologies that are necessary for website
              functionality and security.
            </p>

            <p>
              Your browser may allow you to control or disable cookies through its settings. Please
              note that disabling certain cookies may affect how some websites function.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Links</h2>

            <p>
              The OyeYar website may contain links to third-party websites, including social media
              platforms.
            </p>

            <p>
              OyeYar is not responsible for the privacy practices or content of third-party
              websites. We encourage you to review the privacy policies of those websites before
              providing them with personal information.
            </p>
          </section>

          <section>
            <h2>8. Data Security</h2>

            <p>
              We take reasonable measures to protect information from unauthorized access, misuse,
              alteration, or disclosure.
            </p>

            <p>
              However, no method of transmitting or storing information online can be guaranteed to
              be completely secure.
            </p>
          </section>

          <section>
            <h2>9. Children&apos;s Privacy</h2>

            <p>
              The OyeYar website is not intended to knowingly collect personal information from
              children without appropriate authorization.
            </p>

            <p>
              If you believe that personal information relating to a child has been provided to us
              without appropriate consent, please contact us so that we can review the matter.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Privacy Policy</h2>

            <p>
              This Privacy Policy may be updated from time to time to reflect changes to the website
              or applicable practices.
            </p>

            <p>
              When changes are made, the updated version will be published on this page and the
              &quot;Last updated&quot; date may be revised.
            </p>
          </section>

          <section>
            <h2>11. Contact Us</h2>

            <p>
              If you have questions or concerns about this Privacy Policy or how information is
              handled, you can contact OyeYar.
            </p>

            <Link href="mailto:oyeyar.com@gmail.com" className="legal-contact-link">
              <Mail size={17} />
              oyeyar.com@gmail.com
            </Link>
          </section>
        </article>

        {/* ==================== FOOTER ==================== */}

        <footer className="legal-footer">
          <div className="legal-footer-brand">
            <Image src="/images/logo.png" alt="OyeYar" width={30} height={30} />

            <span>OyeYar</span>
          </div>

          <p>© {new Date().getFullYear()} OyeYar. All rights reserved.</p>

          <div className="legal-footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span />
            <Link href="/terms">Terms of Use</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
