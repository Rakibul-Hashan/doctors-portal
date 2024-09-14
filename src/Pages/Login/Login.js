import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const location = useLocation();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "";
  const { login, user, setUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

useEffect(()=>{
  if (token) {
    navigate(from, { replace: true });
  }
},[])

  const handleLogin = (data) => {
    setLoginError("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        setLoginUserEmail(data.email);
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-xl justify-center items-center mx-auto shadow-lg rounded-xl pb-10">
        <p className="text-center text-xl">Login</p>
        {/*  */}
        <form
          className="card-body mx-auto"
          onSubmit={handleSubmit(handleLogin)}
        >
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type={"email"}
              {...register("email", { required: "Please enter a valid Email" })}
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          {/* Email end */}
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={"password"}
              {...register("password", {
                required: "Please use a valid password",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
          </div>

          {/* password end */}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>

          <div className="form-control mt-2">
            <input className="btn btn-accent" type="submit" value={"Login"} />
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        {/*  */}
        <div className="px-10">
          <p className="text-sm">
            New to Doctors Portal?{" "}
            <Link to={"/signup"} className="btn-link text-secondary">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Login;
