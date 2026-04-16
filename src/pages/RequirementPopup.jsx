// src/pages/RequirementPopup.jsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const RequirementPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); 

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      city: formData.get("city"),
    };

    console.log("Requirement Submitted:", data);

    handleClose();
  };

  if (!open) return null;

  return createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button
          onClick={handleClose}
          style={styles.closeButton}
          aria-label="Close"
          onMouseEnter={(e) => (e.target.style.color = "#333")}
          onMouseLeave={(e) => (e.target.style.color = "#999")}
        >
          ✕
        </button>

        <h2 style={styles.title}>Tell Us Your Requirement</h2>

        <p style={styles.subtitle}>
          Get the best accommodation suggestions based on your specific needs.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            style={styles.input}
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            style={styles.input}
          />
          <input
            type="text"
            name="city"
            required
            placeholder="Preferred City"
            style={styles.input}
          />

          <button
            type="submit"
            style={styles.submitBtn}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "1rem",
    transition: "opacity 0.3s ease",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "400px",
    padding: "24px",
    position: "relative",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    fontFamily: "Inter, sans-serif",
  },
  closeButton: {
    position: "absolute",
    top: "16px",
    right: "16px",
    fontSize: "20px",
    color: "#999",
    background: "none",
    border: "none",
    cursor: "pointer",
    transition: "color 0.2s ease",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#1a1a1a",
    margin: "0 0 8px 0",
  },
  subtitle: {
    color: "#666",
    marginBottom: "24px",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  input: {
    width: "100%",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
    color: "#333",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  },
  submitBtn: {
    width: "100%",
    backgroundColor: "#007BFF",
    color: "white",
    fontWeight: "500",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s ease",
    marginTop: "8px",
  },
};

export default RequirementPopup;
