import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddDoctor() {
  const [seePassword, setSeePassword] = useState(true);
  const [signUpErr, setSignUpErr] = useState("");
  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const { data: specialities, isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await fetch(`https://doctors-portal-server-iota-plum.vercel.app/appointmentSpeciality`);
      const data = await res.json();
      return data;
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate()
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.fName,
            email: data.email,
            speciality: data.speciality,
            image: imgData.data.url,
          };
          console.log(doctor);
          // save doctor information to database
          fetch(`https://doctors-portal-server-iota-plum.vercel.app/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged){
                toast.success(`${data.name} added successfully!`)
                navigate('/dashboard/managedoctors')
              } console.log(data);
            });
        }
      });
  };
  if (isLoading) {
    return;
  }
  return (
    <div className="w-96 p-7">
      <h2 className=" text-4xl">Add A Doctor</h2>
      <form
        className="card-body p-0 mx-auto"
        onSubmit={handleSubmit(handleAddDoctor)}
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
        {/* fName end */}
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
        {/* Specialty */}
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            type={"file"}
            {...register("speciality", {
              required: "Select a speciality",
            })}
            className="select select-bordered w-full max-w-xs"
          >
            {specialities.map((speciality) => (
              <option key={speciality._id} value={speciality?.name}>
                {speciality?.name}
              </option>
            ))}
          </select>
        </div>
        {/* error message */}
        {signUpErr && <p className="text-warning">{signUpErr}</p>}
        {/* Specialty end */}

        {/* image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type={"file"}
            {...register("image", {
              required: "Please write your full name",
            })}
            placeholder="image"
            className="input input-bordered"
          />
          {errors.image?.type === "required" && (
            <p className="text-error">First name is required</p>
          )}
        </div>
        {/* image end */}

        <div className="form-control mt-2">
          <input
            className="btn btn-accent"
            type="submit"
            value={"Add A Doctor"}
          />
        </div>
      </form>
    </div>
  );
}

export default AddDoctor;
