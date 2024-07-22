import Header from '@components/teacher_com/Header'
import React from 'react'
import ViewArticle from '@components/articles/ViewArticle'
import Engagment from '@components/articles/Engagment';
import { Footer } from '@components/common';

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
        
        <div className="mt-64 w-3/12">
            <h2 className='text-4xl  mt-10 mb-4'>Actions</h2>
            <hr className='border-yellow border-t-4 w-1/3 hover:border-white transition duration-300 ease-in-out mb-10'></hr>
            <div className=' my-7'>
              
              <h2 className='text-3xl text-gray1 hover:text-blue cursor-pointer my-2'>Edit Your Article</h2>
              <h2 className='text-3xl text-gray1 hover:text-blue cursor-pointer'>Delete Your Article</h2>
            </div>
            <h2 className='text-4xl  mt-10 mb-4'>Overview</h2>
            <hr className='border-yellow border-t-4 w-1/3 hover:border-white transition duration-300 ease-in-out mb-10'></hr>

         
            <Engagment/>
            <div>
              <h2 className='text-4xl  mt-10 mb-4'>Moderator's Review</h2>
              <hr className='border-yellow border-t-4 w-2/3 hover:border-white transition duration-300 ease-in-out mb-10'></hr>
              <p className='text-gray1 text-2xl'>content has some errors</p>
            </div>
            
        </div>
      </div>
      <Footer/>
    </div>
  )
}
