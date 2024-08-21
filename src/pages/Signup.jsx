import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import Loading from "../conponents/Loading/Loading";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              //update user profile
              displayName: username,
              photoURL: downloadURL,
            });

            //stor user data in firestore database
            await setDoc(doc(db, "user", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("Account Created");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
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
          <h1>Signup</h1>
          <div className="line">
            <p></p>
          </div>

          <form className="login_form" onSubmit={signup}>
            <div className="form_sect">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

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

            <div className="file_sect">
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>

            <button type="submit" className="login_btn">
              Create an Account
            </button>

            <p>
              Already have an account? <Link to="/login"> Login</Link>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Signup;
