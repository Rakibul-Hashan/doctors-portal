import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [seePassword, setSeePassword] = useState(true);
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpErr, setSignUpErr] = useState("");
  const navigate = useNavigate();
  // since the email needs for the useToken hook
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  if (token) {
    navigate("/");
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignUp = (data) => {
    setSignUpErr("");
    createUser(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        toast.success("User Created successfully!");
        const userInfo = {
          displayName: data.fName, // data comes from React Hook form
        };
        // updating display name
        updateUser(userInfo)
          .then(() => {
            saveUser(data.fName, data.email);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err.message);
        setSignUpErr(err.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch(`https://doctors-portal-server-iota-plum.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className=" lg:w-[530px] justify-center items-center mx-auto shadow-[3px_4px_10px_2px_#0000000d] rounded-xl  p-9">
        <p className="text-center text-xl">Sign Up</p>
        {/* form start */}
        <form
          className="card-body p-0 mx-auto"
          onSubmit={handleSubmit(handleSignUp)}
        >
          {/* fName */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type={"text"}
              {...register("fName", {
                required: "Please write your full name",
              })}
              placeholder="Full Name"
              className="input input-bordered"
            />
            {errors.fName?.type === "required" && (
              <p className="text-error">First name is required</p>
            )}
          </div>
          {/* Email end */}
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type={"email"}
              {...register("email", { required: "Please use a valid mail" })}
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          {/* Email end */}
          {/* password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={seePassword ? "text" : "password"}
              {...register("password", {
                required: true,
                minLength: {
                  value: 5,
                  message: "Password must be 6 characters or longer",
                },
                pattern: {
                  value:
                    /(?=.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])/,
                  message: "Password must be strong",
                },
              })}
              placeholder="Password"
              className="input input-bordered"
            />

            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
            <span
              onClick={() => setSeePassword(!seePassword)}
              className="hover:cursor-pointer absolute top-[60%] right-3 text-xl text-gray-400"
            >
              {seePassword ? (
                <AiFillEyeInvisible></AiFillEyeInvisible>
              ) : (
                <AiFillEye></AiFillEye>
              )}
            </span>
          </div>
          {/* error message */}
          {signUpErr && <p className="text-warning">{signUpErr}</p>}
          {/* password end */}

          <div className="form-control mt-2">
            <input className="btn btn-accent" type="submit" value={"Sign Up"} />
          </div>
        </form>
        {/*  */}
        <div className="">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="btn-link text-secondary">
              Login
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

export default SignUp;
