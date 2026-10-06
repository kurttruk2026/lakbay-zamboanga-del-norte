import { useEffect } from "react";

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Lakbay Zamboanga del Norte`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        description ||
          "Discover destinations, stories, and natural beauty in Zamboanga del Norte. An independent student tourism showcase.",
      );
  }, [title, description]);
  return null;
}
