import React, { useState, useEffect } from "react";
import { copy, loader, tick, curious, search } from "../../assets";
import { useGetAnswerMutation } from "../../services";
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
import "./StudentTools.css";
import { MainLayout } from "../../layouts";
import { Header, SideCol2 } from "../../components";

export const QuizGenerator = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState({
    prompt: "",
    input1: "",
    answer: "",
  });
  const [allResults, setAllResults] = useState([]);
  const [copied, setCopied] = useState("");
  const [getResults, { error, isLoading }] = useGetAnswerMutation();

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
          collection(db, "quiz-generator"),
          where("userId", "==", user?.uid),
          orderBy("timestamp", "desc"),
          limit(50)
        )
      );
      const resultsFromStorage = querySnapshot?.docs?.map((doc) => {
        if (doc != undefined) {
          return JSON.parse(doc?.data()?.history);
        }
      });
      if (resultsFromStorage) {
        setAllResults(resultsFromStorage);
      }
    }
    if (user?.uid != undefined) {
      fetchData();
    }
  }, [user]);

  const saveHistory = async (history) => {
    try {
      await addDoc(collection(db, "quiz-generator"), {
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

    const { data } = await getResults({
      messages: [
        {
          role: "user",
          content: `You are a quiz creator of highly diagnostic quizzes. You will make good low-stakes tests and diagnostics. ${
            result.input1 && `The audience of the quiz is ${result.input1}.`
          } Construct several multiple choice questions to quiz the audience on the topic "${
            result.prompt
          }". The questions should be highly relevant and go beyond just facts. Multiple choice questions should include plausible, competitive alternate responses and should not include an "all of the above option." At the end of the quiz, you will provide an answer key and explain the right answer.`,
        },
      ],
    });

    if (data?.choices[0]?.message) {
      const newResult = {
        ...result,
        answer: data.choices[0].message.content,
      };
      const updatedAllResults = [newResult, ...allResults];

      setResult(newResult);
      setAllResults(updatedAllResults);
      await saveHistory(newResult);
    }
  };

  const handleCopy = (copyResults) => {
    setCopied(copyResults);
    navigator.clipboard.writeText(copyResults);
    toast.success("Copied results successfully!");
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="flex gap-6">
      <SideCol2 side={"left"} />
      <MainLayout>
        <section id="visualizer" className="max-w-[720px] w-full mx-auto px-6">
          <Header
            title="Quiz"
            title_="Generator"
            subtitle="Welcome to DigitalHippo. Every asset on our platform is verified by our team to ensure our highest quality standards."
            tool={true}
          />
          <div className="flex flex-col w-full gap-2">
            <div className="relative flex justify-center items-start w-full">
              <img
                src={curious}
                alt="Curious Icon"
                className="absolute left-0 my-3 ml-3 w-5"
              />
              <textarea
                placeholder="For which audience is the quiz?"
                onChange={(e) => {
                  setResult({ ...result, input1: e.target.value });
                }}
                required
                className="prompt_input peer"
                rows={3}
                value={result.input1}
              />
            </div>
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
                placeholder="What topic, specifically, should the quiz test?"
                value={result.prompt}
                onChange={(e) => {
                  setResult({ ...result, prompt: e.target.value });
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
              {allResults.map((item, index) => (
                <div
                  key={`link-${index}`}
                  onClick={() => setResult(item)}
                  className="prompt_card font-satoshi text-sm"
                >
                  <div className="flex gap-3 items-center">
                    {/* <div key={index} className="image_card">
                      <img
                        src={`data:image/png;base64,${item.image}`}
                        alt={item.prompt}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div> */}
                    <div
                      className="copy_btn"
                      onClick={() => handleCopy(item.answer)}
                    >
                      <img
                        src={copied === item.answer ? tick : copy}
                        alt="Copy Icon"
                        className="w-[50%] h-[50%] object-contain"
                      />
                    </div>
                    <span className="font-semibold">{item.prompt}:</span>{" "}
                    {`${item.answer.substring(0, 50)}...`}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="my-10 max-w-full flex justify-center items-center">
            <div className="flex flex-col gap-3 w-full">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                {allResults.length == 0 || !result.answer
                  ? "Let's craft your very first masterpiece!"
                  : "Presenting you fascinating examples and analogies!"}
                <span className="blue_gradient"></span>
              </h2>
              <div className={`result_box ${result.answer ? "bg-white" : ""}`}>
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
                      Oops, that's unexpected! Give it another shot, and let's
                      see if the digital dice roll in your favor this time!
                    </p>
                  </div>
                ) : (
                  <div className="whitespace-pre-line w-full aspect-square rounded-md">
                    {result.answer}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
      <SideCol2 side={"right"} />
    </div>
  );
};
