import React, { useState, useEffect } from "react";
import {
  copy,
  loader,
  tick,
  curious,
  download,
  search,
} from "../../assets";
import { useGetFactsMutation } from "../../services";
import toast from "react-hot-toast";
import { auth, db } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore/lite";

export const LessonPlanGenerator = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState({
    prompt: "",
    plan: "",
  });
  const [allPlans, setAllPlans] = useState([]);
  const [copied, setCopied] = useState("");
  const [getPlan, { error, isLoading }] = useGetFactsMutation();

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user_) => {
      setUser(user_);
      !user_ && navigate("/student/signin");
    });
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(
        query(
          collection(db, "lesson-plan"),
          where("userId", "==", user?.uid),
          orderBy("timestamp", "desc"),
          limit(50)
        )
      );
      const lessonPlanFromStorage = querySnapshot?.docs?.map((doc) => {
        if (doc != undefined) {
          return JSON.parse(doc?.data()?.history);
        }
      });
      if (lessonPlanFromStorage) {
        setAllPlans(lessonPlanFromStorage);
      }
    }
    if (user?.uid != undefined) {
      fetchData();
    }
  }, [user]);

  const saveHistory = async (history) => {
    try {
      await addDoc(collection(db, "lesson-plan"), {
        userId: user?.uid,
        history: JSON.stringify(history),
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getPlan({
      messages: [
        {
          role: "user",
          content: `Give 5 interesting / fascinating / mind blowing / fun facts about ${fact.prompt} [max 100 words]. Please give an array of facts in this format strictly: ["...", "...", "...", "...", "..."]`,
        },
      ],
    });

      if (data?.choices[0]?.message && response) {
        const newPlan = {
          ...plan,
          plan: JSON.parse(data.choices[0].message.content),
        };
        const updatedAllPlans = [newPlan, ...allPlans];

        setPlan(newPlan);
        setAllPlans(updatedAllPlans);
        await saveHistory(newPlan);
      }
  };

  const handleCopy = (copyPlan) => {
    setCopied(copyPlan);
    navigator.clipboard.writeText(copyPlan);
    toast.success("Copied plans successfully!");
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <section
      id="visualizer"
      className="mt-16 md:max-w-xl max-w-md md:w-[576px] w-full"
    >
      {/* <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center w-full"
          onSubmit={handleSubmit}
        >
          <img
            src={curious}
            alt="Curious Icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            placeholder="Try searching for The Milky Way!"
            value={plan.prompt}
            onChange={(e) => {
              setPlan({ ...plan, prompt: e.target.value });
            }}
            required
            className="prompt_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <img
              src={search}
              alt="Search Icon"
              className="absolute left-0 my-2 mx-2 w-5"
            />
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allPlans.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setPlan(item)}
              className="prompt_card font-satoshi text-sm"
            >
              <div className="flex gap-3 items-center">
                <span className="font-semibold">Plans:</span>{" "}
                {`${item.plan.substring(0, 50)}...`}
              </div>
              <div className="copy_btn" onClick={() => handleCopy(item.plan)}>
                <img
                  src={copied === item.plan ? tick : copy}
                  alt="Copy Icon"
                  className="w-[50%] h-[50%] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* 
      <div className="my-10 max-w-full flex justify-center items-center">
        <div className="flex flex-col gap-3 w-full">
          <h2 className="font-satoshi font-bold text-gray-600 text-xl">
            {allPlans.length == 0 || plan.plan.length == 0
              ? "Let's craft your very first masterpiece!"
              : "Presenting you fascinating facts and captivating visuals!"}
            <span className="blue_gradient"></span>
          </h2>
          <div className="result_box">
            {isLoading ? (
              <div className="w-full aspect-square flex justify-center items-center">
                <img
                  src={loader}
                  alt="Loader"
                  className="w-20 h-20 object-contain"
                />
              </div>
            ) : error ? (
              <div className="w-full aspect-square flex justify-center items-center">
                <p className="font-inter font-bold text-black text-center">
                  Oops, that's unexpected! Give it another shot, and let's see
                  if the digital dice roll in your favor this time!
                </p>
              </div>
            ) : (
              <div>
                {/* <ol className="list-decimal ml-[25px]">
                  {plan.plan?.map((item, index) => (
                    <li key={index} className="mb-2 font-satoshi">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      {!item.endsWith(".") && "."}
                    </li>
                  ))}
                </ol> */}
               {/* {plan.plan}
              </div>
            )}
          </div>
        </div>
      </div> 
    */}
    </section>
  );
};
