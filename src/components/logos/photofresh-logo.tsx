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
      {/* Photo frame — rounded rectangle */}
      <rect
        x="6"
        y="8"
        width="32"
        height="32"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Mountain landscape inside frame */}
      <path
        d="M6 32l8-10 6 6 8-12 10 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Sun inside frame */}
      <circle cx="30" cy="17" r="3" fill="currentColor" />
      {/* 4-point emerald sparkle — top right, outside frame */}
      <path
        d="M44 3l-1.5 3.5L39 8l3.5 1.5L44 13l1.5-3.5L49 8l-3.5-1.5Z"
        fill="#10b981"
      />
    </svg>
  );
}
