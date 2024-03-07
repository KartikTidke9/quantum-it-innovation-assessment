import { useState } from "react";
import Divider from "../components/Divider";
import Input from "../components/Input";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_SERVER_BASE_API_V1;

export default function Registration() {
  // hooks init
  const navigate = useNavigate();

  //state for storing api state
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [errorLoadingRegister, setErrorLoadingRegister] = useState(null);
  //state for form user data
  const [userData, setUserData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  //on form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.values(userData).length) return;

    try {
      setLoadingRegister(true);
      const response = await axios.post(`${baseUrl}/user/register`, userData);

      if (!response.data.error) {
        const user = JSON.stringify(response.data);
        localStorage.setItem("user", user);
        navigate("/", { replace: true });
      }
    } catch (err) {
      setErrorLoadingRegister(err.response.data.error);
    } finally {
      setLoadingRegister(false);
    }
  };
  return (
    <div className="cgradient container">
      <div className="col-4 position-absolute border-primary top-50 start-50 translate-middle">
        <div className="container cbg-dark px-5 py-4 rounded-2">
          {/* heading */}
          <h1 className="col-4 fw-bold rounded-pill offset-4 text-center fs-4 p-3 text-uppercase ctext-secondary">
            Sign Up
          </h1>

          {/* profile pic */}
          <div className="col-12 d-flex justify-content-center align-items-center flex-column py-3">
            <img
              src="/icons/profile_pic.svg"
              className="rounded-circle col-4"
              alt="profile"
            />
            <Divider height={"1px"} bgColor="cbg-tertiary" />
          </div>

          {/* form */}
          <form
            className="container d-flex justify-content-center align-items-center align-items-start gap-3 flex-column"
            onSubmit={handleSubmit}
          >
            {/* input fields */}
            {/* Name */}
            <div className="row col-12">
              <Input
                placeholder={"Name"}
                type="text"
                icon={"/icons/person.svg"}
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </div>
            {/* date */}
            <div className="row col-12">
              <Input
                placeholder={"date"}
                type="date"
                icon={"/icons/cake.svg"}
                value={userData.dob}
                onChange={(e) =>
                  setUserData({ ...userData, dob: e.target.value })
                }
              />
            </div>
            {/* email */}
            <div className="row col-12">
              <Input
                placeholder={"Email"}
                type="email"
                icon={"/icons/email.svg"}
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>
            {/* password */}
            <div className="row col-12">
              <Input
                placeholder={"Password"}
                type="password"
                icon={"/icons/lock.svg"}
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>

            {/* //server side errors */}
            <div className="text-danger justify-self-start col-10">
              {errorLoadingRegister && errorLoadingRegister}
            </div>

            {/* actions */}
            <div className="ctext-secondary fw-bold row col-12 d-flex flex-column justify-content-center align-items-center hover">
              {/* navigate to login page */}
              <div className="d-flex gap-2">
                <p className="text-white">Already have an account?</p>
                <Link
                  to="/login"
                  className="text-uppercase ctext-secondary text text-decoration-none"
                >
                  Login
                </Link>
              </div>
              {/* showing indicator on loading */}
              {loadingRegister ? (
                <div className="spinner-border ctext-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <button
                  type="submit"
                  className="cbg-primary fw-bold col-8 rounded-3 fs-6 p-3 text-uppercase ctext-secondary"
                >
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
