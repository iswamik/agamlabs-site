// Copyright 2026 Agam Labs. All rights reserved.

interface AgamLogomarkProps {
  size?: number;
  className?: string;
}

export function AgamLogomark({ size = 24, className }: AgamLogomarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Agam Labs logo"
    >
      {/* Stylized அ — Tamil letter, geometric curves */}
      <path
        d="M24 6C14 6 8 14 8 24c0 6 3 11 8 14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 6c10 0 16 8 16 18 0 5-2 9-5 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 18c0-2 2-4 4-4s4 2 4 4-2 6-4 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 28c-2 4-5 8-8 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Emerald accent dot */}
      <circle cx="35" cy="36" r="3" fill="#10b981" />
    </svg>
  );
}
