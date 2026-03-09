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
      {/* Real Tamil letter அ */}
      <text
        x="24"
        y="36"
        textAnchor="middle"
        fontFamily='"Noto Sans Tamil", sans-serif'
        fontSize="38"
        fontWeight="700"
        fill="currentColor"
      >
        அ
      </text>
      {/* 4-point golden sparkle — top right */}
      <path
        d="M44 3l-1.5 3.5L39 8l3.5 1.5L44 13l1.5-3.5L49 8l-3.5-1.5Z"
        fill="#F59E0B"
      />
    </svg>
  );
}
