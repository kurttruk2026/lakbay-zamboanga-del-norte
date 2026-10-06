import {
  ArrowUpRight,
  Backpack,
  BusFront,
  CalendarDays,
  Check,
  Leaf,
  Plane,
  Ship,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import Photo from "../components/Photo";
import { sources } from "../data/destinations";

export default function TravelGuide() {
  return (
    <>
      <PageMeta title="Your ZaNorte Travel Guide" />
      <section className="page-heading">
        <div className="container">
          <p className="eyebrow">LESS GUESSWORK. MORE DISCOVERY.</p>
          <h1>
            A little planning.
            <br />
            <em>A wonderful journey.</em>
          </h1>
          <p>
            Your travel guide to getting here, getting around, and traveling
            thoughtfully.
          </p>
        </div>
      </section>
      <section className="section container guide-page">
        <div className="guide-intro-photo">
          <Photo
            eager
            src="/images/hero.jpg"
            alt="Beach umbrellas and the green coast at Dakak Beach in Dapitan"
          />
          <div>
            <span className="eyebrow light">
              WELCOME TO YOUR NEXT ADVENTURE
            </span>
            <h2>
              Come curious.
              <br />
              Travel thoughtfully.
            </h2>
          </div>
        </div>
        <div className="guide-grid">
          <article className="guide-card">
            <span className="guide-icon">
              <Plane />
            </span>
            <span className="step-number">01</span>
            <h2>Getting There</h2>
            <p>
              Dipolog is a useful gateway to the province, with an airport and
              connections to nearby destinations. Dapitan’s Pulauan port offers
              another way to arrive by sea, while buses and vans connect the
              area with other parts of Mindanao.
            </p>
            <div className="transport-options">
              <span>
                <Plane size={17} /> By air
              </span>
              <span>
                <Ship size={17} /> By sea
              </span>
              <span>
                <BusFront size={17} /> By land
              </span>
            </div>
            <p className="small-copy">
              Check current routes and availability directly with airlines,
              ferry operators, and transport providers. Allow time for
              connections.
            </p>
          </article>
          <article className="guide-card">
            <span className="guide-icon">
              <BusFront />
            </span>
            <span className="step-number">02</span>
            <h2>Getting Around</h2>
            <p>
              Tricycles are common for short local journeys. Buses and vans
              serve longer routes between towns. For some rural areas, locally
              arranged habal-habal motorcycle rides may be an option.
            </p>
            <p>
              Agree on the route and fare before leaving. Use appropriate
              helmets for motorcycle travel and arrange a return ride for remote
              attractions.
            </p>
            <p className="small-copy">
              Your accommodation or local tourism office can help confirm
              suitable transport for your destination.
            </p>
          </article>
          <article className="guide-card">
            <span className="guide-icon">
              <CalendarDays />
            </span>
            <span className="step-number">03</span>
            <h2>Best Time to Visit</h2>
            <p>
              Plan around the kind of trip you want. Clear, calmer days are
              better suited to island outings; cooler mornings can make walks
              and climbs more comfortable.
            </p>
            <p>
              Dipolog receives rainfall throughout the year, so a simple
              wet-season/dry-season rule does not tell the whole story. Bring a
              light rain layer and keep outdoor plans flexible.
            </p>
            <a
              className="text-link"
              href="https://www.pagasa.dost.gov.ph/"
              target="_blank"
              rel="noreferrer"
            >
              Check PAGASA forecasts <ArrowUpRight size={16} />
            </a>
          </article>
          <article className="guide-card packing-card">
            <span className="guide-icon">
              <Backpack />
            </span>
            <span className="step-number">04</span>
            <h2>Travel Tips</h2>
            <ul className="packing-list">
              {[
                "Pack sun protection and comfortable shoes.",
                "Carry water and a little cash for local journeys.",
                "Check weather and sea conditions before outdoor trips.",
                "Confirm transport for remote attractions.",
                "Ask before photographing people or private spaces.",
                "Respect local communities and keep tourist areas clean.",
              ].map((tip) => (
                <li key={tip}>
                  <Check size={16} />
                  {tip}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="responsible-panel">
          <Leaf size={42} strokeWidth={1.2} />
          <div>
            <p className="eyebrow">RESPONSIBLE TOURISM</p>
            <h2>
              Leave nothing but footprints,
              <br />
              <em>take nothing but memories.</em>
            </h2>
            <p>
              Carry out your litter. Give wildlife space. Stay on marked paths.
              Support local guides and small businesses, and follow the guidance
              of the people who care for these places.
            </p>
          </div>
        </div>
        <div className="guide-bottom">
          <p>
            For local planning, consult{" "}
            <a href={sources.park.url} target="_blank" rel="noreferrer">
              Dipolog City Tourism
            </a>{" "}
            and{" "}
            <a href={sources.dapitan.url} target="_blank" rel="noreferrer">
              Dapitan City Tourism
            </a>
            . Climate context:{" "}
            <a href={sources.weather.url} target="_blank" rel="noreferrer">
              PAGASA
            </a>
            .
          </p>
          <Link className="button" to="/destinations">
            Find your next destination <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
