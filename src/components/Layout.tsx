import { Link, NavLink, Outlet } from 'react-router-dom';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors ${
    isActive ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
  }`;

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col">
      {/* Top nav */}
      <header className="border-b border-stone-200/70 bg-white/80 backdrop-blur sticky top-0 z-20">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-base font-semibold tracking-tight text-stone-900"
          >
            Synthrails
          </Link>
          <div className="flex items-center gap-7">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/research" className={navLinkClass}>
              Research
            </NavLink>
            <NavLink to="/team" className={navLinkClass}>
              Team
            </NavLink>
            <a
              href="mailto:abhinav@synthrails.com"
              className="hidden sm:inline-flex items-center text-sm px-3.5 py-1.5 rounded-full bg-stone-900 text-white hover:bg-stone-700 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-stone-200/70 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-stone-500">
          <div>Synthrails · San Francisco · Founded 2026</div>
          <div className="flex items-center gap-6">
            <Link to="/research" className="hover:text-stone-900 transition-colors">
              Research
            </Link>
            <Link to="/team" className="hover:text-stone-900 transition-colors">
              Team
            </Link>
            <a
              href="mailto:abhinav@synthrails.com"
              className="hover:text-stone-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
