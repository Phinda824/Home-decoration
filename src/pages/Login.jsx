import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import Loading from "../conponents/Loading/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log(user);
      setLoading(false);
      toast.success("Successfully logged in");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="login_container">
      {loading ? (
        <div className="cont">
          <Loading />
        </div>
      ) : (
        <div className="login_section">
          <h1>Login</h1>
          <div className="line">
            <p></p>
          </div>

          <form className="login_form" onSubmit={signIn}>
            <div className="form_sect">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form_sect">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login_btn">
              Login
            </button>

            <p>
              Don't have an account?{" "}
              <Link to="/signup"> Create an Account</Link>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
