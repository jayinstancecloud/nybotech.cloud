import Link from 'next/link';
import { useRouter } from 'next/router';

function NavLink({ href, children }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li>
      <Link href={href} legacyBehavior>
        <a className={isActive ? 'active' : ''}>{children}</a>
      </Link>
    </li>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <h1>NYBOTECH</h1>
            </div>
            <ul className="nav-menu">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <li>
                <Link href="/cart" legacyBehavior>
                  <a className="cart-link">
                    <i className="fas fa-shopping-cart" />
                    <span className="cart-count">0</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>NYBOTECH</h3>
              <p>
                Leading provider of medical technology solutions and equipment for healthcare
                professionals worldwide.
              </p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link href="/" legacyBehavior>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products" legacyBehavior>
                    <a>Products</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about" legacyBehavior>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" legacyBehavior>
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>
                  <i className="fas fa-envelope" /> contact@nybotech.cloud
                </li>
                <li>
                  <i className="fas fa-phone" /> +60 11-2209 2680
                </li>
                <li>
                  <i className="fas fa-map-marker-alt" /> Malaysia
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 NYBOTECH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

