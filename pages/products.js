import Head from 'next/head';
import Layout from '../components/Layout';
import { products } from '../data/products';

export default function ProductsPage() {
  return (
    <Layout>
      <Head>
        <title>Products - NYBOTECH</title>
        <meta
          name="description"
          content="Browse our comprehensive range of medical equipment and technology"
        />
      </Head>

      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Comprehensive medical equipment and technology solutions</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="products-filter">
            <button className="filter-btn active" type="button">
              All Products
            </button>
          </div>
          <div className="products-grid">
            {products.map((product) => (
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
        </div>
      </section>
    </Layout>
  );
}

