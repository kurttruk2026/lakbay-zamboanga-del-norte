import { categories } from "../data/destinations";

export default function CategoryFilter({ value, onChange }) {
  return (
    <div
      className="category-filters"
      role="group"
      aria-label="Filter destinations by category"
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={value === category ? "selected" : ""}
          aria-pressed={value === category}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
