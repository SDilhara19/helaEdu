import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AddArticleBtn from "@/components/articles/AddArticleBtn";
import CommentList from "@/components/articles/CommentList";
import PopArticleCard from "@/components/articles/PopArticleCard";
import ViewArticle from "@/components/articles/ViewArticle";
import { Header, Footer } from "@/components/common";
import { getArticleById } from "@/services/ArticleService";
import { getUserDetails } from "@services/TeacherService";


export default function ReadArticle() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  const topArticles = [
    {
      title: "Exploring the Wonders of the Universe",
      authorName: "John Doe",
      profilePictureUrl: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31",
      publishedTimestamp: "2023-07-15T14:48:00.000Z",
      imageRef: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
    },
    {
      title: "The Future of Artificial Intelligence",
      authorName: "Jane Smith",
      profilePictureUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      publishedTimestamp: "2023-06-10T10:20:00.000Z",
      imageRef: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    },
    {
      title: "A Guide to Healthy Living",
      authorName: "Mark Johnson",
      profilePictureUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
      publishedTimestamp: "2023-05-25T09:30:00.000Z",
      imageRef: "https://images.unsplash.com/photo-1518680662109-849c651ab4d0",
    },
    {
      title: "Understanding Quantum Computing",
      authorName: "Emily Davis",
      profilePictureUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      publishedTimestamp: "2023-04-05T16:00:00.000Z",
      imageRef: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      title: "The Art of Minimalist Design",
      authorName: "Michael Brown",
      profilePictureUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      publishedTimestamp: "2023-03-22T11:15:00.000Z",
      imageRef: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    },
    {
      title: "Exploring Ancient Civilizations",
      authorName: "Sophia Wilson",
      profilePictureUrl: "https://images.unsplash.com/photo-1524578271613-e9d1b1b2a474",
      publishedTimestamp: "2023-02-18T08:45:00.000Z",
      imageRef: "https://images.unsplash.com/photo-1525103042018-3bdcffc5b09a",
    }
  ];

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
        <div className="w-8/12">
          <ViewArticle
            title={article.title}
            content={article.content}
            tags={article.tags}
            userName={article.authorName}
            userProfile={article.profilePictureUrl}
            date={article.publishedTimestamp}
            imageRef={article.imageRef}
          />
        </div>
        <div className="m-12 w-3/12">
          <h1>Top Articles</h1>
          <hr className="border-yellow border-t-4 w-2/4"></hr>
          <br />
          {topArticles.map((topArticle, index) => (
            <div key={index}>
              <PopArticleCard
                title={topArticle.title}
                userName={topArticle.authorName}
                userProfile={topArticle.profilePictureUrl}
                date={topArticle.publishedTimestamp}
                imageRef={topArticle.imageRef}
              />
              <br />
            </div>
          ))}
          <br />
          <Link to="/addArticleForm">
            <AddArticleBtn />
          </Link>
          <iframe title="dummy"></iframe>
        </div>
      </div>
      <div className="mx-24">
        <CommentList />
      </div>
      <Footer />
    </div>
  );
}
