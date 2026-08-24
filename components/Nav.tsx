export type ActivePage =
  | "home"
  | "doors"
  | "locks"
  // | "gallery"
  | "about"
  | "contact";

export default function Nav({ active }: { active?: ActivePage }) {
  return (
    <>
      <nav className="site-nav" id="siteNav">
        <div className="nav-inner">
          <a href="/" className="logo">
            <img src="/icon.png" alt="WoodLand" />
            <em>WoodLand</em>
          </a>
          <div className="nav-links">
            <a href="/" className={active === "home" ? "active" : undefined}>
              Home
            </a>
            <a
              href="/collections"
              className={active === "doors" ? "active" : undefined}
            >
              Doors
            </a>
            <a
              href="/door-locks"
              className={active === "locks" ? "active" : undefined}
            >
              Door Locks
            </a>
           
            <a
              href="/our-story"
              className={active === "about" ? "active" : undefined}
            >
              About
            </a>
            <a
              href="/contact"
              className={
                active === "contact" ? "active nav-cta" : "nav-cta"
              }
            >
              Get a Quote
            </a>
          </div>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Menu"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className="mobile-menu" id="mobileMenu">
        <a href="/">Home</a>
        <a href="/collections">Doors</a>
        <a href="/door-locks">Door Locks</a>
        {/* <a href="/gallery">Gallery</a> */}
        <a href="/our-story">About</a>
        <a href="/contact">Contact</a>
      </div>
    </>
  );
}
