import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Heart,
  Landmark,
  Leaf,
  MapPin,
  Sun,
  Trees,
  Waves,
} from "lucide-react";
import { destinations } from "../data/destinations";
import PageMeta from "../components/PageMeta";
import Photo from "../components/Photo";
import SectionTitle from "../components/SectionTitle";
import DestinationCard from "../components/DestinationCard";
import ExperienceGrid from "../components/ExperienceGrid";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <PageMeta title="Discover the Beauty of ZaNorte" />
      <section className="hero">
        <Photo
          eager
          className="hero-image"
          src="/images/dakak.jpg"
          alt="Golden afternoon light over Dakak Beach and its peaceful cove in Dapitan"
        />
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow light">
              <span className="eyebrow-line" /> WELCOME TO ZAMBOANGA DEL NORTE
            </p>
            <h1>
              Discover the
              <br />
              Beauty of <em>ZaNorte.</em>
            </h1>
            <p className="hero-description">
              Explore breathtaking beaches, hidden waterfalls, historic
              landmarks, and unforgettable adventures in the heart of the
              Zamboanga Peninsula.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" to="/destinations">
                Explore Destinations <ArrowUpRight size={18} />
              </Link>
              <Link className="button button-glass" to="/about">
                Discover ZaNorte <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="hero-bottom">
            <span>
              <MapPin size={16} /> Zamboanga del Norte, Philippines
            </span>
            <a href="#introduction" className="scroll-cue">
              A little further, a little wonder{" "}
              <span>
                <ArrowDown size={16} />
              </span>
            </a>
            <span className="hero-photo-label">
              DAKAK, DAPITAN CITY <span>01 / 10</span>
            </span>
          </div>
        </div>
        <div className="hero-side-label">GO SOMEWHERE THAT STAYS WITH YOU</div>
      </section>

      <div className="discovery-strip">
        <div className="container">
          <span className="strip-intro">
            A place for every kind of explorer
          </span>
          <Link to="/destinations?category=Beaches">
            <Waves /> Untouched coastlines
          </Link>
          <Link to="/destinations?category=Historical">
            <Landmark /> Stories worth discovering
          </Link>
          <Link to="/destinations?category=Nature">
            <Trees /> Naturally unforgettable
          </Link>
        </div>
      </div>

      <section id="introduction" className="section intro-section container">
        <div className="intro-title">
          <p className="eyebrow">A WARM WELCOME TO ZANORTE</p>
          <h2>
            Where Nature
            <br />
            Meets <em>History</em>
          </h2>
          <div className="intro-small-note">
            <span className="small-star">✳</span>
            <p>
              A little off the usual path.
              <br />A whole lot to discover.
            </p>
          </div>
        </div>
        <div className="intro-body">
          <p className="lead">
            Some journeys take you somewhere new.
            <br />
            This one brings you a little closer.
          </p>
          <p>
            Along the coast of northwestern Mindanao, Zamboanga del Norte brings
            together beautiful shorelines, green escapes, and stories that
            helped shape a nation. Come for the scenery. Stay for the everyday
            moments in between.
          </p>
          <div className="feature-row">
            <div>
              <Leaf />
              <h3>Natural Wonders</h3>
              <p>
                Beaches, waterfalls,
                <br />
                and green horizons.
              </p>
            </div>
            <div>
              <Landmark />
              <h3>Rich Heritage</h3>
              <p>
                Historic places.
                <br />
                Stories that live on.
              </p>
            </div>
            <div>
              <Compass />
              <h3>Adventure</h3>
              <p>
                New paths and
                <br />
                outdoor discoveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container">
          <SectionTitle
            eyebrow="PLACES THAT STAY WITH YOU"
            title="Featured Destinations"
            description="Discover some of the must-visit places across Zamboanga del Norte."
          >
            <Link className="text-link" to="/destinations">
              View all destinations <ArrowUpRight size={19} />
            </Link>
          </SectionTitle>
          <div className="destination-grid">
            {destinations
              .filter((d) => d.featured)
              .map((d) => (
                <DestinationCard key={d.id} destination={d} />
              ))}
          </div>
        </div>
      </section>

      <section className="section experiences-section container">
        <SectionTitle
          centered
          eyebrow="FOLLOW YOUR KIND OF WONDER"
          title={
            <>
              Explore <em>Your Way</em>
            </>
          }
          description="For the beach days, the history lessons, and the just-one-more-adventure days."
        />
        <ExperienceGrid />
      </section>

      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-photos">
            <Photo
              src="/images/rizal.jpg"
              alt="A statue of José Rizal among trees at the Rizal Shrine"
              className="story-main-photo"
            />
            <Photo
              src="/images/dakak.jpg"
              alt="White sand along Dakak’s tropical cove"
              className="story-inset-photo"
            />
            <div className="story-stamp">
              <Sun size={29} strokeWidth={1.3} />
              <span>
                WANDER SLOWLY
                <br />
                FEEL DEEPLY
              </span>
            </div>
            <p className="image-caption">
              A province with stories in every corner.
            </p>
          </div>
          <div className="story-copy">
            <p className="eyebrow">IT’S THE FEELING YOU TAKE HOME</p>
            <h2>
              More Than
              <br />a <em>Destination</em>
            </h2>
            <p>
              It’s the sea breeze on an afternoon walk. The stillness of a
              forest path. The history of Dr. José Rizal’s years in Dapitan,
              waiting to be seen with fresh eyes.
            </p>
            <p>
              ZaNorte invites you to discover local culture, enjoy the outdoors,
              and meet the people who make a place feel welcoming. Give yourself
              time to take it all in.
            </p>
            <div className="story-values">
              <span>
                <Waves size={18} /> Beautiful by nature
              </span>
              <span>
                <Heart size={18} /> Warm at heart
              </span>
            </div>
            <Link className="text-link" to="/about">
              Get to know ZaNorte <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section gallery-section container">
        <SectionTitle
          eyebrow="POSTCARDS FROM ZANORTE"
          title={
            <>
              A Thousand Little <em>Wonders</em>
            </>
          }
          description="A glimpse of the places, colors, and quiet moments waiting for you."
        >
          <span className="gallery-aside">
            Less scrolling.
            <br />
            More exploring.
          </span>
        </SectionTitle>
        <div className="gallery-grid">
          {[
            {
              image: "dakak",
              label: "Where the sea meets the shore",
              place: "Dakak Beach",
              slug: "dakak-beach",
            },
            {
              image: "rizal",
              label: "Stories beneath the trees",
              place: "Rizal Shrine",
              slug: "rizal-shrine",
            },
            {
              image: "waterfall",
              label: "Follow the sound of nature",
              place: "Waterfall inspiration · illustrative photo",
              slug: "sungkilaw-falls",
            },
            {
              image: "linabo",
              label: "The greener way",
              place: "Linabo Peak",
              slug: "linabo-peak",
            },
            {
              image: "aliguay",
              label: "Your island state of mind",
              place: "Aliguay Island",
              slug: "aliguay-island",
            },
          ].map((photo, i) => (
            <Link
              to={`/destinations/${photo.slug}`}
              className={`gallery-item gallery-item-${i + 1}`}
              key={photo.image}
            >
              <Photo src={`/images/${photo.image}.jpg`} alt={photo.place} />
              <div>
                <span>{photo.place}</span>
                <h3>{photo.label}</h3>
              </div>
              <ArrowUpRight size={21} />
            </Link>
          ))}
        </div>
      </section>

      <section className="guide-teaser container">
        <div className="guide-teaser-icon">
          <Compass size={34} strokeWidth={1.4} />
        </div>
        <div>
          <p className="eyebrow">A LITTLE PLANNING GOES A LONG WAY</p>
          <h2>Good trips start with a little know-how.</h2>
          <p>
            Getting here, getting around, and making the most of your visit.
          </p>
        </div>
        <Link className="button button-outline" to="/travel-guide">
          Your Travel Guide <ArrowUpRight size={18} />
        </Link>
      </section>
      <CTASection />
    </>
  );
}
