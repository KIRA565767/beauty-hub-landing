export function RouteLandscape({ className = "", opacity = 0.55 }) {
  return (
    <svg className={className} viewBox="0 0 1200 520" fill="none" aria-hidden="true" style={{ opacity }}>
      <path d="M0 404C124 344 218 344 319 390C428 440 535 416 628 342C760 238 890 216 1200 248V520H0V404Z" fill="url(#landA)" />
      <path d="M0 330C158 232 274 234 392 304C520 379 641 342 747 252C872 145 1002 118 1200 146V520H0V330Z" fill="url(#landB)" />
      <path d="M618 520C644 452 642 384 608 318C585 273 586 231 621 192C661 149 705 126 734 82" stroke="#F39A1F" strokeWidth="7" strokeLinecap="round" opacity="0.75" />
      <path d="M618 520C644 452 642 384 608 318C585 273 586 231 621 192C661 149 705 126 734 82" stroke="#FFAA2A" strokeWidth="22" strokeLinecap="round" opacity="0.12" />
      <path d="M902 126H1010M925 126V70C925 50 941 34 961 34C981 34 997 50 997 70V126" stroke="#F7EFD8" strokeWidth="4" opacity="0.22" />
      <path d="M110 420C150 370 170 340 204 330C240 320 270 350 300 396" stroke="#F7EFD8" strokeWidth="3" opacity="0.13" />
      <defs>
        <linearGradient id="landA" x1="600" y1="248" x2="600" y2="520" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3A180D" />
          <stop offset="1" stopColor="#160604" />
        </linearGradient>
        <linearGradient id="landB" x1="600" y1="120" x2="600" y2="520" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6C2A0D" stopOpacity="0.42" />
          <stop offset="1" stopColor="#160604" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HandLayer({ className = "", opacity = 0.36 }) {
  return (
    <svg className={className} viewBox="0 0 560 360" fill="none" aria-hidden="true" style={{ opacity }}>
      <path d="M82 264C142 236 181 214 214 179C244 147 259 100 276 62C284 43 306 46 308 68C312 112 297 146 292 174C309 134 326 93 344 52C354 30 381 38 376 63C369 101 352 145 344 178C363 139 382 98 402 65C416 42 441 57 430 82C413 123 393 163 382 190C406 159 431 130 454 111C475 94 496 113 475 137C431 189 404 236 351 265C297 294 242 302 187 324" stroke="#F7EFD8" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M279 58C293 65 302 72 308 85M344 52C358 59 370 70 376 84M402 65C415 71 426 82 431 95" stroke="#F39A1F" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      <path d="M108 286C204 259 264 259 343 290" stroke="#F39A1F" strokeWidth="5" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

export function PeopleLayer({ className = "", opacity = 0.38 }) {
  return (
    <svg className={className} viewBox="0 0 600 360" fill="none" aria-hidden="true" style={{ opacity }}>
      <path d="M92 308H520" stroke="#F7EFD8" strokeWidth="3" opacity="0.14" />
      <path d="M292 292V236M292 236C274 224 260 203 260 181C260 150 281 127 306 127C331 127 352 150 352 181C352 205 336 225 316 237V292" stroke="#F7EFD8" strokeWidth="4" opacity="0.32" />
      <circle cx="306" cy="102" r="22" stroke="#F7EFD8" strokeWidth="4" opacity="0.32" />
      <path d="M188 296V248M188 248C172 238 160 222 160 203C160 178 178 158 200 158C222 158 240 178 240 203C240 223 228 239 211 249V296" stroke="#F39A1F" strokeWidth="4" opacity="0.42" />
      <circle cx="200" cy="136" r="18" stroke="#F39A1F" strokeWidth="4" opacity="0.42" />
      <path d="M408 296V250M408 250C393 241 383 226 383 208C383 184 400 166 421 166C442 166 459 184 459 208C459 226 448 242 433 250V296" stroke="#F7EFD8" strokeWidth="4" opacity="0.25" />
      <circle cx="421" cy="145" r="17" stroke="#F7EFD8" strokeWidth="4" opacity="0.25" />
      <path d="M102 286C160 240 237 216 312 218C392 220 464 254 534 304" stroke="#F39A1F" strokeWidth="3" opacity="0.32" />
    </svg>
  );
}

export function GridMap({ className = "", opacity = 0.4 }) {
  return (
    <svg className={className} viewBox="0 0 900 520" fill="none" aria-hidden="true" style={{ opacity }}>
      <path d="M80 80H820V440H80V80Z" stroke="#F7EFD8" strokeWidth="2" opacity="0.16" />
      <path d="M80 200H820M80 320H820M260 80V440M450 80V440M640 80V440" stroke="#F7EFD8" strokeWidth="2" opacity="0.12" />
      <path d="M80 80L260 200L450 80L640 200L820 80M80 440L260 320L450 440L640 320L820 440" stroke="#F39A1F" strokeWidth="2" opacity="0.28" />
      <circle cx="260" cy="200" r="8" fill="#F39A1F" />
      <circle cx="450" cy="80" r="8" fill="#F39A1F" />
      <circle cx="640" cy="320" r="8" fill="#F39A1F" />
    </svg>
  );
}

export function SectionScene({ type = "path", className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(243,154,31,0.18),transparent_28%),radial-gradient(circle_at_12%_82%,rgba(255,170,42,0.08),transparent_24%)]" />
      {type === "path" && <RouteLandscape className="absolute bottom-[-8%] right-[-10%] h-[65%] w-[92%]" />}
      {type === "hand" && <HandLayer className="absolute bottom-[-4rem] left-[-2rem] h-[22rem] w-[34rem]" />}
      {type === "people" && <PeopleLayer className="absolute bottom-[-2rem] right-[-2rem] h-[22rem] w-[36rem]" />}
      {type === "grid" && <GridMap className="absolute bottom-[-2rem] left-1/2 h-[24rem] w-[42rem] -translate-x-1/2" />}
    </div>
  );
}
