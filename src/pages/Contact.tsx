import React, { useState } from 'react';
import PageTitle from '../components/sections/PageTitle';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  alt: string;
  height: string;
  width: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/md-rezuwan-hassan/",
      icon: "https://raw.githubusercontent.com/RezuwanHassan262/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg",
      alt: "LinkedIn Link",
      height: "30",
      width: "40"
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=ZUrWZhQAAAAJ&hl=en",
      icon: "https://user-images.githubusercontent.com/556268/96353342-3f386c80-10cb-11eb-9865-0c40dfe6ab8b.png",
      alt: "Google Scholar Link",
      height: "40",
      width: "40"
    },
    {
      name: "GitHub",
      url: "https://github.com/RezuwanHassan262",
      icon: "https://raw.githubusercontent.com/RezuwanHassan262/github-profile-readme-generator/master/src/images/icons/Social/github.svg",
      alt: "GitHub Link",
      height: "30",
      width: "40"
    },
    {
      name: "Hugging Face",
      url: "https://huggingface.co/Rezuwan",
      icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      alt: "Hugging Face",
      height: "30",
      width: "30"
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/mdrezuwanhassan",
      icon: "https://raw.githubusercontent.com/RezuwanHassan262/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg",
      alt: "Kaggle Link",
      height: "30",
      width: "40"
    }
  ];

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
      content: 'md-rezuwan-hassan/',
      link: 'https://www.linkedin.com/in/md-rezuwan-hassan/'
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
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        title={social.name}
                      >
                        <img 
                          src={social.icon} 
                          alt={social.alt} 
                          height={social.height} 
                          width={social.width}
                        />
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