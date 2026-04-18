import LegalLayout from "@/components/LegalLayout";

export default function CookiesPolicy() {
  return (
    <LegalLayout title="Cookie Policy" updatedAt="April 2024">
      <h2>What Are Cookies?</h2>
      <p>
        Cookies and similar technologies (like localStorage) are small text files placed on your device to store data that can be recalled by a web server in the domain that placed the file.
      </p>

      <h2>How We Use Local Storage</h2>
      <p>
        We rely primarily on <strong>localStorage</strong> (a feature built into modern browsers) to provide core game functionality without needing a database. Specifically, we use the following keys:
      </p>
      <ul>
        <li><code>cricketexpertpro_best</code>: Stores your highest score so you can track your progress across sessions.</li>
        <li><code>cricketexpertpro_cookie_consent</code>: Remembers whether you have dismissed the cookie consent banner so we don't show it to you repeatedly.</li>
      </ul>

      <h2>Third-Party Cookies</h2>
      <p>
        In addition to our strictly necessary local storage, we may use third-party services that set their own cookies:
      </p>
      <ul>
        <li><strong>Google Analytics:</strong> We may use Google Analytics to understand how visitors engage with our site (e.g., page views, session duration).</li>
        <li><strong>Google Fonts:</strong> We use Google Fonts (Nunito) to ensure the text looks great on all devices, which may involve certain data collection by Google in accordance with their privacy policy.</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>
        You can clear your localStorage and cookies at any time through your browser settings. Please note that clearing localStorage will permanently delete your saved high score in the game.
      </p>
    </LegalLayout>
  );
}
