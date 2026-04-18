import PageLayout from "@/components/PageLayout";

export default function About() {
  return (
    <PageLayout title="About Us" badge="ABOUT THE CREATORS">
      <p>
        Welcome to <strong>Cricket ExpertPro</strong>, an independent passion project built by a team of cricket fans and web arcade developers.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our goal is simple: to provide a highly accessible, fast, and fun arcade batting experience right in your web browser. We believe that gaming should be free from unnecessary barriers like long downloads, required social logins, or persistent paywalls. That's why Cricket ExpertPro is 100% free to play, and requires absolutely nothing but a browser to start hitting boundaries.
      </p>
      <h2>Fair Play & Entertainment</h2>
      <p>
        Please note that Cricket ExpertPro is strictly an entertainment-only platform. <strong>It involves no real money, no betting, and no gambling.</strong> Your high scores are saved locally on your own device for your personal enjoyment. We have no affiliation with the ICC, IPL, or any official cricket leagues or associations.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have feedback on the gameplay or just want to say hi, feel free to visit our contact page. We're always looking for ways to improve the physics, add new bowler types, or tweak the scoring mechanics based on player input.
      </p>
    </PageLayout>
  );
}
