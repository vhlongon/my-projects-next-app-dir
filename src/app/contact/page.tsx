'use client';

import { useState } from 'react';

const ContactPage = () => {
  const [res, setRes] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    );

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { data } = await res.json();

    setRes(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Send</button>
      </form>
      {res && <p>{res}</p>}
    </div>
  );
};

export default ContactPage;
