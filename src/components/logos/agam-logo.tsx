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
    </svg>
  );
}
