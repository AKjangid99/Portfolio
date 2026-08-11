export function Trilasoft({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 240"
      className={className}
      role="img"
      aria-label="Trilasoft"
      {...props}
    >
      <circle cx="140" cy="45" r="32" fill="#0052B4" />
      <path
        d="M 68,66 A 36,36 0 0,0 42,127 C 52,142 70,148 85,162 C 95,171 97,180 95,190 A 45,45 0 1,0 178,165 C 168,145 145,142 125,132 C 108,123 103,110 104,102 A 36,36 0 0,0 68,66 Z"
        fill="#D92B2F"
      />
    </svg>
  );
}

export default Trilasoft;
