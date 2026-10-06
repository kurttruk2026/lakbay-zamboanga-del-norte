import { Link } from "react-router-dom";
import { ArrowUpRight, Compass } from "lucide-react";
import ExperienceGrid from "../components/ExperienceGrid";
import PageMeta from "../components/PageMeta";
import CTASection from "../components/CTASection";

export default function Explore() {
  return (
    <>
      <PageMeta title="Explore Your Way" />
      <section className="page-heading">
        <div className="container">
          <p className="eyebrow">WHAT’S YOUR KIND OF WONDER?</p>
          <h1>
            Explore <em>Your Way</em>
          </h1>
          <p>Follow a feeling. Find a place. Make the day your own.</p>
        </div>
      </section>
      <section className="section container explore-page">
        <ExperienceGrid />
        <div className="explore-note">
          <Compass size={38} strokeWidth={1.2} />
          <div>
            <h2>No two journeys have to look alike.</h2>
            <p>
              Mix a heritage morning with a waterfront evening. Leave room for a
              beach day, or set your sights on a green escape. These collections
              are a starting point for your own adventure.
            </p>
          </div>
          <Link className="text-link" to="/destinations">
            See every destination <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
