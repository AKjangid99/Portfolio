/**
 * Infotact Solutions logo mark only — the viewBox is cropped to the tiles and
 * the wordmark is omitted, since the full lockup is illegible at avatar size.
 */
export function Infotact({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="40 44 126 126"
      className={className}
      role="img"
      aria-label="Infotact Solutions"
      {...props}
    >
      <rect
        x="52"
        y="58"
        width="40"
        height="40"
        rx="6"
        transform="rotate(-30 72 78)"
        fill="#8A2BE2"
      />
      <rect
        x="105"
        y="58"
        width="48"
        height="48"
        rx="8"
        transform="rotate(-25 129 82)"
        fill="#00BCFF"
      />
      <rect
        x="105"
        y="88"
        width="44"
        height="44"
        rx="8"
        transform="rotate(-25 127 110)"
        fill="#FFB830"
      />
      <rect
        x="62"
        y="80"
        width="46"
        height="46"
        rx="8"
        transform="rotate(-25 85 103)"
        fill="#8CE635"
      />
      <rect
        x="56"
        y="112"
        width="44"
        height="44"
        rx="8"
        transform="rotate(-25 78 134)"
        fill="#FF4B4B"
      />
      <rect
        x="108"
        y="110"
        width="42"
        height="42"
        rx="6"
        transform="rotate(-30 129 131)"
        fill="#FF0099"
      />
    </svg>
  );
}

export default Infotact;
