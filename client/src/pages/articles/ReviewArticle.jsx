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
          firstName: userDetails.firstName,
          lastName:userDetails.lastName,
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
          <div className="content-wrapper mx-32 ">
            <div className={`${isModalOpen || isDeclineModalOpen ? "modalOpen" : ""}`}>
              <div className="">
                <h1 className="text-3xl mt-10">Review Article</h1>
                <hr className="border-yellow border-t-4 w-96 my-4" />
              </div>
              <div className='flex justify-between'>
                <div className='w-8/12'>
                  <div className="p-10">
                    <h1 className="text-3xl font-bold">{article.title}</h1>
                    
                    <div className="my-14">
                      {article.imageRef ? (
                        <img className="w-full h-auto" src={article.imageRef} alt="Article" />
                      ) : (
                        <img className="w-full h-auto" src={Default} alt="Default" />
                      )}
                    </div>
                    <div className="text-xl">
                      <p className="text-xl">{HTMLReactParser(article.content)}</p>
                    </div>
                    <div className="flex flex-wrap">
                      {article.tags && article.tags.map((tag, index) => (
                        <div key={index} className="border-none text-gray1 text-2xl px-2 py-1 mr-2 mb-2">
                          #{tag}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-start mt-7">
                      <div className="rounded-xl m-2 flex items-center">
                        <FontAwesomeIcon icon={faFile} className="text-4xl hover:text-yellow cursor-pointer hover:translate-x-1" style={{ color: '#6C6C6C' }} />
                        <a href={article.additionalFilesRefs} download className="text-2xl text-gray1 hover:text-yellow cursor-pointer ml-2">
                          {article.additionalFilesRefs ? 'Download File' : 'No File Available'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-3/12  items-center'>
                  <div className="my-10">
                        <p className='my-2 text-2xl'>Author : <span className="text-2xl ml-2">{article.firstName} {article.lastName}</span></p>
                        <p className='my-2 text-2xl'>Submitted Date :<span className="text-2xl">{formattedDate}</span></p>
                    </div>  
                  <button className="bg-blue text-xl text-white py-2 px-4 rounded w-52 h-16 hover:translate-x-2 mb-4" onClick={openModal}>
                    Approve Article
                  </button>
                  <br></br>
                  <button className="bg-red-500 text-white text-xl py-2 px-4  w-52 h-16 rounded hover:translate-x-2" onClick={openDeclineModal}>
                    Reject Article
                  </button>
                </div>
              </div>
            </div>
            {isModalOpen && (
                  <dialog open className="modal">
                    <div className="modal-box max-w-3xl p-10">
                      <p className="py-4 text-3xl">
                        Are you sure you want to approve this article?
                      </p>
                      <div className="modal-action">
                        <button
                          className="btn bg-red-500 text-white"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn bg-blue text-white"
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
                          className="btn bg-red-500 text-white"
                          onClick={closeDeclineModal}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn bg-blue text-white"
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
      <Footer />
    </>
  );
}
