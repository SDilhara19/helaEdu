import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AverageScoreChart = ({ averageScore }) => {
  return (
    <div className='w-64'>
      <CircularProgressbar
        value={averageScore}
        text={` ${averageScore.toFixed(2)}%`}
        styles={buildStyles({
          pathColor: `rgba(62, 152, 199, ${averageScore / 100})`,
          textColor: '#3e98c7',
          trailColor: '#d6d6d6',
          backgroundColor: '#f3f3f3',
        })}
      />
    
    </div>
  );
};

export default AverageScoreChart;
