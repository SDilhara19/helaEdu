import {  Footer } from '@components/common'
import Header from '@components/teacher_com/Header'
import React , {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router-dom";
import { getArticleById } from "@/services/ArticleService";

export default function ReviewArticle() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getArticleById(articleId);
        setArticle(response.data);
      } catch (error) {
        console.error("Failed to fetch article", error);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>; 
  }
  return (
    <div>
      <Header />
    
      <div>
        <h1 className="text-center text-5xl mt-10 m-6">Review Article</h1>
        <hr className='border-yellow border-t-2 w-full hover:border-white transition duration-300 ease-in-out'/>
      </div>
      <div className="border border-blue rounded-2xl p-10 m-32">
        <h1 className="text-5xl">
        {article.title}
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
          { article.tags && article.tags.map((tag, index) => (
            <div key={index} className="badge badge-secondary mr-2 bg-yellow border-none text-blue px-7 py-5">
              {tag}
            </div>
          ))}
            
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
            {article.title}
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
