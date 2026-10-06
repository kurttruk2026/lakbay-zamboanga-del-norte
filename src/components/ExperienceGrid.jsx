import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Waves,
  Trees,
  Landmark,
  Mountain,
  Sun,
} from "lucide-react";
import { experiences } from "../data/destinations";
import Photo from "./Photo";
const icons = {
  waves: Waves,
  trees: Trees,
  landmark: Landmark,
  mountain: Mountain,
  sun: Sun,
};

export default function ExperienceGrid() {
  return (
    <div className="experience-grid">
      {experiences.map((experience, i) => {
        const Icon = icons[experience.icon];
        return (
          <Link
            className="experience-card"
            key={experience.category}
            to={`/destinations?category=${experience.category}`}
          >
            <Photo src={experience.image} alt={experience.alt} />
            <div className="experience-shade" />
            <span className="experience-number">0{i + 1}</span>
            <ArrowUpRight className="experience-arrow" size={20} />
            <div className="experience-content">
              <Icon size={26} strokeWidth={1.4} />
              <h3>{experience.name}</h3>
              <p>{experience.description}</p>
            </div>
            {experience.note && (
              <span className="experience-note">{experience.note}</span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
