import Header from '@components/teacher_com/Header'
import React from 'react'
import ViewArticle from '@components/articles/ViewArticle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons';
// import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';

export default function ViewArticleMyself() {
    // const { articleId } = 'ar41ae2a1b-b621-4982-8b52-2482de440bd2';
    // const [article, setArticle] = useState(null);
    // useEffect(() => {
    //   const fetchArticle = async () => {
    //     try {
    //       const response = await getArticleById(articleId);
    //       setArticle(response.data);
    //     } catch (error) {
    //       console.error("Failed to fetch article", error);
    //     }
    //   };
  
    //   fetchArticle();
    // }, [articleId]);
  
    // if (!article) {
    //   return <div>Loading...</div>; 
    // }
    const article={title:'What is a user in English language?',content:"On this page you'll find 7 synonyms, antonyms, and words related to users, such as: customer, buyer, shopper, purchaser, enjoyer, and end user. users (noun as in consumer) Strongest matches. buyer customer purchaser shopper." , tags: ["hii"]};
  return (
    <div>
      <Header/>
      <div className="flex justify-between mx-24">
        <div className="w-9/12 ">
          <ViewArticle 
              title={article.title}
              content={article.content}
              tags= {article.tags}
            />
        </div>
        <div className="m-12 w-3/12">
            <h2 className='text-4xl  mt-10 mb-4'>User engagment</h2>
            <hr className='border-yellow border-t-4 w-2/3 hover:border-white transition duration-300 ease-in-out mb-10'></hr>

            {/* <p className='text-3xl my-7'>Views</p>
            <progress className="progress progress-warning w-full h-5 " value={40} max="100"></progress>
            <p className='text-3xl my-7'>Likes</p>
            <progress className="progress progress-warning w-full h-5" value={50} max="100"></progress>
            <p className='text-3xl my-7'>Comments</p>
            <progress className="progress progress-warning w-full h-5" value={80} max="100"></progress>
            <p className='text-3xl my-7'>Bookmarks</p>
            <progress className="progress progress-warning w-full h-5" value={30} max="100"></progress> */}
            <div className='flex justify-between my-10 '>
                <div className='rounded-xl w-60 h-40 shadow-2xl '>
                    <p>Likes</p>
                    <FontAwesomeIcon icon={faThumbsUpSolid} className='size-8'/>
                </div>
                <div className=' rounded-xl w-60 h-40 shadow-2xl'>
                    <p>User Views</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className=' rounded-xl w-60 h-40 shadow-2xl'>
                    <p className='p-6'>Comments</p>
                </div>
                <div className='rounded-xl w-60 h-40 shadow-2xl'>
                    <p>Bookmarks</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
