import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore/lite";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>{errors?.email?.toString()}</div>
      <input
        type="email"
        placeholder="you@example.com"
        {...register("email")}
      />
      <div>{errors?.password?.toString()}</div>
      <input type="password" placeholder="Password" {...register("password")} />
      <button>Submit</button>
    </form>
  );
};
