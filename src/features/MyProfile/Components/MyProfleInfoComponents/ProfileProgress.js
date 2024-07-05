import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import profile from '../../../../Images/profile.png';
function ProfileProgress(props) {
  const percentage =props.percentagevalue;

  let borderColor = ''; 
  let borderSize = ``;

  if (percentage <= 30) {
    borderColor = '#ff0000';
    borderSize = '30%';
  } else if (percentage >= 80) {
    borderColor = '#07ef11';
    borderSize = `${percentage}%`;
  }
  else{
    borderColor = '#00bfff';
    borderSize = `${percentage}%`;
  }

  return (
    <div className='w-40 relative'>
      <div style={{ border: `${borderSize} solid ${borderColor}`, borderRadius: '50%', position: 'relative', width: '100%', paddingTop: '100%' }}>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
          <CircularProgressbar 
            value={percentage}
            styles={buildStyles({
              pathColor: `${borderColor}`,
              trailColor: '	#D3D3D3',
              pathTransitionDuration: 0.5,
            })}
            circleRatio={1} 
            strokeWidth={6}
          />
        </div>
        <div className='absolute inset-0 flex justify-center items-center'>
          <img 
            src={profile} 
            alt='Profile'
            style={{
              width: '83%', 
              height: '83%',
              borderRadius: '50%', 
            }} 
          />
          
        </div>
      </div>
    </div>
  );
}

export default ProfileProgress;