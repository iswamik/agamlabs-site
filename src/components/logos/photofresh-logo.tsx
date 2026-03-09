// Copyright 2026 Agam Labs. All rights reserved.

interface PhotoFreshLogomarkProps {
  size?: number;
  className?: string;
}

export function PhotoFreshLogomark({
  size = 24,
  className,
}: PhotoFreshLogomarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PhotoFresh logo"
    >
      {/* Camera aperture circle */}
      <circle
        cx="24"
        cy="24"
        r="16"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Aperture blades */}
      <path
        d="M24 8L28 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M37.9 16L28 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M37.9 32L28 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 40L20 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10.1 32L20 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10.1 16L20 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Inner circle */}
      <circle
        cx="24"
        cy="24"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Emerald sparkle */}
      <circle cx="38" cy="10" r="3" fill="#10b981" />
      <path
        d="M38 6V8M38 12V14M34 10H36M40 10H42"
        stroke="#10b981"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
