import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ArticleCard from '@components/articles/ArticleCard';


const sampleData = {
    imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    authorImageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    authorName: "M. Perera",
    date: "23 March 2024",
    title: "Sinhabahu Natakaya",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    badges: ["NEW", "HOT", "TRENDING"]
  };


const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5); // Default to 5 visible cards
  const cards = [1, 2, 3, 4, 5, 6, 7, 8]; // Example array, replace with actual data

  const totalCards = cards.length;

  const updateVisibleCards = () => {
    if (window.innerWidth < 800) {
      setVisibleCards(2); // Display 3 cards for small screens
    } else {
      setVisibleCards(5); // Display 5 cards for larger screens
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
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
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 p-2 ${visibleCards === 2 ? 'w-1/3' : 'w-1/5'}`}
            >
              <ArticleCard
                imageUrl={sampleData.imageUrl}
                authorImageUrl={sampleData.authorImageUrl}
                authorName={sampleData.authorName}
                date={sampleData.date}
                title={sampleData.title}
                description={sampleData.description}
                badges={sampleData.badges}
            />
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

export default CardCarousel;
