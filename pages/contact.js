import Head from 'next/head';
import Layout from '../components/Layout';

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - NYBOTECH</title>
        <meta
          name="description"
          content="Contact NYBOTECH for medical equipment and technology inquiries"
        />
      </Head>

      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our products or services? We&apos;re here to help. Reach out to
                us through any of the following channels:
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope" />
                  <div>
                    <h4>Email</h4>
                    <p>contact@nybotech.cloud</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone" />
                  <div>
                    <h4>Phone</h4>
                    <p>+60 11-2209 2680</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt" />
                  <div>
                    <h4>Address</h4>
                    <p>Malaysia</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock" />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={5} required />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

