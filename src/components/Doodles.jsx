

// Hand-drawn style SVG bits used around the page.

export const Squiggle = ({ className = '' }) => (
  <svg
    className={`doodle squiggle ${className}`}
    viewBox="0 0 200 14"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M2 9 C 20 2, 30 14, 48 8 S 76 2, 94 8 S 122 14, 140 8 S 168 2, 198 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const Sparkle = ({ className = '', size = 22, style }) => (
  <svg
    className={`doodle sparkle ${className}`}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={style}
    aria-hidden="true"
  >
    <path
      d="M12 1.5 C 12.8 7.5, 16.5 11.2, 22.5 12 C 16.5 12.8, 12.8 16.5, 12 22.5 C 11.2 16.5, 7.5 12.8, 1.5 12 C 7.5 11.2, 11.2 7.5, 12 1.5 Z"
      fill="currentColor"
    />
  </svg>
);

export const Tape = ({ className = '' }) => (
  <span className={`tape ${className}`} aria-hidden="true" />
);

export const Arrow = ({ className = '' }) => (
  <svg
    className={`doodle arrow ${className}`}
    viewBox="0 0 80 40"
    aria-hidden="true"
  >
    <path
      d="M4 6 C 20 30, 44 36, 74 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M62 14 L 75 22 L 64 31"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Underline = ({ children }) => (
  <span className="underline-wrap">
    {children}
    <Squiggle />
  </span>
);
