import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import {
  collection,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore/lite";
import { logo } from "../assets";

export const Login = ({ role }) => {
  const navigate = useNavigate();
  const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 charcaters long." }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(AuthCredentialsValidator) });

  const onSubmit = async ({ email, password }) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials?.user;
      if (user?.emailVerified == true) {
        const data = (
          await getDocs(
            query(
              collection(db, "users"),
              where("userId", "==", user.uid),
              where("role", "==", role),
              limit(1)
            )
          )
        ).docs;
        if (data.length == 0) {
          throw new Error(`Cannot login as ${role}`);
        }
        navigate(`/${role}/dashboard`);
      } else {
        await sendEmailVerification(user);
        navigate(`/verify-email?to=${email}`);
      }
    } catch (error) {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };
  return (
    //   <div>{errors?.email?.toString()}</div>
    <div className="grid grid-cols-1 container mx-auto py-7 min-h-screen place-items-center px-6">
      <form
        className="flex flex-col gap-10 max-w-full w-[28rem] text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="flex justify-center">
          <Link href="/">
            <img src={logo} className="h-12" alt="Logo" />
          </Link>
        </p>
        <div className="flex flex-col gap-1.5">
          <h2 className="text-lg text-gray-600">Sign in to your account</h2>
          <h6 className="text-base text-[var(--primary)]">
            <Link to={`/${role}/signup`}>
              Do not have an account? Register.
            </Link>
          </h6>
        </div>
        <div className="flex flex-col gap-3">
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="input"
            placeholder="you@example.com"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            id="password"
            name="password"
            required
            className="input"
          />
        </div>
        <button className="btn-default w-full">Sign in</button>
      </form>
    </div>
  );
};
