import { Link } from "react-router-dom";

export default function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Lakbay Zamboanga del Norte home">
      <svg
        className="brand-icon"
        width="46"
        height="46"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="34" cy="11" r="4" fill="currentColor" />
        <path
          d="m3 29 13-19 13 19m-8-9 6-9 17 20M3 35q10-6 21 0t21 0M3 41q10-6 21 0t21 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        <strong>
          LAKBAY<span className="brand-dot">.</span>
        </strong>
        <small>ZAMBOANGA DEL NORTE</small>
      </span>
    </Link>
  );
}
