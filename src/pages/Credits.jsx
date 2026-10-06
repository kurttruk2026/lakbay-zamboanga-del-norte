import { ExternalLink } from "lucide-react";
import PageMeta from "../components/PageMeta";
import { sources } from "../data/destinations";
import photoCredits from "../data/image-credits.json";

export default function Credits() {
  return (
    <>
      <PageMeta title="Sources & Photo Credits" />
      <section className="page-heading">
        <div className="container">
          <p className="eyebrow">WITH THANKS & A LITTLE TRANSPARENCY</p>
          <h1>
            Stories have sources.
            <br />
            <em>Photographs have makers.</em>
          </h1>
          <p>
            The references and creative work behind this educational showcase.
          </p>
        </div>
      </section>
      <section className="section container credits-page">
        <h2>Travel & heritage references</h2>
        <p>
          Descriptions are written for this project using the references below.
          Suggested activities and packing tips are general guidance, not live
          availability information.
        </p>
        <ul className="source-list">
          {Object.values(sources).map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.label}
                <ExternalLink size={16} />
              </a>
            </li>
          ))}
        </ul>
        <h2>Photography</h2>
        <p>
          Photos are stored locally. Some photographs are older and may not show
          present conditions. Where a verified attraction photo was unavailable,
          an illustrative Philippine photo is explicitly labeled. Photographs
          may be resized and cropped for the layout; each retains the license
          linked below.
        </p>
        <div className="credits-grid">
          {Object.entries(photoCredits).map(([key, photo]) => (
            <article key={key}>
              <img
                src={photo.file}
                alt={photo.description || photo.title}
                loading="lazy"
              />
              <div>
                <h3>{photo.title.replace(/^File:/, "")}</h3>
                <p>Photo: {photo.author}</p>
                <a href={photo.source} target="_blank" rel="noreferrer">
                  Original photograph <ExternalLink size={12} />
                </a>
                <a
                  href={photo.licenseUrl || photo.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  {photo.license} <ExternalLink size={12} />
                </a>
                {photo.note && <p className="small-copy">{photo.note}</p>}
              </div>
            </article>
          ))}
        </div>
        <h2>Typography & icons</h2>
        <p>
          DM Sans and Cormorant Garamond are locally hosted through Fontsource
          under the SIL Open Font License. Icons are from Lucide under the ISC
          License.
        </p>
        <p className="small-copy">
          Research and photo selection: October 2026. No endorsement by the
          cited organizations or photographers is implied.
        </p>
      </section>
    </>
  );
}
