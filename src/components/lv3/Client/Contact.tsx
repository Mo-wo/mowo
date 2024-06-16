import React, { useState } from "react";
import styles from "styles/contact.module.css";
import "animate.css";
import { HeadingText } from "components/lv2/HeadingText";
import { Section } from "components/lv1/Section";
import {sendEmail} from 'utils/sendEmail';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email:'', message:''});
  const [btnText, setBtnText] = useState<string>('Send Message')
  const textRegex = /^[A-Za-z\s-]+$/i;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,}(?:\.[A-Z]{2,})?$/i;
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [messageError, setMessageError] = useState<string>('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBtnText('Send Message');
    const { name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const clearErrors = () => {
    setNameError('');
    setEmailError('');
    setMessageError('');
  }

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    clearErrors();
    let _name = formData.name.trim();
    let _email = formData.email.trim();
    let _message = formData.message.trim();

    const isValid = validateForm({
      name: _name,
      email: _email,
      message: _message
    });

    if (isValid) {
      sendMessage();
    }
  }

  const validateForm = (formData: { name: any; email: any; message: any; }) => {
    let valid = true;

      if(!formData.name) {
        setNameError('Please input your name');
        valid = false;
      } else if(!textRegex.test(formData.name) || formData.name.length < 2) {
        setNameError('Please input a valid name');
        valid = false;
      } 

      if(!formData.email) {
        setEmailError('Please input your email address');
        valid = false;
      } else if(!emailRegex.test(formData.email)) {
        setEmailError('Please input a valid email address');
        valid = false;
      }

      if(!formData.message) {
        setMessageError('Please input a message');
        valid = false;
      }

      return valid;
  }

  const sendMessage = () => {
    setBtnText('Sending...');

    try {
      sendEmail(formData);
      setBtnText('Message sent!');
    } catch (error) {
      console.error('Failed to send message:', error);
      setBtnText('Failed to send message');
    }
}


  return (
    <Section sectionStyle={styles.section} id="contact">
      <div className={styles.container}>
        <HeadingText heading={"Get in touch"} headingStyle={styles.heading} />
        <form className={styles.contactForm} onSubmit={handleSendMessage}>
          <>
          <label className={styles.label} htmlFor="name">
            Name
            <input
              className={styles.input}
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        <p className={styles.errorText}>{nameError}</p>

          </>

          <>
          <label className={styles.label} htmlFor="email">
            Email
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <p className={styles.errorText}>{emailError}</p>

</>

<>
          <label className={styles.label} htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              className={`${styles.input} ${styles.message}`}
              cols={30}
              rows={5}
              value={formData.message}
              onChange={handleChange}
              />
          </label>
          <p className={styles.errorText}>{messageError}</p>

</>

          <button type="submit" className={styles.button} onClick={handleSendMessage}>
            {btnText}
          </button>
        </form>

      </div>
    </Section>
  );
};
