import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Compass,
  MapPin,
  Leaf,
  ExternalLink,
} from "lucide-react";
import { destinations } from "../data/destinations";
import PageMeta from "../components/PageMeta";
import Photo from "../components/Photo";
import DestinationCard from "../components/DestinationCard";
import SectionTitle from "../components/SectionTitle";
import NotFound from "./NotFound";

export default function DestinationDetail() {
  const { slug } = useParams();
  const d = destinations.find((item) => item.slug === slug);
  if (!d) return <NotFound destination />;
  const related = destinations
    .filter((item) => item.id !== d.id)
    .sort(
      (a, b) =>
        Number(b.filters.some((f) => d.filters.includes(f))) -
        Number(a.filters.some((f) => d.filters.includes(f))),
    )
    .slice(0, 3);
  return (
    <>
      <PageMeta title={d.name} description={d.shortDescription} />
      <section className="detail-hero">
        <Photo eager src={d.image} alt={d.imageAlt} />
        <div className="detail-hero-overlay" />
        <div className="container detail-hero-content">
          <Link className="back-link" to="/destinations">
            <ArrowLeft size={17} /> Back to Destinations
          </Link>
          <div>
            <span className="category-badge">{d.category}</span>
            <h1>{d.name}</h1>
            <p>
              <MapPin size={18} />
              {d.area}
            </p>
          </div>
        </div>
        {d.imageNote && (
          <span className="detail-photo-note">{d.imageNote}</span>
        )}
      </section>
      <div className="container detail-layout section">
        <article>
          <p className="eyebrow">GET TO KNOW THE PLACE</p>
          <h2>A closer look</h2>
          <p className="detail-description">{d.description}</p>
          <h3 className="detail-subheading">
            Little moments, lasting memories
          </h3>
          <p className="muted">Highlights & things to do</p>
          <ul className="highlight-list">
            {d.highlights.map((item) => (
              <li key={item}>
                <span>
                  <Check size={17} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="travel-tips">
            <Compass size={25} strokeWidth={1.5} />
            <div>
              <h3>A few tips before you go</h3>
              <ul>
                {d.travelTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="source-line">
            Learn more:{" "}
            <a href={d.source.url} target="_blank" rel="noreferrer">
              {d.source.label} <ExternalLink size={12} />
            </a>
          </p>
          <Link className="text-link" to="/credits">
            Photo credits & image notes <ArrowUpRight size={15} />
          </Link>
        </article>
        <aside className="detail-aside">
          <p className="eyebrow">AT A GLANCE</p>
          <h3>Make it your kind of day.</h3>
          <div className="aside-info">
            <MapPin size={19} />
            <div>
              <small>LOCATION</small>
              <p>{d.location}</p>
            </div>
          </div>
          <div className="aside-info">
            <Leaf size={19} />
            <div>
              <small>EXPERIENCE</small>
              <p>{d.category}</p>
            </div>
          </div>
          <p className="aside-label">BEST FOR</p>
          <div className="tag-list">
            {d.bestFor.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <hr />
          <p className="aside-note">
            A little planning makes more room for discovery. Check local
            conditions and current opening arrangements.
          </p>
          <Link className="button" to="/travel-guide">
            Plan your visit <ArrowUpRight size={17} />
          </Link>
        </aside>
      </div>
      <section className="section related-section">
        <div className="container">
          <SectionTitle
            eyebrow="KEEP THE DISCOVERY GOING"
            title="Somewhere else to wander"
          />
          <div className="destination-grid">
            {related.map((item) => (
              <DestinationCard key={item.id} destination={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
