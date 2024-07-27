import React, { useState } from 'react';

const UserManagement = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const cardData = [
    { name: 'Moderators', id: 1 },
    { name: 'Teachers', id: 2 },
    { name: 'Students', id: 3 },
  ];

  return (
    <div className="mt-5 flex justify-center space-x-80" style={{ marginLeft: '100px', marginRight: '50px' }}>
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`cursor-pointer w-64 p-6 border-4 rounded-full flex items-center justify-center text-center font-bold text-2xl transition-colors duration-300 ${
            selectedCard === card.id ? 'bg-blue text-white border-blue' : 'bg-white text-blue border-blue'
          }`}
          onClick={() => handleCardClick(card.id)}
        >
          {card.name}
        </div>
      ))}
    </div>
  );
};

export default UserManagement;
