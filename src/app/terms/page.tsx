import Link from 'next/link';
import Image from 'next/image';

import { ArrowLeft, FileText, Mail } from 'lucide-react';

export const metadata = {
  title: 'Terms of Use | OyeYar',
  description: 'Terms of Use for OyeYar.',
};

export default function TermsPage() {
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
            <FileText size={15} />
            LEGAL
          </div>

          <h1>Terms of Use</h1>

          <p>These terms explain the rules for accessing and using the OyeYar website.</p>

          <span className="last-updated">Last updated: August 27, 2026</span>
        </section>

        {/* ==================== CONTENT ==================== */}

        <article className="legal-content glass-panel">
          <section>
            <h2>1. Acceptance of These Terms</h2>

            <p>By accessing or using the OyeYar website, you agree to these Terms of Use.</p>

            <p>If you do not agree with these terms, please do not use the website.</p>
          </section>

          <section>
            <h2>2. Use of the Website</h2>

            <p>
              You may use the OyeYar website for lawful and personal purposes in accordance with
              these Terms of Use.
            </p>

            <p>You agree not to use the website in a way that may:</p>

            <ul>
              <li>Violate applicable laws or regulations.</li>
              <li>Interfere with the operation or security of the website.</li>
              <li>Attempt to gain unauthorized access to systems or information.</li>
              <li>Use automated methods in a harmful or disruptive manner.</li>
              <li>Misrepresent your identity or provide misleading information.</li>
            </ul>
          </section>

          <section>
            <h2>3. Intellectual Property</h2>

            <p>
              The content, branding, logos, graphics, design, text, and other materials available on
              the OyeYar website are owned by or used with permission by OyeYar unless otherwise
              stated.
            </p>

            <p>
              You may not copy, reproduce, distribute, modify, or use these materials for commercial
              purposes without appropriate permission.
            </p>
          </section>

          <section>
            <h2>4. Website Availability</h2>

            <p>
              We aim to keep the website available and functioning properly. However, uninterrupted
              or error-free access cannot be guaranteed.
            </p>

            <p>
              The website may occasionally be unavailable due to maintenance, technical issues,
              updates, or circumstances outside our control.
            </p>
          </section>

          <section>
            <h2>5. Accuracy of Information</h2>

            <p>
              We make reasonable efforts to keep information on the website accurate and up to date.
              However, information may occasionally contain errors, omissions, or inaccuracies.
            </p>

            <p>Website content may be updated, changed, or removed without prior notice.</p>
          </section>

          <section>
            <h2>6. Third-Party Links</h2>

            <p>
              The website may include links to third-party websites or platforms, including social
              media services.
            </p>

            <p>
              These links are provided for convenience. OyeYar does not control or take
              responsibility for third-party websites, their content, availability, or practices.
            </p>
          </section>

          <section>
            <h2>7. Limitation of Liability</h2>

            <p>
              To the extent permitted by applicable law, OyeYar will not be responsible for losses
              or damages arising from the use of, or inability to use, the website.
            </p>

            <p>
              This includes, where permitted by law, indirect, incidental, or consequential losses
              related to website access or use.
            </p>
          </section>

          <section>
            <h2>8. Privacy</h2>

            <p>
              Your use of the website is also subject to the OyeYar Privacy Policy, which explains
              how information may be handled when you interact with the website.
            </p>

            <Link href="/privacy" className="legal-inline-link">
              Read the Privacy Policy
            </Link>
          </section>

          <section>
            <h2>9. Changes to These Terms</h2>

            <p>These Terms of Use may be updated from time to time.</p>

            <p>
              The most recent version will be published on this page. Your continued use of the
              website after changes become effective may be subject to the updated terms.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>

            <p>If you have questions regarding these Terms of Use, you can contact OyeYar.</p>

            <a href="mailto:oyeyar.com@gmail.com" className="legal-contact-link">
              <Mail size={17} />
              oyeyar.com@gmail.com
            </a>
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
