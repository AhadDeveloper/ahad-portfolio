// AhadLogo.jsx
// Simplified logo: two short bent lines + "had"

export default function AhadLogo({ width = 110, height = 50, className = "" }) {
  return (
    <svg
      role="img"
      aria-label="Had logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 110 50"
      width={width}
      height={height}
      className={className}
    >
      {/* Two short bent lines */}
      <polyline
        points="5,40 20,15 35,40"
        fill="none"
        stroke="#7c3aed" // primary
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="12,40 27,15 42,40"
        fill="none"
        stroke="#64748b" // secondary
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Text: had */}
      <text
        x="47"
        y="40"
        fontFamily="Poppins"
        fontSize="25"
        fontWeight="600"
        fill="#7c3aed"
      >
        had
      </text>
    </svg>
  );
}
