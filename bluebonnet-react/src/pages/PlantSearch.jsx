// Import using relational paths
import '../App.css';
import '../styles/plantprofile.css'
import { useState } from 'react';
import { plantDatabase } from '../AppConfig';


function PlantSearch({setScreen}) {
  // Write in Javascript here
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filterPlants = plantDatabase.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const inDashboardplants = filterPlants.filter(((plant) =>
    plant.inDashboard === true));

    const notInDashboardplants = filterPlants.filter(((plant) =>
    plant.inDashboard === false));

  return (
    <div className="plant-search page">
      <div className='search-title'> Plant Search </div>
      <button className='profile-backButton' onClick={()=> setScreen("dashboard")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
          <path d="M1.76616 7.37288L0.883078 8.28626L0 7.37288L0.883078 6.45951L1.76616 7.37288ZM23 17.7081C23 18.0507 22.8684 18.3793 22.6342 18.6216C22.3999 18.8639 22.0822 19 21.7509 19C21.4197 19 21.102 18.8639 20.8677 18.6216C20.6335 18.3793 20.5019 18.0507 20.5019 17.7081H23ZM7.12833 14.7458L0.883078 8.28626L2.64923 6.45951L8.89448 12.919L7.12833 14.7458ZM0.883078 6.45951L7.12833 0L8.89448 1.82675L2.64923 8.28626L0.883078 6.45951ZM1.76616 6.08098H14.2567V8.66479H1.76616V6.08098ZM23 15.1243V17.7081H20.5019V15.1243H23ZM14.2567 6.08098C16.5755 6.08098 18.7994 7.03376 20.4391 8.72971C22.0788 10.4257 23 12.7259 23 15.1243H20.5019C20.5019 13.4111 19.8439 11.7681 18.6727 10.5567C17.5015 9.34534 15.913 8.66479 14.2567 8.66479V6.08098Z" fill="black"/>
        </svg>
      </button>

      <div className='search-container'>
        <input className='search-bar' placeholder='Species' value={searchTerm} onChange={handleSearch}></input>
        <div className='search-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path d="M16.6 20L10.3 13C9.8 13.4444 9.225 13.7963 8.575 14.0556C7.925 14.3148 7.23333 14.4444 6.5 14.4444C4.68333 14.4444 3.146 13.7452 1.888 12.3467C0.63 10.9481 0.000666667 9.24 0 7.22222C0 5.2037 0.629333 3.49556 1.888 2.09778C3.14667 0.7 4.684 0.000740741 6.5 0C8.31667 0 9.85433 0.699259 11.113 2.09778C12.3717 3.4963 13.0007 5.20444 13 7.22222C13 8.03704 12.8833 8.80556 12.65 9.52778C12.4167 10.25 12.1 10.8889 11.7 11.4444L18 18.4444L16.6 20ZM6.5 12.2222C7.75 12.2222 8.81267 11.7363 9.688 10.7644C10.5633 9.79259 11.0007 8.61185 11 7.22222C11 5.83333 10.5627 4.65296 9.688 3.68111C8.81333 2.70926 7.75067 2.22296 6.5 2.22222C5.25 2.22222 4.18767 2.70852 3.313 3.68111C2.43833 4.6537 2.00067 5.83407 2 7.22222C2 8.61111 2.43767 9.79185 3.313 10.7644C4.18833 11.737 5.25067 12.223 6.5 12.2222Z" fill="black"/>
          </svg>
        </div>
      </div>
      {notInDashboardplants.map((plant) => (
      <div className='results-container'>
        <button className='results-box' style={{background: '#B5D39E'}} onClick={()=> setScreen("plant-profile",plant)}>
          <img src={plant.image} className='results-image' alt=""></img>
          <p className='results-title'>{plant.name}</p>
        </button>
      </div>
      ))}
      {inDashboardplants.map((plant) => (
      <div className='results-container'>
        <button className='results-box' style={{background: '#CDCDCD'}} onClick={()=> setScreen("plant-profile",plant)}>
          <img src={plant.image} className='results-image' alt=""></img>
          <p className='results-title'>{plant.name}</p>
        </button>
      </div>
      ))}
      {/* Write in XML here; use {to break out and write in JS} */}
    </div>
  );
}

export {PlantSearch}; 
// Use {} notation to export more than one component;
