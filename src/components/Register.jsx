import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const Register = () => {
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

  const onSubmit = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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
