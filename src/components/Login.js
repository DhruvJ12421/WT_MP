import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://localhost:3001/login"
      : "http://localhost:3001/signup";

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        if (isLogin) {
          localStorage.setItem("userName", formData.username);
          navigate("/Menu");
        } else {
          setIsLogin(true);
          setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        }
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage:
          "url('https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148703851.jpg')",
        backgroundSize: "cover",
        animation: "backgroundZoom 15s infinite alternate",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          animation: "fadeIn 2s ease-out",
        }}
      >
        <h2 style={{ color: "#0066cc", fontFamily: "Arial, sans-serif" }}>
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          {!isLogin && (
            <>
              <label htmlFor="username" style={styles.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </>
          )}
          <label htmlFor="email" style={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          {!isLogin && (
            <>
              <label htmlFor="confirmPassword" style={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </>
          )}
          <button type="submit" style={styles.button}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
            }}
            style={{
              color: "#0066cc",
              fontWeight: "bold",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

const styles = {
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "8px",
    display: "block",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    background: "linear-gradient(to right, #0066cc, #00aaff)",
    border: "none",
    color: "#fff",
    padding: "12px 20px",
    fontSize: "18px",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
  },
};
// Keyframes for animation

const globalStyles = `

  @keyframes backgroundZoom {

    0% { background-size: 100%; }

    100% { background-size: 120%; }

  }



  @keyframes fadeIn {

    0% { opacity: 0; }

    100% { opacity: 1; }

  }



  input:focus {

    border-color: #0066cc;

    box-shadow: 0 0 5px rgba(0, 102, 204, 0.6);

  }



  button:hover {

    background: linear-gradient(to right, #00aaff, #0066cc);

  }

`;



document.head.insertAdjacentHTML("beforeend", `<style>${globalStyles}</style>`);
export default LoginSignup;
