import React, { useState, useEffect } from "react";
import {
  copy,
  loader,
  tick,
  defaultImage,
  curious,
  download,
  search,
} from "../../assets";
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
import { Header, SideCol } from "../../components";
import { useGetArtsMutation } from "../../services";

export const ArtGenerator = () => {
  const navigate = useNavigate();
  const [art, setArt] = useState({
    prompt: "",
    image: "",
  });
  const [allArts, setAllArts] = useState([]);
  const [copied, setCopied] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(null);
  const [getArts, { error, isLoading }] = useGetArtsMutation();

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
          collection(db, "art-generator"),
          where("userId", "==", user?.uid),
          orderBy("timestamp", "desc"),
          limit(50)
        )
      );
      const artsFromStorage = querySnapshot?.docs?.map((doc) => {
        if (doc != undefined) {
          return JSON.parse(doc?.data()?.history);
        }
      });
      if (artsFromStorage) {
        setAllArts(artsFromStorage);
      }
    }
    if (user?.uid != undefined) {
      fetchData();
    }
  }, [user]);

  const saveHistory = async (history) => {
    try {
      await addDoc(collection(db, "art-generator"), {
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

    setImageLoading(true);
    try {
      const { data } = await getArts({
        prompt: art.prompt,
      });

      const image_url = data?.data[0]?.url;

      if (image_url) {
        const newArt = {
          ...art,
          image: image_url,
        };
        const updatedAllArts = [newArt, ...allArts];

        setArt(newArt);
        setAllArts(updatedAllArts);
        await saveHistory(newArt);
      }
    } catch (error) {
      setImageError(error);
      console.log(error);
    } finally {
      setImageLoading(false);
    }
  };

  const handleCopy = (copyPrompt) => {
    setCopied(copyPrompt);
    navigator.clipboard.writeText(copyPrompt);
    toast.success("Copied prompt successfully!");
    setTimeout(() => setCopied(""), 3000);
  };

  const downloadImage = async (image, prompt) => {
    try {
      const link = document.createElement("a");
      link.href = image;
      link.setAttribute("download", `${prompt}.png`);
      document.body.appendChild(link);
      link.click();
      toast.success("Image downloaded successfully!");
    } catch (error) {
      toast.error("Error. Oops, that's unexpected!");
    }
  };

  return (
    <div className="flex gap-6">
      <SideCol side={"left"} />
      <MainLayout>
        <section id="visualizer" className="max-w-[720px] w-full mx-auto px-6">
          <Header
            title="Art"
            title_="Generator"
            subtitle="Welcome to DigitalHippo. Every asset on our platform is verified by our team to ensure our highest quality standards."
            tool={true}
          />
          <div className="flex flex-col w-full gap-2">
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
                value={art.prompt}
                onChange={(e) => {
                  setArt({ ...art, prompt: e.target.value });
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
              {allArts.map((item, index) => (
                <div
                  key={`link-${index}`}
                  onClick={() => setArt(item)}
                  className="prompt_card font-satoshi text-sm"
                >
                  <div className="flex gap-3 items-center">
                    <div key={index} className="image_card">
                      <img
                        src={item.image}
                        alt={item.prompt}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div
                      className="copy_btn"
                      onClick={() => downloadImage(item.image, item.prompt)}
                    >
                      <img
                        src={download}
                        alt="Download Icon"
                        className="w-[50%] h-[50%] object-contain"
                      />
                    </div>
                    <span className="font-semibold">Prompt:</span>{" "}
                    {`${item.prompt.substring(0, 50)}...`}
                  </div>
                  <div
                    className="copy_btn"
                    onClick={() => handleCopy(item.prompt)}
                  >
                    <img
                      src={copied === item.prompt ? tick : copy}
                      alt="Copy Icon"
                      className="w-[50%] h-[50%] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="my-10 max-w-full flex justify-center items-center">
            <div className="flex flex-col gap-3 w-full">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                {allArts.length == 0
                  ? "Let's craft your very first masterpiece!"
                  : "Presenting you captivating visuals!"}
                <span className="blue_gradient"></span>
              </h2>
              <div className="result_box">
                {imageLoading ? (
                  <div className="w-full aspect-square flex justify-center items-center">
                    <img
                      src={loader}
                      alt="Loader"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                ) : imageError ? (
                  <div className="w-full aspect-square flex justify-center items-center">
                    <p className="font-inter font-bold text-black text-center">
                      Oops, that's unexpected! Give it another shot, and let's
                      see if the digital dice rolls in your favor this time!
                    </p>
                  </div>
                ) : (
                  <div>
                    <img
                      src={art.image ? art.image : defaultImage}
                      alt={art.prompt}
                      className={`${
                        art.image ? "mt-[24px]" : ""
                      } w-full aspect-square rounded-md object-cover`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
      <SideCol side={"right"} />
    </div>
  );
};
