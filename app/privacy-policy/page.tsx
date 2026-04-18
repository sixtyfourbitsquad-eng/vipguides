import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updatedAt="April 2024">
      <h2>1. Introduction</h2>
      <p>
        Welcome to Cricket ExpertPro. This Privacy Policy outlines how we handle any data when you play our browser game. As a free-to-play web game, we are committed to keeping your experience safe and private.
      </p>

      <h2>2. What Data We Collect</h2>
      <ul>
        <li><strong>Local Data:</strong> We utilize localStorage on your device to save your high scores (`cricketexpertpro_best`). This data never leaves your device.</li>
        <li><strong>Technical & IP Data:</strong> To serve the website securely and efficiently, our hosting providers (Vercel, Cloudflare, etc.) process your IP address and standard HTTP headers. </li>
        <li><strong>Regional Content Customization:</strong> We use IP-derived geographic data temporarily to customize the marketing copy and text on our website based on your region. We do not store your location data permanently.</li>
      </ul>

      <h2>3. Third-Party Services</h2>
      <p>
        We may use standard analytics tools (such as Google Analytics) to understand aggregated traffic patterns, which may set their own cookies. We also use Google Fonts to render typography, which may log IP requests.
      </p>

      <h2>4. Your Rights</h2>
      <p>
        Because we heavily rely on client-side storage, you can delete all your game data at any time by clearing your browser cache and localStorage. 
      </p>

      <h2>5. Contact</h2>
      <p>
        If you have questions about privacy, contact us at privacy@cricketexpertpro.com.
      </p>
    </LegalLayout>
  );
}
