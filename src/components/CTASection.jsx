import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Photo from "./Photo";

export default function CTASection() {
  return (
    <section className="cta-section">
      <Photo
        src="/images/aliguay.jpg"
        alt="The coastline of Aliguay Island at sunset"
      />
      <div className="cta-shade" />
      <div className="container cta-content">
        <p className="eyebrow light">THERE’S A STORY WAITING FOR YOU</p>
        <h2>
          Your ZaNorte Adventure
          <br />
          Starts Here
        </h2>
        <p>
          From historic Dapitan to beautiful beaches, islands, and natural
          escapes, discover a destination worth remembering.
        </p>
        <Link className="button button-gold" to="/destinations">
          Start Exploring <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
