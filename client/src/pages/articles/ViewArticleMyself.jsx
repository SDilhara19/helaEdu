import React, { useState, useEffect } from "react";
import ViewArticle from "@components/articles/ViewArticle";
import Engagment from "@components/articles/Engagment";
import { Link, useParams } from "react-router-dom";
import { Header, Footer } from "@components/common";
import { deleteArticle, getArticleById } from "@services/ArticleService";
import { getUserDetails } from "@services/TeacherService";
import { useNavigate } from "react-router-dom";

export default function ViewArticleMyself() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  const openDeleteModal = () => {
    setIsPopupOpen(true);
  };

  const closeDeleteModal = () => {
    setIsPopupOpen(false);
  };

  const DeleteArticle = async () => {
    try {
      await deleteArticle(articleId);
      navigate("/articles/addArticles");
    } catch (error) {
      console.error("Failed to delete article", error);
    }
  };
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getArticleById(articleId);
        const article = response.data;
        const userResponse = await getUserDetails(article.userId);
        const userDetails = userResponse.data;
        const articleWithUserDetails = {
          ...article,
          authorName: userDetails.firstName,
        };
        setArticle(articleWithUserDetails);
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
      <div className="flex justify-between mx-24">
        {isPopupOpen && (
          <dialog open className="modal">
            <div className="modal-box max-w-3xl p-10">
              <p className="py-4 text-3xl">
                Are you sure you want to delete this article?
              </p>
              <div className="modal-action">
                <button
                  className="btn bg-red-400 text-black text-2xl"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
                <button
                  className="btn bg-yellow text-black text-2xl"
                  onClick={DeleteArticle}
                >
                  Delete
                </button>
              </div>
            </div>
          </dialog>
        )}
        <div className="w-9/12">
          <ViewArticle
            title={article.title}
            content={article.content}
            tags={article.tags}
            userName={article.authorName}
            date={article.publishedTimestamp}
            imageRef={article.imageRef}
          />
        </div>
        <div className="mt-64 w-3/12">
          <h2 className="text-4xl mt-10 mb-4">Actions</h2>
          <hr className="border-yellow border-t-4 w-1/3 hover:border-white transition duration-300 ease-in-out mb-10"></hr>
          <div className="my-7">
            <Link to={`../editArticle/${article.articleId}`}>
              <h2 className="text-3xl text-gray1 hover:text-blue cursor-pointer my-2">
                Edit Your Article
              </h2>
            </Link>
            <h2
              className="text-3xl text-gray1 hover:text-blue cursor-pointer"
              onClick={openDeleteModal}
            >
              Delete Your Article
            </h2>
          </div>
          <h2 className="text-4xl mt-10 mb-4">Overview</h2>
          <hr className="border-yellow border-t-4 w-1/3 hover:border-white transition duration-300 ease-in-out mb-10"></hr>
          <Engagment />
          <div>
            <h2 className="text-4xl mt-10 mb-4">Moderator's Review</h2>
            <hr className="border-yellow border-t-4 w-2/3 hover:border-white transition duration-300 ease-in-out mb-10"></hr>
            {article.rejectedReason ? (
              <p className="text-gray1 text-2xl">content has some errors</p>
            ) : (
              <p>No any reviews</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
