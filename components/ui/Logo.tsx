export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          <path
            d="M4 18c4-10 20-10 24 0-4-2-8 0-12 4-4-4-8-6-12-4z"
            fill="url(#logoGrad)"
          />
          <circle cx="16" cy="22" r="2" fill="#0F172A" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight">Gleitcast</span>
    </span>
  );
}
