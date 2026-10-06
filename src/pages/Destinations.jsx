import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X, Compass } from "lucide-react";
import { categories, destinations } from "../data/destinations";
import CategoryFilter from "../components/CategoryFilter";
import DestinationCard from "../components/DestinationCard";
import PageMeta from "../components/PageMeta";

export default function Destinations() {
  const [params, setParams] = useSearchParams();
  const category = categories.includes(params.get("category"))
    ? params.get("category")
    : "All";
  const query = params.get("q") || "";
  const normalized = query.trim().toLocaleLowerCase();
  const filtered = destinations.filter(
    (d) =>
      (category === "All" || d.filters.includes(category)) &&
      `${d.name} ${d.location} ${d.area} ${d.category} ${d.shortDescription} ${d.filters.join(" ")}`
        .toLocaleLowerCase()
        .includes(normalized),
  );
  const update = (key, value, replace = false) => {
    const next = new URLSearchParams(params);
    if (value && value !== "All") next.set(key, value);
    else next.delete(key);
    setParams(next, { replace, preventScrollReset: true });
  };
  return (
    <>
      <PageMeta title="Explore Zamboanga del Norte" />
      <section className="page-heading">
        <div className="container">
          <p className="eyebrow">YOUR NEXT STORY STARTS HERE</p>
          <h1>
            Explore
            <br />
            <em>Zamboanga del Norte</em>
          </h1>
          <p>Find your next destination across the province.</p>
          <span className="heading-decoration" aria-hidden="true">
            <Compass size={210} strokeWidth={0.5} />
          </span>
        </div>
      </section>
      <section className="section destination-directory container">
        <div className="directory-toolbar">
          <div className="search-field">
            <Search size={19} />
            <label className="sr-only" htmlFor="destination-search">
              Search destinations
            </label>
            <input
              id="destination-search"
              type="search"
              placeholder="Search destinations..."
              value={query}
              onChange={(e) => update("q", e.target.value, true)}
            />
            {query && (
              <button
                aria-label="Clear search"
                onClick={() => update("q", "", true)}
              >
                <X size={18} />
              </button>
            )}
          </div>
          <span className="directory-hint">
            <SlidersHorizontal size={16} /> Find your kind of place
          </span>
        </div>
        <CategoryFilter
          value={category}
          onChange={(value) => update("category", value)}
        />
        <div className="result-summary">
          <p role="status" aria-live="polite">
            {filtered.length}{" "}
            {filtered.length === 1 ? "destination" : "destinations"}
            {category !== "All" ? ` · ${category}` : " to discover"}
            {normalized && ` matching “${query.trim()}”`}
          </p>
          {(query || category !== "All") && (
            <button className="reset-link" onClick={() => setParams({})}>
              Reset filters <X size={13} />
            </button>
          )}
        </div>
        {filtered.length > 0 ? (
          <div className="destination-grid">
            {filtered.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Compass size={48} strokeWidth={1} />
            <h2>A little off the map?</h2>
            <p>
              No destinations match just yet. Try another name or explore a
              different category.
            </p>
            <button className="button" onClick={() => setParams({})}>
              Show all destinations <ArrowIcon />
            </button>
          </div>
        )}
        <p className="directory-footnote">
          Travel details can change. Check current access and arrangements with
          local tourism offices or attraction operators before visiting.
        </p>
      </section>
    </>
  );
}
function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}
