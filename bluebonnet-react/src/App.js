import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

// Data
import { cilantroPlantData, cilantroForum } from './AppConfig';

// Pages
import { PlantProfile } from './pages/PlantProfile';
import { SeasonInsights } from './pages/SeasonInsights';
import { Dashboard } from './pages/Dashboard';
import { PlantSearch } from './pages/PlantSearch';
import { plantData } from './AppConfig';
function App() {
  const [index, setIndex] = useState(1); // Initial index state

  const styles = {
    slideContainer: {
      height: "100vh",
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
    }
  };

  // Mapping of screen names to indices
  const screenIndices = {
    'season-insights': 0,
    'dashboard': 1,
    'plant-profile': 2,
    'plant-search': 3
  };

  // Function to set screen based on name
  const [currentPlant, setCurrentPlant] = useState(cilantroPlantData);

  const [potPlants, setPotPlants] = useState(plantData);
 
const setScreen = (screenName,plantName=null) => {
    const newIndex = screenIndices[screenName];
    if (plantName!== null) {setCurrentPlant(plantName)}
    if (newIndex !== undefined) {
      setIndex(newIndex);
    } else {
      console.warn('Unknown screen name:', screenName);
    }
  };




  // EITHER DISPLAYS PLANT SEARCH

  if (index === screenIndices["plant-search"]) {
    return (
      <PlantSearch setScreen={setScreen}/>
    );
  }

  // OR ARRANGES OTHER VIEWS ON A SLIDER

  return (
    <SwipeableViews
      containerStyle={styles.slideContainer}
      enableMouseEvents
      index={index} // Control the current index
      onChangeIndex={setIndex} // Update index state on change
    >
      <SeasonInsights setScreen={setScreen}/>
      <Dashboard setScreen={setScreen} potPlants={potPlants}/>
      <PlantProfile setScreen={setScreen} plant={currentPlant} forum={cilantroForum} potPlants={potPlants} setPotPlants={setPotPlants}/>
    </SwipeableViews>
  );
}

export default App;
