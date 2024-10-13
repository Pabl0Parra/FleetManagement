import { useState, useEffect } from 'react';
import BatteryDisplay from '../components/BatteryDisplay';
import { batteryLevels } from '../utils/batteryLevels';

const RandomBatteryDisplay = () => {
  const [randomPercentage, setRandomPercentage] = useState(100);

  useEffect(() => {
    // Function to select a random battery level
    const getRandomPercentage = () => {
      const randomIndex = Math.floor(Math.random() * batteryLevels.length);
      return batteryLevels[randomIndex].percentage;
    };

    // Set a random percentage on component mount
    setRandomPercentage(getRandomPercentage());
  }, []);

  return (
    <div className="flex justify-center align-center items-center">
      <BatteryDisplay percentage={randomPercentage} />
    </div>
  );
};

export default RandomBatteryDisplay;
