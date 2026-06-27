import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Swal from "sweetalert2";

const RequirementPopup = () => {
  const [open, setOpen] = useState(false);
  const reopenTimer = useRef(null);
useEffect(() => {
  const submitted = localStorage.getItem(
    "requirementFormSubmitted"
  );

  if (submitted === "true") {
    return;
  }

  const timer = setTimeout(() => {
    setOpen(true);
  }, 8000);

  return () => clearTimeout(timer);
}, []);

  const handleClose = () => {
    setOpen(false);

    if (reopenTimer.current) {
      clearTimeout(reopenTimer.current);
    }

    reopenTimer.current = setTimeout(() => {
      setOpen(false);
    }, 30000);
  };

  // ✅ UPDATED SUBMIT FUNCTION WITH WEB3FORMS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const assistance = formData.getAll("assistance").join(", ");

const data = {
  name: formData.get("name"),
  email: formData.get("email"),
  phone: formData.get("phone"),
  college: formData.get("college"),
  city: formData.get("city"),
  about: formData.get("about"),
  assistance,
  other: formData.get("other"),
  remark: formData.get("remark"),
};
    console.log("Form Submitted:", data);

    // ❌ validation
    if (
  !data.name ||
  !data.email ||
  !data.phone ||
  !data.college ||
  !data.city
) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Please fill all required fields!",
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

    // ✅ Send Email via Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
       body: JSON.stringify({
  access_key: "302edd1b-2152-4e17-b588-b73282a95a48",
  subject: "New Student Requirement Lead",

  ...data,
}),
      });

      const result = await response.json();
      console.log("Web3Forms Response:", result);
    } catch (error) {
      console.error("Mail Error:", error);
    }

    localStorage.setItem("requirementFormSubmitted", "true");
    // ✅ popup band karo
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
  const url = "https://wa.me/918796449760";

setTimeout(() => {
  window.open(url, "_blank");
}, 5000);

e.target.reset();

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

  <div>
    <label style={styles.label}>Full Name *</label>
    <input
      type="text"
      name="name"
      style={styles.input}
      required
    />
  </div>

  <div>
    <label style={styles.label}>Email Address *</label>
    <input
      type="email"
      name="email"
      style={styles.input}
      required
    />
  </div>

  <div>
    <label style={styles.label}>Phone Number *</label>
    <input
      type="tel"
      name="phone"
      style={styles.input}
      required
    />
  </div>

  <div>
    <label style={styles.label}>University / Location *</label>
    <input
      type="text"
      name="college"
      style={styles.input}
      required
    />
  </div>

  <div>
    <label style={styles.label}>Preferred City *</label>
    <input
      type="text"
      name="city"
      style={styles.input}
      required
    />
  </div>

  <div>
    <label style={styles.label}>How did you hear about us?</label>
    <input
      type="text"
      name="about"
      style={styles.input}
    />
  </div>

  <div style={{ gridColumn: "1 / -1" }}>
    <label style={styles.label}>
      What assistance do you require?
    </label>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        marginTop: "10px",
      }}
    >
      <label><input type="checkbox" name="assistance" value="Accommodation" /> Accommodation</label>

      <label><input type="checkbox" name="assistance" value="Admission" /> Admission</label>

      <label><input type="checkbox" name="assistance" value="Flight Tickets" /> Flight Tickets</label>

      <label><input type="checkbox" name="assistance" value="International Money Transfer" /> International Money Transfer</label>

      <label><input type="checkbox" name="assistance" value="Airport Pickup" /> Airport Pickup</label>

      <label><input type="checkbox" name="assistance" value="Guarantor" /> Guarantor</label>

      <label><input type="checkbox" name="assistance" value="Sim Card" /> Sim Card</label>

      <label><input type="checkbox" name="assistance" value="Room Essentials" /> Room Essentials</label>

      <label>
        <input
          type="checkbox"
          name="assistance"
          value="Free Counseling session with university Alumni"
        />
        Alumni Counseling
      </label>
    </div>
  </div>

  <div style={{ gridColumn: "1 / -1" }}>
    <label style={styles.label}>Other Requirement</label>
    <input
      type="text"
      name="other"
      style={styles.input}
    />
  </div>

  <div style={{ gridColumn: "1 / -1" }}>
    <label style={styles.label}>Additional Information</label>
    <textarea
      name="remark"
      rows="4"
      style={{
        ...styles.input,
        resize: "vertical",
      }}
    />
  </div>

  <button
    type="submit"
    style={{
      ...styles.submitBtn,
      gridColumn: "1 / -1",
    }}
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
    inset: 0,
    zIndex: 99999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(15, 23, 42, 0.75)",
    backdropFilter: "blur(6px)",
    padding: "20px",
  },

  modal: {
  background: "#ffffff",
  borderRadius: "20px",
  width: "100%",
  maxWidth: "650px", // 850 se 650
  maxHeight: "80vh",
  overflowY: "auto",
  padding: "24px",
  position: "relative",
  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
},
  closeButton: {
    position: "absolute",
    top: "18px",
    right: "18px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "none",
    background: "#f3f4f6",
    color: "#374151",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s",
  },

  title: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "8px",
    lineHeight: "1.2",
  },

  subtitle: {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "25px",
  },

  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
  },

  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
  },

  input: {
    width: "100%",
    padding: "10px 8px",
    border: "1px solid #dbe3ee",
    borderRadius: "12px",
    fontSize: "15px",
    background: "#fafbfd",
    outline: "none",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    padding: "14px 16px",
    border: "1px solid #dbe3ee",
    borderRadius: "12px",
    fontSize: "15px",
    background: "#fafbfd",
    outline: "none",
    resize: "vertical",
    minHeight: "120px",
    boxSizing: "border-box",
  },

  assistanceBox: {
    gridColumn: "1 / -1",
    padding: "18px",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    background: "#f9fafb",
  },

  checkboxGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
    marginTop: "12px",
  },

  checkbox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "#374151",
    cursor: "pointer",
  },

  submitBtn: {
    gridColumn: "1 / -1",
    background:
      "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    padding: "16px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "10px",
    boxShadow: "0 10px 25px rgba(37,99,235,0.25)",
  },

  sectionTitle: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "10px",
  },
};

export default RequirementPopup;