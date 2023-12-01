import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { useNavigate } from "react-router-dom";

export const Register = ({ role }) => {
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

  const createUser = async (userId) => {
    await addDoc(collection(db, "users"), {
      userId,
      role,
      timestamp: serverTimestamp(),
    });
  };

  const onSubmit = async ({ email, password }) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials?.user;
      await createUser(user.uid);
      await sendEmailVerification(user);
      navigate(`/verify-email?to=${email}`);
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
