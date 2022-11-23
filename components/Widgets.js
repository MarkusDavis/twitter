import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { CloseIcon } from "./icons/CloseIcon";
import News from "./News";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Widgets({ newsResults, randomUsersResults }) {
  const [articleNum, setArticleNum] = useState(3);
  const [randomUserNum, setRandomUserNum] = useState(3);
  return (
    <div className="max-w-xs  xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[100%] xl:w-[100%] sticky top-0 bg-transparent py-1.5 z-50">
        <div class="relative  text-[#71767b] focus-within:stroke-[#1d9bf0]">
          <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="min-w-[32px] h-4 fill-current pl-[12px]"
            >
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
            </svg>
          </div>
          <input
            class="rounded-full w-[100%] xl:w-[75%] h-10 pl-12 text-[rgb(15, 20, 25)] dark:text-[#71767b] placeholder-gray-600 bg-media focus:bg-transparent  outline-0 border border-transparent focus:border-[rgb(29,161,242)]"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="text space-y-3 bg-media rounded-xl pt-2 w-[100%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">What's happening</h4>
        <AnimatePresence>
          {newsResults.slice(0, articleNum).map((article) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <News key={article.title} article={article} />
            </motion.div>
          ))}
        </AnimatePresence>
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className="h-12 text-[#1d9bf0] pl-4 pb-3 hover:text-[#1da1f2] hover:bg-[#ffffff08]  transition duration-100 ease-out w-full text-left rounded-b-md"
        >
          Show more
        </button>
      </div>
      <div className="sticky top-16 text space-y-3 bg-media pt-2 rounded-xl w-[100%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        <AnimatePresence>
          {randomUsersResults?.slice(0, randomUserNum).map((randomUser) => (
            <motion.div
              key={randomUser?.login.username}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div
                key={randomUser.login.username}
                className="flex items-center px-4 py-2  cursor-pointer hover:bg-[#ffffff08]  transition duration-500 ease-out"
              >
                <img
                  className="rounded-full"
                  width="40"
                  src={randomUser.picture.thumbnail}
                  alt=""
                />
                <div className="truncate ml-4 leading-5">
                  <h4 className="font-bold hover:underline text-[14px] truncate">
                    {randomUser.name.first + " " + randomUser.name.last}
                  </h4>
                  <h5 className="text-[13px] text-gray-500 truncate">
                    @
                    {randomUser.name.first.toLowerCase() +
                      randomUser.name.last
                        .toLowerCase()
                        .replace(/[^a-zA-Z ]/g, "")}
                  </h5>
                </div>
                <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
                  Follow
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <button
          onClick={() => setRandomUserNum(randomUserNum + 3)}
          className="h-12 text-[#1d9bf0] pl-4 pb-3 hover:text-[#1da1f2]  dark:hover:bg-[#ffffff08]  transition duration-0 ease-out w-full text-left rounded-b-md	"
        >
          Show more
        </button>
      </div>
    </div>
  );
}

export default Widgets;
