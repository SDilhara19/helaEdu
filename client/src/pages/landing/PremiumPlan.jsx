import React, { useState } from 'react';
import { Header, Footer } from '@components/common';
import PlanSelector from '@components/common/PlanSelector';

export default function PremiumPlan() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePlan = () => {
    setIsYearly(!isYearly);
  };

  const basicPlanPrice = 'FREE';
  const premiumPlanPrice = isYearly ? 'Rs. 10,000' : 'Rs. 2,499';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto p-6">
          <div className='my-5'>
            <PlanSelector isYearly={isYearly} togglePlan={togglePlan} />
          </div>
          
          <div className="flex justify-center space-x-10">
            <div className="w-1/3 px-36 py-10 border rounded-lg shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Basic Plan</h2>
              <p className="text-7xl font-bold text-blue flex justify-center">{basicPlanPrice}</p>
              <ul className="mt-6 space-y-8 text-left">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500 text-3xl">✓</span>
                  <span className='text-2xl'>Ask from chatbot with limited tokens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500 text-3xl">✓</span>
                  <span className='text-2xl'>Access to all Textbooks & Articles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500 text-3xl">✓</span>
                  <span className='text-2xl'>Engage with Discussion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500 text-3xl">✓</span>
                  <span className='text-2xl'>Earn Badges </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-500 text-3xl">✗</span>
                  <span className='text-2xl'>Unlimited Tokens for Ask from Chatbot</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-500 text-3xl">✗</span>
                  <span className='text-2xl'>Access to weekly quizzes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-500 text-3xl">✗</span>
                  <span className='text-2xl'>No ads</span>
                </li>
              </ul>
            </div>
            <div className="w-1/3 px-36 py-10 border rounded-lg shadow-lg text-center bg-yellow">
              <h2 className="text-3xl font-bold mb-4">Premium Plan</h2>
              <p className="text-6xl font-bold text-blue flex justify-center">{premiumPlanPrice}</p>
              <ul className="mt-6 space-y-8 text-left">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500 text-3xl">✓</span>
                  <span className='text-2xl'>Access to all Textbooks & Articles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500 text-3xl">✓</span>
                  <span className='text-2xl'>Engage with Discussion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500 text-3xl">✓</span>
                  <span className='text-2xl'>Earn Badges</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500 text-3xl">✓</span>
                  <span className='text-2xl'>Unlimited Tokens for Ask from Chatbot</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500 text-3xl">✓</span>
                  <span className='text-2xl'>Access to weekly quizzes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500 text-3xl">✓</span>
                  <span className='text-2xl'>No ads</span>
                </li>
              </ul>
              <button className="mt-6 bg-blue text-3xl text-white py-3 px-6 rounded-xl">Subscribe</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
