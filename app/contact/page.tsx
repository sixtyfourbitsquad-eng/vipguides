import PageLayout from "@/components/PageLayout";

export default function Contact() {
  return (
    <PageLayout title="Contact Us" badge="GET IN TOUCH">
      <p>
        Have a question, feedback, or a partnership inquiry? We'd love to hear from you.
      </p>
      
      <h2>Support & Feedback</h2>
      <p>
        For general inquiries or to report an issue with the game, please contact us at: <br/>
        <a href="mailto:support@cricketexpertpro.com" className="font-bold">support@cricketexpertpro.com</a>
        <br/><br/>
        <em>Note: Please replace this placeholder email before finalizing ad campaigns.</em>
      </p>

      <h2>Advertising & Partnerships</h2>
      <p>
        If you are interested in advertising on Cricket ExpertPro or discussing a potential partnership, please reach out to our business team: <br/>
        <a href="mailto:partners@cricketexpertpro.com" className="font-bold">partners@cricketexpertpro.com</a>
      </p>

      <h2>Response Time</h2>
      <p>
        As a small independent team, we aim to respond to all inquiries within 48-72 hours. We appreciate your patience!
      </p>
    </PageLayout>
  );
}
