import Head from 'next/head';
import Layout from '../components/Layout';

export default function CartPage() {
  return (
    <Layout>
      <Head>
        <title>Shopping Cart - NYBOTECH</title>
        <meta name="description" content="View your NYBOTECH shopping cart" />
      </Head>

      <section className="page-header">
        <div className="container">
          <h1>Shopping Cart</h1>
        </div>
      </section>

      <section className="cart-section">
        <div className="container">
          <div className="cart-empty">
            <i className="fas fa-shopping-cart" />
            <h2>Your cart is empty</h2>
            <p>Start shopping to add items to your cart</p>
            <a href="/products" className="btn btn-primary">
              Browse Products
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

