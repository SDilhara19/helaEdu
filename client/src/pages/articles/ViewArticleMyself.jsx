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
    const article={title:'What is a user in English language?',content:"On this page you'll find 7 synonyms, antonyms, and words related to users, such as: customer, buyer, shopper, purchaser, enjoyer, and end user. users (noun as in consumer) Strongest matches. buyer customer purchaser shopper.That's vital, since defects like holes in the separator are what can lead to catastrophic failure giving rise to fires in mobile devices such as cellphones and laptops.The new technology—hard X-ray ptychography, which was conducted at the Swiss Light Source (SLS), at the Paul Scherrer Institute in Switzerland—is an advanced form of tomography that can penetrate deeper into a material than is possible with beams in electron microscopes. This technique allowed the researchers to reconstruct a very large sample volume of a BCP SA-derived polymer-metal composite material If you have a smaller defect such as a line or a point defect, when you perturb the system, often you can 'correct' the defect structure, Wiesner said. In contrast, topological defects are so large, they are very stable against external perturbations.Once the triblock terpolymer was synthesized, researchers in the group of Ulli Steiner at the Adolphe Merkle Institute in Fribourg, Switzerland, a long-time collaborator of Wiesner, generated thin films from it and replaced one of the terpolymer blocks with gold, so the material could withstand repeated exposure to the intense coherent X-ray beams at SLS.Imaging and image reconstruction at the SLS finally revealed a co-continuous network known as a single-diamond structure, with topological defects that the researchers expect would have substantial effects on mechanical and other properties. Importantly, the defects most closely resemble topological textures found in nematic liquid crystals and in Hydra single-celled organisms, suggesting that self-assembly can be used as a model process to investigate the role of topology in nature.The next step is the addition of the cathode material—in this case, sulfur—in an amount that doesn't quite fill the remainder of the pores. Since sulfur can accept electrons but doesn't conduct electricity, the final step is backfilling with an electronically conducting polymer—known as PEDOT (poly[3,4-ethylenedioxythiophene])." , tags: ["#English","#literature","#writing"]};
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
