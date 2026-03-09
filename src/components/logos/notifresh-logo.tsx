// Copyright 2026 Agam Labs. All rights reserved.

interface NotiFreshLogomarkProps {
  size?: number;
  className?: string;
}

export function NotiFreshLogomark({
  size = 24,
  className,
}: NotiFreshLogomarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="NotiFresh logo"
    >
      {/* Bell body */}
      <path
        d="M18 20c0-3.3 2.7-6 6-6s6 2.7 6 6v8c0 2 1 3 2 4H16c1-1 2-2 2-4v-8z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Bell clapper */}
      <path
        d="M21 32c0 1.7 1.3 3 3 3s3-1.3 3-3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Fresh sweep lines */}
      <path
        d="M34 14L38 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36 20H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* 4-point golden sparkle — notification accent */}
      <path
        d="M34 9l-1.5 3.5L29 14l3.5 1.5L34 19l1.5-3.5L39 14l-3.5-1.5Z"
        fill="#F59E0B"
      />
    </svg>
  );
}
