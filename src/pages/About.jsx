import { Link } from "react-router-dom";
import { ArrowUpRight, Heart, Landmark, Leaf, MapPin } from "lucide-react";
import PageMeta from "../components/PageMeta";
import Photo from "../components/Photo";
import CTASection from "../components/CTASection";

export default function About() {
  return (
    <>
      <PageMeta title="About Zamboanga del Norte" />
      <section className="page-heading">
        <div className="container">
          <p className="eyebrow">OUR PLACE. OUR STORIES.</p>
          <h1>
            About
            <br />
            <em>Zamboanga del Norte</em>
          </h1>
          <p>A corner of the Philippines with so much to share.</p>
        </div>
      </section>
      <section className="section container">
        <div className="about-intro">
          <div>
            <p className="eyebrow">DISCOVER ZANORTE</p>
            <h2>
              A place that invites
              <br />
              you to <em>look closer.</em>
            </h2>
            <p>
              Zamboanga del Norte lies in the northwestern part of Mindanao, in
              the Zamboanga Peninsula. Dipolog is its provincial capital, and
              nearby Dapitan is closely linked to an important chapter in
              Philippine history.
            </p>
            <p>
              Between the coast, the countryside, and the towns, there are many
              ways to spend a day here. This is an invitation to discover a few
              of them with curiosity and care.
            </p>
            <span className="location about-location">
              <MapPin size={17} /> Zamboanga Peninsula, Philippines
            </span>
          </div>
          <div className="about-image">
            <Photo
              eager
              src="/images/dakak.jpg"
              alt="Dakak’s shoreline in Zamboanga del Norte"
            />
            <span>A little closer to nature.</span>
          </div>
        </div>
        <div className="about-cards">
          <article>
            <Landmark size={30} strokeWidth={1.4} />
            <h2>History & Heritage</h2>
            <p>
              Dr. José Rizal lived in exile in Dapitan from 1892 to 1896. The
              shrine, plaza, and other heritage places invite visitors to
              reflect on his life and on the city’s continuing story.
            </p>
            <Link className="text-link" to="/destinations?category=Historical">
              Walk through history <ArrowUpRight size={17} />
            </Link>
          </article>
          <article>
            <Leaf size={30} strokeWidth={1.4} />
            <h2>Nature & Adventure</h2>
            <p>
              Discover coastal scenery, islands, waterfall outings, and green
              trails. Whether your pace is a beach stroll or a climb, leave
              space for the outdoors in your ZaNorte journey.
            </p>
            <Link className="text-link" to="/destinations?category=Nature">
              Find a natural escape <ArrowUpRight size={17} />
            </Link>
          </article>
        </div>
        <div className="purpose-panel">
          <span className="purpose-icon">
            <Heart size={30} strokeWidth={1.4} />
          </span>
          <div>
            <p className="eyebrow">OUR PURPOSE</p>
            <h2>Made to inspire discovery.</h2>
            <p>
              Lakbay Zamboanga del Norte is a student tourism showcase designed
              to help visitors discover attractions and appreciate the
              province’s natural beauty, history, and culture.
            </p>
            <p>
              This project was created for educational purposes. It is an
              independent showcase, not an official government tourism website.
              Use the linked local sources to confirm current travel
              arrangements.
            </p>
            <Link className="text-link" to="/credits">
              Our sources & photo credits <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
