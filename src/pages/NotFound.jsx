import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import PageMeta from "../components/PageMeta";

export default function NotFound({ destination = false }) {
  return (
    <section className="not-found container">
      <PageMeta title="Page Not Found" />
      <Compass size={76} strokeWidth={1} />
      <p className="eyebrow">404 · A SMALL DETOUR</p>
      <h1>
        Even good adventures
        <br />
        take a <em>wrong turn.</em>
      </h1>
      <p>
        {destination
          ? "We couldn’t find that destination. There are still plenty of wonderful places to discover."
          : "This page seems to have wandered off. Let’s get you back to somewhere beautiful."}
      </p>
      <Link className="button" to="/destinations">
        <ArrowLeft size={18} /> Back to Destinations
      </Link>
      <Link className="text-link" to="/">
        Or head home
      </Link>
    </section>
  );
}
