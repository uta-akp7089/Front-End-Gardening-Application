// Import using relational paths
import '../App.css';
import {Plant} from "../components/plant"
import '../styles/dashboard.css'

import { weatherOutlook } from '../AppConfig';

function Dashboard({setScreen, potPlants}) { 

  // Write in Javascript here
  const user = "Alex";
  
  const warningList = potPlants.filter((plant) => {
  return plant.warnings.hot < weatherOutlook[0].temperature; 
   })

  const stableList = potPlants.filter((plant) => {
    return plant.warnings.hot >= weatherOutlook[0].temperature; 
    });
  
  return (
    <div className="dashboard page">
    <div className="top-content">
      <img src="https://s3-alpha-sig.figma.com/img/5f77/fd8d/50c9ed8a85fd591577929f22a13e8a20?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LY8evfVjdovxYqUeNzEqumGtYHEG2JRS2HeEjc9e2jKWhHpR7gQoSBJNjt5NrsB44lGl8nk2HkXoVTwn2yVvDYz8kmfhqpF4Qq7J9OTompvscxnTIWDtWqQcnVhZyVAC6B~v4SYGHSz1r1iqfSLmJlnOUzAwVwAGN518wlYyZJLhMIWnAbrxwABen~FD74EUSh3yYDMXCkR0s6YNsRIdknzW6CdQLW2oGObcyAODytHeWV~HDeWsGkoxe5YunvDsVf7ecGXHp89yiJeVYzSuikuIbRQg2W6q7y0LvqIy0IuMAm28iTclpYjzwU7krRfgwC~B8U1B3W5h7~3gx4EhtQ__" alt="" class="dashboard-image-left" />
      <img src="https://s3-alpha-sig.figma.com/img/5f77/fd8d/50c9ed8a85fd591577929f22a13e8a20?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LY8evfVjdovxYqUeNzEqumGtYHEG2JRS2HeEjc9e2jKWhHpR7gQoSBJNjt5NrsB44lGl8nk2HkXoVTwn2yVvDYz8kmfhqpF4Qq7J9OTompvscxnTIWDtWqQcnVhZyVAC6B~v4SYGHSz1r1iqfSLmJlnOUzAwVwAGN518wlYyZJLhMIWnAbrxwABen~FD74EUSh3yYDMXCkR0s6YNsRIdknzW6CdQLW2oGObcyAODytHeWV~HDeWsGkoxe5YunvDsVf7ecGXHp89yiJeVYzSuikuIbRQg2W6q7y0LvqIy0IuMAm28iTclpYjzwU7krRfgwC~B8U1B3W5h7~3gx4EhtQ__" alt="" class="dashboard-image-right" />
      <svg width="542" height="84" viewBox="0 0 542 84" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg-image'>
        <path d="M269.276 0.157055C270.423 0.0525677 271.577 0.0525685 272.724 0.157056L524.312 23.0784C547.347 25.177 547.347 58.823 524.313 60.9216L272.724 83.8429C271.577 83.9474 270.423 83.9474 269.276 83.8429L17.6875 60.9216C-5.34731 58.823 -5.34733 25.177 17.6875 23.0784L269.276 0.157055Z" fill="#0E3C0A"/>
      </svg>
      <div className='text-overlay'>
      <h2 className="welcome-text"> Welcome, {user} </h2>
      </div>
    </div>
    <button className='circular-button' onClick={()=> setScreen("plant-search")}>
        <div className='outer-circle'>
        <span className='plus-sign'>+</span>
        </div>
    </button>
    <div className='bottom-content'>
      <div className="plant-container">
        {warningList.map((plants) => (
          <Plant text={plants} setScreen={setScreen}></Plant>
        ))}
        {stableList.map((plants) => (
          <Plant text={plants} setScreen={setScreen}></Plant>
        ))}
      </div>
    </div>
  </div> 
  );
}
export {Dashboard}; 
// Use {} notation to export more than one component;
