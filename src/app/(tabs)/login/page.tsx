'use client'
import { useState } from "react";
import Header from "@/app/compoents/header";
import sendLoginInfo from "@/app/(tabs)/login/sendLoginInfo"

export default function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    isBusinessOwner: false,
    dateOfBirth: "",
    address: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        // Create an object with the login info
        const loginInfo = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          isBusinessOwner: formData.isBusinessOwner,
          dateOfBirth: formData.dateOfBirth,
          address: formData.address,
          bio: formData.bio
        };
        
        // Pass the login info object to the sendLoginInfo function
        sendLoginInfo(loginInfo);
    }

  // Updated styles for the form container and inputs to reflect the desired theme
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>Login Page</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px",color:"black" }}
        >
          <input
            style={{ padding: "10px", borderRadius: "5px" ,color:"black"}}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            style={{ padding: "10px", borderRadius: "5px" ,color:"black"}}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            style={{ padding: "10px", borderRadius: "5px",color:"black" }}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            style={{ padding: "10px", borderRadius: "5px",color:"black" }}
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <label style={{ display: "flex", alignItems: "center", gap: "10px",color:"black" }}>
            Is Business Owner:
            <input
              name="isBusinessOwner"
              type="checkbox"
              checked={formData.isBusinessOwner}
              onChange={handleChange}
            />
          </label>
          <input
            style={{ padding: "10px", borderRadius: "5px",color: "black" }}
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
            type="date"
          />
          <input
            style={{ padding: "10px", borderRadius: "5px" ,color:"black"}}
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <textarea
            style={{
              padding: "10px",
              borderRadius: "5px",
              color: "black", // Ensure text color contrasts against the background
              backgroundColor: "white", // Set a background color that contrasts with the text color
            }}
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Bio"
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#555",
              color: "white",
              border: "none",
            }}
          >
            Create User
          </button>
        </form>
      </div>
    </>
  );
}
