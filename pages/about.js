import Head from 'next/head';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Us - NYBOTECH</title>
        <meta
          name="description"
          content="Learn about NYBOTECH - Leading Medical Technology Solutions"
        />
      </Head>

      <section className="page-header">
        <div className="container">
          <h1>About NYBOTECH</h1>
          <p>Innovation and Excellence in Medical Technology</p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-main">
            <div className="about-text-content">
              <h2>Our Mission</h2>
              <p>
                NYBOTECH is dedicated to advancing healthcare through innovative medical technology
                solutions. We partner with healthcare providers worldwide to deliver reliable,
                cutting-edge equipment that improves patient care and outcomes.
              </p>

              <h2>Our Vision</h2>
              <p>
                To be the global leader in medical technology distribution, recognized for our
                commitment to quality, innovation, and exceptional customer service. We strive to
                make advanced medical equipment accessible to healthcare facilities of all sizes.
              </p>

              <h2>Our Values</h2>
              <ul className="values-list">
                <li>
                  <i className="fas fa-check-circle" /> <strong>Quality First:</strong> Every
                  product meets the highest international standards
                </li>
                <li>
                  <i className="fas fa-check-circle" /> <strong>Innovation:</strong> Continuously
                  seeking the latest advancements in medical technology
                </li>
                <li>
                  <i className="fas fa-check-circle" /> <strong>Reliability:</strong> Trusted
                  partnerships with healthcare providers worldwide
                </li>
                <li>
                  <i className="fas fa-check-circle" /> <strong>Customer Focus:</strong> Dedicated
                  support for all your medical equipment needs
                </li>
                <li>
                  <i className="fas fa-check-circle" /> <strong>Integrity:</strong> Transparent and
                  ethical business practices
                </li>
              </ul>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-card">
              <i className="fas fa-hospital" />
              <h3>500+</h3>
              <p>Healthcare Partners</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-box" />
              <h3>100+</h3>
              <p>Products Available</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-globe" />
              <h3>15+</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-users" />
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

