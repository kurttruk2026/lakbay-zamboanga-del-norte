import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand />
            <p>
              Discover the destinations, stories, and natural beauty of
              Zamboanga del Norte.
            </p>
            <span className="footer-location">
              <MapPin size={14} /> Mindanao, Philippines
            </span>
          </div>
          <div>
            <h3>Find your way</h3>
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/travel-guide">Travel Guide</Link>
            <Link to="/about">About</Link>
          </div>
          <div>
            <h3>A little exploration</h3>
            <Link to="/destinations?category=Beaches">Beaches & Islands</Link>
            <Link to="/destinations?category=Nature">Nature</Link>
            <Link to="/destinations?category=Historical">Historical Sites</Link>
            <Link to="/destinations?category=Adventure">Adventure</Link>
          </div>
          <div className="footer-invitation">
            <span className="eyebrow light">TRAVEL SLOW. DISCOVER MORE.</span>
            <p>
              Some places stay
              <br />
              with you.
            </p>
            <Link to="/explore">
              Find your experience <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Lakbay Zamboanga del Norte</p>
          <p>Created for educational purposes.</p>
          <Link to="/credits">Sources & Photo Credits</Link>
        </div>
      </div>
    </footer>
  );
}
