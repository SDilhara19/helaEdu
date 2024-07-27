import { Footer } from '@components/common';
import Header from '@components/teacher_com/Header';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById, approveArticle, rejectArticle } from '@/services/ArticleService';
import HTMLReactParser from 'html-react-parser';
export default function ReviewArticle() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);

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

  const approve = async () => {
    try {
      const response = await approveArticle(articleId);
      console.log("Article approved:", response.data);
      navigate('/articles');
    } catch (error) {
      console.error("Error approving article:", error.response ? error.response.data : error.message);
    }
  };

  const reject = async () => {
    try {
      const response = await rejectArticle(articleId, rejectReason);
      console.log("Article rejected:", response.data);
      navigate('/articles');
    } catch (error) {
      console.error("Error rejecting article:", error.response ? error.response.data : error.message);
    }
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeclineModal = () => setIsDeclineModalOpen(true);
  const closeDeclineModal = () => setIsDeclineModalOpen(false);

  return (
    <div className={`${isModalOpen || isDeclineModalOpen ? 'modalOpen' : ''}`}>
      <Header />
      <div className='mx-64'>
        <h1 className=" text-5xl mt-10 ">Review Article</h1>
        <hr className='border-yellow border-t-4 w-96 my-4 ' />
      </div>
      <div className=" p-10 mx-64 mt-32">
        <h1 className="text-5xl">{article.title}</h1>
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
        <div className="flex justify-start m-7 ">
          {article.tags && article.tags.map((tag, index) => (
            <div key={index} className="badge badge-secondary mr-2 bg-yellow border-none text-blue px-7 py-5">
              {tag}
            </div>
          ))}
        </div>
        <div>
          <img
            className="w-1/3 h-auto justify-center"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Rounded avatar"
          />
        </div>
        <div className="text-xl">
          <p className="text-2xl">{HTMLReactParser(article.content)}</p>
        </div>
        <div className="flex justify-between mx-9">
          <div className="border border-blue rounded-xl p-6 m-2">
            <FontAwesomeIcon
              icon={faFile}
              className="text-4xl m-2 hover:text-yellow hover:translate-x-1"
            />
            <span className="text-3xl">myFile.pdf </span>
          </div>
        </div>
      </div>
      <div className="p-2 mx-64 mb-6 mt-8 flex justify-between ">
        <div>
          <button className="bg-yellow text-white font-bold text-3xl py-2 px-4 rounded w-40 h-16 hover:translate-x-2" onClick={openModal}>
              Approve
          </button>
        </div>
        <div>
          <button className="bg-red-500 text-white font-bold w-40 h-16 text-3xl rounded  bottom-4 right-4 hover:translate-x-2" onClick={openDeclineModal}>
            Reject
          </button>
        </div>
        
        {isModalOpen && (
          <>
            {/* <div className="modalOverlay" /> */}
            <dialog open className="modal">
              <div className="modal-box max-w-3xl p-10">
                <p className="py-4 text-3xl">Are you sure you want to approve this teacher?</p>
                <div className="modal-action">
                  <button className="btn bg-red-400 text-black" onClick={closeModal}>Cancel</button>
                  <button className="btn bg-yellow text-black" onClick={() => {
                    approve();
                    closeModal();
                  }}>Approve</button>
                </div>
              </div>
            </dialog>
          </>
        )}
       {isDeclineModalOpen && (
          <>
            <div className="modalOverlay" />
            <dialog open className="modal">
              <div className="modal-box max-w-3xl p-10">
                <p className="py-4 text-3xl">Are you sure you want to decline this teacher?</p>
                <br />
                <input
                  type="text"
                  placeholder="Add your feedback"
                  className="border border-blue w-full rounded-2xl p-5"
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                />
                <div className="modal-action">
                  <button className="btn bg-red-400 text-black" onClick={closeDeclineModal}>Cancel</button>
                  <button className="btn bg-yellow text-black" onClick={() => {
                    reject();
                    closeDeclineModal();
                  }}>Decline</button>
                </div>
              </div>
            </dialog>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
