import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Swal from "sweetalert2"; // ✅ add this

const RequirementPopup = () => {
  const [open, setOpen] = useState(false);
  const reopenTimer = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);

    if (reopenTimer.current) {
      clearTimeout(reopenTimer.current);
    }

    reopenTimer.current = setTimeout(() => {
      setOpen(true);
    }, 15000);
  };

  // ✅ UPDATED SUBMIT FUNCTION
const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    city: formData.get("city"),
  };

  console.log("Form Submitted:", data);

  // ❌ validation
  if (!data.name || !data.phone || !data.city) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all fields!",
    });
    return;
  }

  if (!/^[0-9]{10}$/.test(data.phone)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Number",
      text: "Enter valid 10 digit phone number",
    });
    return;
  }

  // ✅ popup band karo (immediate)
  setOpen(false);

  // ✅ success alert
  Swal.fire({
    icon: "success",
    title: "Submitted Successfully 🎉",
    text: "Redirecting to WhatsApp...",
    timer: 5000,
    showConfirmButton: false,
  });

  // ✅ WhatsApp message
  const msg = `Hello Acadomo,

New Lead Details:

Name: ${data.name}
Phone: ${data.phone}
City: ${data.city}`;

  const url = `https://wa.me/917302244122?text=${encodeURIComponent(msg)}`;

  // ⏱️ thoda delay (alert dikhe fir open ho)
  setTimeout(() => {
    window.open(url, "_blank");
  }, 9000);

  // reset form
  e.target.reset();
};

  if (!open) return null;

  return createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>

        <button onClick={handleClose} style={styles.closeButton}>
          ✕
        </button>

        <div style={{ marginBottom: "20px" }}>
          <h2 style={styles.title}>Tell Us Your Requirement</h2>
          <p style={styles.subtitle}>
            Get the best accommodation suggestions based on your specific needs.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="name" placeholder="Your Name" style={styles.input} required />
          <input name="phone" placeholder="Phone Number" style={styles.input} required />
          <input name="city" placeholder="Preferred City" style={styles.input} required />

          <button type="submit" style={styles.submitBtn}>
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
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "400px",
    padding: "24px",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "16px",
    right: "16px",
    fontSize: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "14px",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  submitBtn: {
    background: "#007BFF",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
  },
};

export default RequirementPopup;