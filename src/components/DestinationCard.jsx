import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import Photo from "./Photo";

export default function DestinationCard({ destination }) {
  const d = destination;
  return (
    <article className="destination-card">
      <Link
        to={`/destinations/${d.slug}`}
        className="card-photo-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Photo src={d.image} alt={d.imageAlt} />
        <span className="category-badge">{d.category}</span>
        {d.imageNote && <span className="photo-note">Illustrative photo</span>}
      </Link>
      <div className="card-content">
        <p className="location">
          <MapPin size={13} />
          {d.location}
        </p>
        <h3>
          <Link to={`/destinations/${d.slug}`}>{d.name}</Link>
        </h3>
        <p className="card-description">{d.shortDescription}</p>
        <Link
          to={`/destinations/${d.slug}`}
          className="card-detail"
          aria-label={`View details of ${d.name}`}
        >
          View Details <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}
