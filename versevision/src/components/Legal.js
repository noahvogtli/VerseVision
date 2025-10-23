import React from "react";
import Banner from "./Banner";
import "./Legal.css";

export default function Legal() {
  return (
    <>
      <Banner />
      <div className="legal-page">
        <div className="legal-container">
          <main className="legal-content">
            <section id="privacy">
              <h1>Privacy Policy</h1>
              <p className="meta">Effective Date: October 23, 2025 — Website: www.versevision.net</p>
              <p>
                VerseVision ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit or create an account on www.versevision.net (the "Site"). By using the Site, you agree to this policy.
              </p>

              <h2>1. Information We Collect</h2>
              <ul>
                <li><strong>Account information:</strong> Email and password for registration.</li>
                <li><strong>Automatically collected data:</strong> Cookies and Google Analytics (IP, browser info, usage data).</li>
                <li><strong>AI interaction data:</strong> Text inputs processed by OpenAI API for generating responses.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>Provide account access and personalize experience.</li>
                <li>Improve website performance and content.</li>
                <li>Analyze usage via Google Analytics.</li>
                <li>Process AI interactions through OpenAI API.</li>
              </ul>

              <h2>3. Cookies</h2>
              <p>
                Cookies help maintain sessions, preferences, and analytics. You may disable them in browser settings, but some features may stop working.
              </p>

              <h2>4. Sharing of Information</h2>
              <p>
                We do not sell your data. Limited information is shared with trusted providers such as Google Analytics and OpenAI.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We apply reasonable technical measures to secure data, but no system is completely secure.
              </p>

              <h2>6. Your Rights</h2>
              <p>
                You may request access, correction, or deletion of your personal data by contacting us at <a href="mailto:noahvogtli@gmail.com">noahvogtli@gmail.com</a>.
              </p>

              <h2>7. Third-Party Links</h2>
              <p>
                We are not responsible for the privacy practices of external sites linked from VerseVision.
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>Updates will be reflected by a new effective date at the top of this page.</p>
            </section>

            <section id="terms">
              <h1>Terms of Service</h1>
              <p className="meta">Effective Date: October 23, 2025</p>
              <p>
                These Terms govern your use of VerseVision. By accessing or using the Site, you agree to these Terms. If you do not agree, please discontinue use.
              </p>

              <h2>1. Description of Service</h2>
              <p>
                VerseVision provides AI-generated Bible insights for educational and spiritual reflection. It is not a substitute for professional religious or theological advice.
              </p>

              <h2>2. User Accounts</h2>
              <p>
                Users may create accounts using valid emails and passwords. You are responsible for account activity and keeping credentials secure.
              </p>

              <h2>3. Acceptable Use</h2>
              <p>
                Do not misuse the Site, attempt unauthorized access, distribute spam, or engage in illegal activity. Violations may result in suspension or termination.
              </p>

              <h2>4. AI-Generated Content Disclaimer</h2>
              <p>
                AI-generated content may include subjective interpretations or inaccuracies. Use for personal study only. VerseVision does not provide professional theological advice.
              </p>

              <h2>5. Intellectual Property</h2>
              <p>
                All content belongs to VerseVision unless otherwise stated. Reproduction or redistribution without permission is prohibited.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                VerseVision and its owners are not liable for damages resulting from use or reliance on content. Use at your own risk.
              </p>

              <h2>7. Termination</h2>
              <p>
                Accounts may be suspended or terminated for violations or business reasons at VerseVision's discretion.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>Updates to these Terms will be posted here. Continued use indicates acceptance.</p>
            </section>

            <section id="contact">
              <h2>Contact</h2>
              <p>
                For questions about this policy or these terms, contact <a href="mailto:noahvogtli@gmail.com">noahvogtli@gmail.com</a>.
              </p>
            </section>

            <footer>© 2025 VerseVision. All rights reserved.</footer>
          </main>
        </div>
      </div>
    </>
  );
}