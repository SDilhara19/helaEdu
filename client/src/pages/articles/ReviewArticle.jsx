import { Footer, Header } from "@components/common";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Banner from "@components/articles/Banner";
export default function ReviewArticle() {
  return (
    <div>
      <Header />
      <Banner />
      <div>
        <h1 className="text-center text-5xl mt-10 m-6">Review Article</h1>
        {/* <hr className='border-yellow border-t-2 w-full hover:border-white transition duration-300 ease-in-out'/> */}
      </div>
      <div className="border border-blue rounded-2xl p-10 m-32">
        <h1 className="text-5xl">
          The standard Lorem Ipsum passage, used since the 1500s
        </h1>
        <div className="card-actions flex justify-between mt-10">
          <div className="flex justify-start align-baseline">
            <img
              className="w-10 h-10 rounded-full"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Rounded avatar"
            />
            <span className="text-2xl"> M.Perera</span>
          </div>
          <div>
            <span className="text-2xl">23 March 2024</span>
          </div>
        </div>
        {/* tags */}
        <div className="flex justify-start m-7 ">
          <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue px-7 py-5">
            NEW
          </div>
          <div className="badge badge-secondary mr-2  bg-yellow border-none text-blue px-7 py-5">
            NEW
          </div>
          <div className="badge badge-secondary mr-2  bg-yellow border-none text-blue px-7 py-5">
            NEW
          </div>
        </div>
        <div>
          <img
            className="w-1/3 h-auto justify-center "
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Rounded avatar"
          />
        </div>
        <div className="text-xl">
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam,
          </p>{" "}
          <br />
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam,
          </p>{" "}
          <br />
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut. odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
        <div className="flex justify-between mx-9">
          <div className="border border-blue rounded-xl p-6 m-2">
            <FontAwesomeIcon
              icon={faFile}
              className="text-4xl m-2 hover:text-yellow  hover:translate-x-1"
            />
            <span className="text-3xl">myFile.pdf </span>
          </div>
        </div>
      </div>
      <div className="p-2 mx-32 mb-6 flex justify-between ">
        <div className="w-1/4  flex justify-center">
          <button className="bg-yellow text-white font-bold text-3xl py-2 px-4 rounded w-40 h-16 my-12 hover:translate-x-2">
            Approve
          </button>
        </div>
        <div className="flex-grow relative w-3/4">
          <textarea
            className=" h-52 w-full p-2 border border-blue rounded-md resize-none"
            placeholder="Add your comments"
          ></textarea>
          <button className="bg-red-500 text-white font-bold w-40 h-16 text-3xl rounded absolute bottom-4 right-4 hover:translate-x-2">
            Reject
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
