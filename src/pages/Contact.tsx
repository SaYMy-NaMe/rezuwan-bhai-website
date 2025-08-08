import React, { useState } from 'react';
import PageTitle from '../components/sections/PageTitle';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: 'bi bi-geo-alt',
      title: 'Address',
      content: 'Khilgaon, Dhaka-1219, Bangladesh',
      link: null
    },
    {
      icon: 'bi bi-telephone',
      title: 'Call/WhatsApp',
      content: '+8801735066946',
      link: 'tel:+8801735066946'
    },
    {
      icon: 'bi bi-envelope',
      title: 'Email',
      content: 'rezwanhasan262@gmail.com',
      link: 'mailto:rezwanhasan262@gmail.com'
    },
    {
      icon: 'bi bi-linkedin',
      title: 'LinkedIn',
      content: 'md-rezuwan-hasan-04246416b',
      link: 'https://www.linkedin.com/in/md-rezuwan-hasan-04246416b/'
    }
  ];

  const socialLinks = [
    {
      icon: 'bi bi-facebook',
      title: 'Facebook',
      link: 'https://www.facebook.com/listener.rezwan.1'
    },
    {
      icon: 'bi bi-linkedin',
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/md-rezuwan-hasan-04246416b/'
    },
    {
      icon: 'bi bi-github',
      title: 'GitHub',
      link: 'https://github.com/RezuwanHassan262'
    },
    {
      icon: 'fab fa-google-scholar',
      title: 'Google Scholar',
      link: 'https://scholar.google.com/citations?user=ZUrWZhQAAAAJ&hl=en'
    },
    {
      icon: 'fa-solid fa-robot',
      title: 'Hugging Face',
      link: 'https://huggingface.co/Rezuwan'
    },
    {
      icon: 'fab fa-kaggle',
      title: 'Kaggle',
      link: 'https://www.kaggle.com/mdrezuwanhassan'
    }
  ];

  return (
    <>
      <PageTitle 
        title="Contact"
        description="Feel free to reach out to me for any inquiries, collaborations, or just to say hello! I'm always open to new opportunities and connections."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact' }
        ]}
      />
      
      <section className="contact section">
        <div className="container">
          <div className="row gy-5">
            {/* Contact Information */}
            <div className="col-lg-5">
              <div className="contact-info" data-aos="fade-up">
                <h3 className="contact-title">Get In Touch</h3>
                <p className="contact-description">
                  I'm always open to discussing new opportunities, interesting projects, creative ideas, or opportunities to be part of your visions.
                </p>
                
                <div className="contact-items">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="contact-item" data-aos="fade-up" data-aos-delay={index * 100}>
                      <div className="contact-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="contact-details">
                        <h4>{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.content}
                          </a>
                        ) : (
                          <p>{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="social-links-section" data-aos="fade-up" data-aos-delay="400">
                  <h4>Follow Me</h4>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        title={social.title}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-form" data-aos="fade-up" data-aos-delay="200">
                <h3 className="form-title">Send Message</h3>
                <form onSubmit={handleSubmit} className="contact-form-content">
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group message-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={8}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-group submit-group">
                    <button type="submit" className="submit-btn">
                      <i className="bi bi-send"></i>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 