import React, { useState } from "react";
import styles from "styles/contact.module.css";
import "animate.css";
import { HeadingText } from "components/lv2/HeadingText";
import { Section } from "components/lv1/Section";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email:'', message:''});
  const [status, setStatus] = useState<string>('');

  const handleChange = (e:any) => {
    const { name, value} = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value}
    ));
  }
  const handleSendMessage = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.status === 200) {
      setStatus('Message sent successfully');
    } else {
      setStatus('Failed to send message');
    }
  };

  return (
    <Section sectionStyle={styles.section} id="contact">
      <div className={styles.container}>
        <HeadingText heading={"Get in touch"} headingStyle={styles.heading} />
        <form className={styles.contactForm} onSubmit={handleSendMessage}>
          <label className={styles.label} htmlFor="name">
            Name
            <input
              className={styles.input}
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
            />
          </label>
          <label className={styles.label} htmlFor="email">
            Email
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
            />
          </label>
          <label className={styles.label} htmlFor="message">
            Message
            <textarea
              className={`${styles.input} ${styles.message}`}
              cols={30}
              rows={5}
              value={formData.message}
            ></textarea>
          </label>

          <button type="submit" className={styles.button} onClick={handleSendMessage}>
            Send Message
          </button>
        </form>

        {status && <p>{status}</p>}
      </div>
    </Section>
  );
};
