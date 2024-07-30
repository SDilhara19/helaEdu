import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ArticleCard from "@components/articles/ArticleCard";
import { pendingArticles } from "@/services/ArticleService";

const CardCarouselReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5); // Default to 5 visible cards
  const [articles, setArticles] = useState([]); // Initialize articles state

  useEffect(() => {
    const fetchPendingArticles = async () => {
      try {
        const response = await pendingArticles();
        setArticles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPendingArticles();
  }, []);

  const totalCards = articles.length;

  const updateVisibleCards = () => {
    if (window.innerWidth < 800) {
      setVisibleCards(2); // Display 2 cards for small screens
    } else {
      setVisibleCards(5); // Display 5 cards for larger screens
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    if (currentIndex < totalCards - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative flex items-center justify-center m-20">
      {currentIndex > 0 && (
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="lg"
          className="absolute left-0 cursor-pointer z-10 bg-white rounded-full shadow-lg p-2"
          style={{ color: "#74C0FC" }}
          onClick={prevSlide}
        />
      )}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {articles.map((article) => (
            <div
              key={article.articleId}
              className={`flex-shrink-0 p-2 ${
                visibleCards === 2 ? "w-1/2" : "w-1/5"
              }`}
            >
              <Link to={`/articles/reviewArticle/${article.articleId}`}>
                <ArticleCard
                  key={article.articleId}
                  imageUrl={article.imageRef}
                  authorImageUrl={article.authorImageUrl}
                  authorName={article.authorName}
                  date={article.publishedTimestamp}
                  title={article.title}
                  description={article.content}
                  badges={article.tags}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {currentIndex < totalCards - visibleCards && (
        <FontAwesomeIcon
          icon={faArrowRight}
          size="lg"
          className="absolute right-0 cursor-pointer z-10 bg-white rounded-full shadow-lg p-2"
          style={{ color: "#74C0FC" }}
          onClick={nextSlide}
        />
      )}
    </div>
  );
};

export default CardCarouselReview;
