"use client";
import React from "react";
import Image from "next/image";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";

const ContactPage = () => {
  return (
    <div style={{ padding: "2.5rem 1.25rem" }}>
      <h1
        style={{ textAlign: "center", fontWeight: "800", fontSize: "1.5rem" }}
      >
        Get In Touch With Us
      </h1>
      <p style={{ textAlign: "center", color: "#4B5563", marginTop: "0.5rem" }}>
        For more information about our products & services, please feel free to
        drop us an email. Our staff is always here to help you out. Do not
        hesitate.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          marginTop: "2.5rem",
        }}
      >
        {/* Left Side - Contact Details */}
        <div style={{ width: "50%", marginBottom: "1.5rem" }}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1.125rem",
              }}
            >
              <FaLocationDot color="#06B6D4" />
              <strong>Address:</strong>
            </div>
            <p style={{ color: "#4B5563" }}>
              236 5th SE Avenue, New York, NY10000
            </p>
            <p style={{ color: "#4B5563" }}>United States</p>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1.125rem",
              }}
            >
              <FaPhone color="#06B6D4" />
              <strong>Phone:</strong>
            </div>
            <p style={{ color: "#4B5563" }}>Mobile: +(84) 546-6789</p>
            <p style={{ color: "#4B5563" }}>Hotline: +(84) 546-6789</p>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1.125rem",
              }}
            >
              <BiSolidTimeFive color="#06B6D4" />
              <strong>Working Time:</strong>
            </div>
            <p style={{ color: "#4B5563" }}>Mon-Fri: 9:00-22:00</p>
            <p style={{ color: "#4B5563" }}>Saturday-Sunday: 9:00-21:00</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div style={{ width: "50%" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.25rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
            }}
          >
            Contact Form
          </h2>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  color: "#374151",
                  marginBottom: "0.25rem",
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  width: "100%",
                  border: "1px solid #D1D5DB",
                  borderRadius: "0.375rem",
                  padding: "0.5rem",
                  outlineColor: "#06B6D4",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  color: "#374151",
                  marginBottom: "0.25rem",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  width: "100%",
                  border: "1px solid #D1D5DB",
                  borderRadius: "0.375rem",
                  padding: "0.5rem",
                  outlineColor: "#06B6D4",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  color: "#374151",
                  marginBottom: "0.25rem",
                }}
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                style={{
                  width: "100%",
                  border: "1px solid #D1D5DB",
                  borderRadius: "0.375rem",
                  padding: "0.5rem",
                  outlineColor: "#06B6D4",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  color: "#374151",
                  marginBottom: "0.25rem",
                }}
              >
                Message
              </label>
              <textarea
                placeholder="Message"
                style={{
                  width: "100%",
                  border: "1px solid #D1D5DB",
                  borderRadius: "0.375rem",
                  padding: "0.5rem",
                  outlineColor: "#06B6D4",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#06B6D4",
                color: "white",
                padding: "0.5rem",
                borderRadius: "0.375rem",
                transition: "background-color 0.3s",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Centered Image */}
      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <Image
          src="/Frame 161 (1).png"
          alt="Contact Illustration"
          width={1320}
          height={270}
          style={{ margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default ContactPage;
