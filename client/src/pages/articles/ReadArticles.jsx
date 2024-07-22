import AddArticleBtn from "@/components/articles/AddArticleBtn";
import CommentList from "@/components/articles/CommentList";
import PopArticleCard from "@/components/articles/PopArticleCard";
import ViewArticle from "@/components/articles/ViewArticle";
import React , {useState ,useEffect} from "react";
import { Footer} from "@/components/common";
import Header from "@components/teacher_com/Header";
import { Link } from "react-router-dom";
import { getArticleById } from "@/services/ArticleService";
import { useParams } from "react-router-dom";

export default function ReadArticle() {
  
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
      <div className="flex justify-between mx-24">
        <div className="w-9/12 ">
          <ViewArticle 
              title={article.title}
              content={article.content}
              tags= {article.tags}
            />
        </div>
        <div className="m-12 w-3/12">
          <h1>Top Articles</h1>
          <hr className="border-yellow border-t-4 w-2/4"></hr>
          <br></br>
          <PopArticleCard />
          <PopArticleCard />
          <PopArticleCard />
          <PopArticleCard />
          <PopArticleCard />
          <br></br>
          <Link to="/addArticleForm">
            <AddArticleBtn />
          </Link>

          <iframe></iframe>
        </div>
      </div>
      <div className="mx-24">
        <CommentList />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
