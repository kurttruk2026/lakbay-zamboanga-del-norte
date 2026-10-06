import { useState } from "react";
import { ImageOff } from "lucide-react";

export default function Photo({
  src,
  alt,
  className = "",
  eager = false,
  ...props
}) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div
        className={`photo-fallback ${className}`}
        role="img"
        aria-label={`${alt}. Photograph unavailable.`}
      >
        <ImageOff size={28} />
        <span>Let your next journey fill the frame.</span>
      </div>
    );
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
