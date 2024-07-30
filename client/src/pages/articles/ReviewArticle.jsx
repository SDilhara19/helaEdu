import { Footer } from '@components/common';
import Header from '@components/common/Header';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById, approveArticle, rejectArticle } from '@/services/ArticleService';
import Default from '@assets/img/articles/defaultArticle.jpg';
import HTMLReactParser from 'html-react-parser';
import Sidebar from '@components/teacher_com/ModeratorSidebar';
import { getUserDetails } from '@services/TeacherService';

export default function ReviewArticle() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [rejectReason, setRejectReason] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
  

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getArticleById(articleId);
        const articleData = response.data;
        console.log(articleData);

        const userResponse = await getUserDetails(articleData.userId);
        const userDetails = userResponse.data;

        setArticle({
          ...articleData,
          authorName: userDetails.firstName,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [articleId]);

  const approve = async () => {
    try {
      const response = await approveArticle(articleId);
      console.log("Article approved:", response.data);
      navigate("/articles/reviewList");
    } catch (error) {
      console.error(
        "Error approving article:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const reject = async () => {
    try {
      const response = await rejectArticle(articleId, rejectReason);
      console.log("Article rejected:", response.data);
      navigate("/articles/reviewList");
    } catch (error) {
      console.error(
        "Error rejecting article:",
        error.response ? error.response.data : error.message
      );
    }
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeclineModal = () => setIsDeclineModalOpen(true);
  const closeDeclineModal = () => setIsDeclineModalOpen(false);
  const formattedDate = new Date(article.publishedTimestamp).toLocaleDateString();

  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard-wrapper mb-9">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="content-wrapper mx-32">
            <div className={`${isModalOpen || isDeclineModalOpen ? "modalOpen" : ""}`}>
              <div>

              </div>
              <div>
                
              </div>
              <div className="">
                <h1 className="text-3xl mt-10">Review Article</h1>
                <hr className="border-yellow border-t-4 w-96 my-4" />
              </div>
              <div className="p-10">
                <h1 className="text-3xl font-bold">{article.title}</h1>
                <div className="card-actions flex justify-between mt-10">
                  <div className="flex justify-start align-baseline">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Rounded avatar"
                    />
                    <span className="text-2xl">{article.authorName}</span>
                  </div>
                  <div>
                    <span className="text-2xl">{formattedDate}</span>
                  </div>
                </div>
                <div className="my-14">
                  {article.imageRef ? (
                    <img className="w-99/100 h-auto" src={article.imageRef} alt="Article" />
                  ) : (
                    <img className="w-99/100 h-auto" src={Default} alt="Default" />
                  )}
                </div>
                <div className="text-xl">
                  <p className="text-xl">{HTMLReactParser(article.content)}</p>
                </div>
                <div className="flex justify-start m-7">
                  {article.tags && article.tags.map((tag, index) => (
                    <div key={index} className="border-none text-gray1 text-2xl px-2 py-5">
                      #{tag}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mx-9">
                  <div className="rounded-xl m-2">
                    <FontAwesomeIcon icon={faFile} className="text-4xl hover:text-yellow cursor-pointer hover:translate-x-1" style={{ color: '#6C6C6C' }} />
                    <span className="text-2xl text-gray1 hover:text-yellow cursor-pointer">myFile.pdf</span>
                  </div>
                </div>
              </div>
              <div className="p-2 mx-64 mb-6 mt-8 flex justify-between">
                <div>
                  <button className="bg-yellow text-white font-bold text-3xl py-2 px-4 rounded w-96 h-16 hover:translate-x-2" onClick={openModal}>
                    Approve Article
                  </button>
                </div>
                <div>
                  <button className="bg-red-500 text-white font-bold w-96 h-16 text-3xl rounded bottom-4 right-4 hover:translate-x-2" onClick={openDeclineModal}>
                    Reject Article
                  </button>
                </div>
                {isModalOpen && (
                  <dialog open className="modal">
                    <div className="modal-box max-w-3xl p-10">
                      <p className="py-4 text-3xl">
                        Are you sure you want to approve this article?
                      </p>
                      <div className="modal-action">
                        <button
                          className="btn bg-red-400 text-black"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn bg-yellow text-black"
                          onClick={() => {
                            approve();
                            closeModal();
                          }}
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </dialog>
                )}
                {isDeclineModalOpen && (
                  <dialog open className="modal">
                    <div className="modal-box max-w-3xl p-10">
                      <p className="py-4 text-3xl">
                        Are you sure you want to decline this article?
                      </p>
                      <br />
                      <input
                        type="text"
                        placeholder="Add your feedback"
                        className="border border-blue w-full rounded-2xl p-5"
                        value={rejectReason}
                        onChange={(e) => setRejectReason(e.target.value)}
                      />
                      <div className="modal-action">
                        <button
                          className="btn bg-red-400 text-black"
                          onClick={closeDeclineModal}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn bg-yellow text-black"
                          onClick={() => {
                            reject();
                            closeDeclineModal();
                          }}
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </dialog>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
