'use client'
import React, { useState } from 'react';
import {SendUrl} from '@/app/(tabs)/login/send-login-info'
import Header from '@/app/compoents/header';

export default function Register() {
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '', // Note: Consider security implications
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value,
      }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      SendUrl(formData)
          .then((result) => {
              console.log(result); // Process success response
          })
          .catch((error) => {
              console.error("Error:", error); // Handle errors
          });
  };

  return (
    <>
    <Header/>
      <h2>Create User Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
