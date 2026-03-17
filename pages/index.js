import Head from 'next/head';
import Layout from '../components/Layout';
import { products } from '../data/products';

export default function Home() {
  const featured = products.slice(0, 6);

  return (
    <Layout>
      <Head>
        <title>NYBOTECH - Medical Technology Solutions</title>
        <meta
          name="description"
          content="NYBOTECH - Leading Medical Technology Solutions and Equipment"
        />
      </Head>

      <section className="hero">
        <div className="hero-content">
          <h1>Advanced Medical Technology Solutions</h1>
          <p>Leading provider of innovative medical equipment and healthcare technology</p>
          <div className="hero-buttons">
            <a href="/products" className="btn btn-primary">
              Browse Products
            </a>
            <a href="/contact" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose NYBOTECH</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-certificate" />
              <h3>Certified Quality</h3>
              <p>All products meet international medical standards and certifications</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shipping-fast" />
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to healthcare facilities worldwide</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-headset" />
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support for all your medical equipment needs</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shield-alt" />
              <h3>Secure &amp; Trusted</h3>
              <p>Secure transactions and trusted partnerships with healthcare providers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featured.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="product-img" />
                  ) : (
                    <div className="product-img-placeholder" />
                  )}
                </div>
                <div className="product-info">
                  <div className="product-category">{product.category}</div>
                  <div className="product-name">{product.name}</div>
                  <div className="product-description">{product.description}</div>
                  <div className="product-footer">
                    <div className="product-price">${product.price.toFixed(2)}</div>
                    <button
                      className="add-to-cart"
                      type="button"
                      onClick={() => alert(`${product.name} added to cart (demo).`)}
                    >
                      <i className="fas fa-cart-plus" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/products" className="btn btn-primary">
              View All Products
            </a>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Innovation in Medical Technology</h2>
              <p>
                NYBOTECH is committed to providing cutting-edge medical equipment and technology
                solutions to healthcare professionals worldwide. With years of experience in the
                medical industry, we understand the critical importance of reliable, high-quality
                equipment.
              </p>
              <p>
                Our comprehensive product range includes diagnostic equipment, monitoring devices,
                surgical instruments, and more, all designed to meet the highest standards of
                medical excellence.
              </p>
              <a href="/about" className="btn btn-primary">
                Learn More
              </a>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1606206873764-fd15e242df52?auto=format&fit=crop&w=1600&q=70"
                alt="Hospital"
                className="about-hospital-image"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

