import React from "react";
import { useSearchParams } from "react-router-dom";

export const VerifyEmail = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  return <div>Verification Email sent to {searchParams.get("to")}</div>;
};
