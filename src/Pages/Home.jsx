import React, { useState, useEffect } from 'react';
import './Home.css';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';
import eden1 from '../Assets/eden1.jpg';
import eden2 from '../Assets/eden2.jpg';

const Home = () => {
  const [waterLevel, setWaterLevel] = useState(0);
  const [alertDisplayed, setAlertDisplayed] = useState(false);
  const displayLowWaterAlert = () => {
    if (!alertDisplayed) {
        alert('Water level is below 50%!');
        setAlertDisplayed(true);
      }
    };
  useEffect(() => {
    const waterLevelRef = ref(database, 'water-level');
    onValue(waterLevelRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setWaterLevel(data.level);
        if(data.level<=50){
          displayLowWaterAlert();
        }
        else{
          setAlertDisplayed(false);
        }
      } else {
        console.log('No data available');
      }
    });
  }, []);

 

  return (
    <div className="home">
      <div className="waterlvl">
        <h1>Current Water Level</h1>
        <h2>
          {waterLevel} <span>%</span>
        </h2>
      </div>
      <div className="precaution">
        <p>
          Please alert Brother Jack Tee and activate the pump when the water level falls below 50%, as illustrated in the following image
        </p>
        <div className="pre-image">
          <div className="image">
            
            <img src={eden1} alt="" />
            <p>Turning on water pump</p>
          </div>
          <div className="image">
         
            <img src={eden2} alt="" />
            <p>Bypass - Government Water</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;