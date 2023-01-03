import { useState } from 'react';
import classes from './contact-form.module.css';

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={e => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={e => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={e => setEnteredMessage(e.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
