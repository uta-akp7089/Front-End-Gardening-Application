// Import using relational paths
import '../App.css';
import '../styles/plantprofile.css'
import React, { useState } from 'react'
import { ChattingBox, AlexSaysBox } from '../components/CommunityForum';

function WarningBox(){
  return (
    <div className='profile-warning' style={{marginBottom: "29px"}}>
      <div className='profile-warning-container'>
        <div className='profile-images' style={{marginLeft: '5px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="36" viewBox="0 0 24 21" fill="none">
              <path d="M2.03197 19.8006C0.867928 19.8006 0.147485 18.5323 0.743552 17.5325L10.4152 1.30899C10.997 0.333116 12.4103 0.333117 12.9921 1.30899L22.6638 17.5325C23.2598 18.5323 22.5394 19.8006 21.3753 19.8006H2.03197ZM11.7383 17.3065C12.6577 17.3065 13.403 16.5612 13.403 15.6418C13.403 14.7224 12.6577 13.9771 11.7383 13.9771H11.669C10.7497 13.9771 10.0043 14.7224 10.0043 15.6418C10.0043 16.5612 10.7497 17.3065 11.669 17.3065H11.7383ZM11.7037 12.6477C12.6422 12.6477 13.403 11.8869 13.403 10.9484V8.68821C13.403 7.7497 12.6422 6.9889 11.7037 6.9889C10.7652 6.9889 10.0043 7.7497 10.0043 8.68821V10.9484C10.0043 11.8869 10.7652 12.6477 11.7037 12.6477Z" fill="#F41515" stroke="black"/>
          </svg>
        </div>
        <div className='warning-line'>Cover this plant.</div>
        <div className='profile-images' style={{marginLeft: '5px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="36" viewBox="0 0 24 21" fill="none">
            <path d="M2.03197 19.8006C0.867928 19.8006 0.147485 18.5323 0.743552 17.5325L10.4152 1.30899C10.997 0.333116 12.4103 0.333117 12.9921 1.30899L22.6638 17.5325C23.2598 18.5323 22.5394 19.8006 21.3753 19.8006H2.03197ZM11.7383 17.3065C12.6577 17.3065 13.403 16.5612 13.403 15.6418C13.403 14.7224 12.6577 13.9771 11.7383 13.9771H11.669C10.7497 13.9771 10.0043 14.7224 10.0043 15.6418C10.0043 16.5612 10.7497 17.3065 11.669 17.3065H11.7383ZM11.7037 12.6477C12.6422 12.6477 13.403 11.8869 13.403 10.9484V8.68821C13.403 7.7497 12.6422 6.9889 11.7037 6.9889C10.7652 6.9889 10.0043 7.7497 10.0043 8.68821V10.9484C10.0043 11.8869 10.7652 12.6477 11.7037 12.6477Z" fill="#F41515" stroke="black"/>
          </svg>
        </div>
      </div>
      <div className='warning-line-desc'> 
        It is above 85°F (29°C). Cover this plant with shade cloth to prevent heat stress.
      </div>
    </div>
  )
}

function PlantNeeds({plant}){
  return (
    <div className='needs-container'>
      <div className='plant-needs'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32" fill="none" style={{marginLeft: '30px', flexShrink: '0'}}>
        <path d="M12.2408 25.9063C11.5042 25.9064 10.7881 25.6716 10.2036 25.2383C9.61908 24.805 9.19885 24.1974 9.00806 23.5098" stroke="#21C6FA" stroke-width="2" stroke-linecap="round"/>
        <path d="M9.60375 4.36492C10.6596 2.62978 11.1883 1.76139 11.943 1.63203C12.14 1.59759 12.3417 1.59759 12.5387 1.63203C13.2933 1.76139 13.8221 2.62978 14.8779 4.36492L17.669 8.95102C19.6196 12.1562 21.1416 15.5876 22.1986 19.163C23.917 24.9732 19.4042 30.7576 13.1494 30.7576H11.3323C5.07919 30.7576 0.564668 24.9732 2.28313 19.163C3.34005 15.5876 4.86206 12.1562 6.81271 8.95102L9.60375 4.36492Z" stroke="#18ABDA" stroke-width="2"/>
      </svg>
      <p>Every 2-3 days</p>
      </div>
      <div className='plant-needs'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none" style={{marginLeft: '30px', flexShrink: '0'}}>
          <path d="M14.3381 4.3276V1.53344C14.3381 1.28642 14.4397 1.04952 14.6204 0.874847C14.8012 0.700179 15.0463 0.602051 15.3019 0.602051C15.5575 0.602051 15.8026 0.700179 15.9834 0.874847C16.1641 1.04952 16.2656 1.28642 16.2656 1.53344V4.3276C16.2656 4.57461 16.1641 4.81152 15.9834 4.98619C15.8026 5.16085 15.5575 5.25898 15.3019 5.25898C15.0463 5.25898 14.8012 5.16085 14.6204 4.98619C14.4397 4.81152 14.3381 4.57461 14.3381 4.3276ZM23.0119 14.5728C23.0119 16.0465 22.5597 17.4871 21.7125 18.7124C20.8653 19.9378 19.6612 20.8928 18.2524 21.4568C16.8436 22.0207 15.2933 22.1683 13.7978 21.8808C12.3022 21.5933 10.9284 20.8836 9.85012 19.8416C8.77186 18.7995 8.03756 17.4718 7.74007 16.0265C7.44258 14.5811 7.59526 13.0829 8.17881 11.7214C8.76236 10.3599 9.75057 9.19623 11.0185 8.37749C12.2864 7.55875 13.777 7.12175 15.3019 7.12175C17.346 7.12391 19.3058 7.90963 20.7512 9.30651C22.1966 10.7034 23.0096 12.5974 23.0119 14.5728ZM21.0844 14.5728C21.0844 13.4676 20.7452 12.3871 20.1098 11.4681C19.4745 10.5491 18.5714 9.83288 17.5148 9.40991C16.4581 8.98695 15.2955 8.87628 14.1738 9.09191C13.0521 9.30753 12.0218 9.83977 11.2131 10.6213C10.4044 11.4028 9.85365 12.3986 9.63053 13.4826C9.40741 14.5666 9.52192 15.6903 9.95958 16.7114C10.3972 17.7325 11.1384 18.6053 12.0893 19.2194C13.0402 19.8334 14.1582 20.1612 15.3019 20.1612C16.835 20.1596 18.3049 19.5704 19.389 18.5227C20.473 17.475 21.0828 16.0545 21.0844 14.5728ZM6.91008 7.78071C7.09091 7.95548 7.33618 8.05366 7.59193 8.05366C7.84767 8.05366 8.09294 7.95548 8.27378 7.78071C8.45461 7.60594 8.55621 7.36891 8.55621 7.12175C8.55621 6.8746 8.45461 6.63756 8.27378 6.4628L6.34628 4.60003C6.16545 4.42526 5.92018 4.32708 5.66443 4.32708C5.40869 4.32708 5.16342 4.42526 4.98258 4.60003C4.80175 4.77479 4.70015 5.01183 4.70015 5.25898C4.70015 5.50614 4.80175 5.74317 4.98258 5.91794L6.91008 7.78071ZM6.91008 21.365L4.98258 23.2278C4.80175 23.4025 4.70015 23.6396 4.70015 23.8867C4.70015 24.1339 4.80175 24.3709 4.98258 24.5457C5.16342 24.7204 5.40869 24.8186 5.66443 24.8186C5.92018 24.8186 6.16545 24.7204 6.34628 24.5457L8.27378 22.6829C8.36332 22.5964 8.43435 22.4936 8.48281 22.3806C8.53127 22.2675 8.55621 22.1463 8.55621 22.0239C8.55621 21.9016 8.53127 21.7804 8.48281 21.6673C8.43435 21.5542 8.36332 21.4515 8.27378 21.365C8.18423 21.2784 8.07793 21.2098 7.96094 21.163C7.84395 21.1161 7.71856 21.092 7.59193 21.092C7.46529 21.092 7.3399 21.1161 7.22291 21.163C7.10592 21.2098 6.99962 21.2784 6.91008 21.365ZM23.0119 8.05314C23.1385 8.05324 23.2638 8.02923 23.3808 7.98248C23.4978 7.93574 23.6041 7.86718 23.6937 7.78071L25.6212 5.91794C25.802 5.74317 25.9036 5.50614 25.9036 5.25898C25.9036 5.01183 25.802 4.77479 25.6212 4.60003C25.4404 4.42526 25.1951 4.32708 24.9394 4.32708C24.6836 4.32708 24.4383 4.42526 24.2575 4.60003L22.33 6.4628C22.1951 6.59306 22.1032 6.75908 22.0659 6.93985C22.0287 7.12062 22.0478 7.308 22.1208 7.47828C22.1938 7.64856 22.3174 7.79408 22.476 7.89641C22.6347 7.99874 22.8211 8.05329 23.0119 8.05314ZM23.6937 21.365C23.5129 21.1902 23.2676 21.092 23.0119 21.092C22.7561 21.092 22.5108 21.1902 22.33 21.365C22.1492 21.5397 22.0476 21.7768 22.0476 22.0239C22.0476 22.2711 22.1492 22.5081 22.33 22.6829L24.2575 24.5457C24.347 24.6322 24.4533 24.7008 24.5703 24.7477C24.6873 24.7945 24.8127 24.8186 24.9394 24.8186C25.066 24.8186 25.1914 24.7945 25.3084 24.7477C25.4254 24.7008 25.5317 24.6322 25.6212 24.5457C25.7107 24.4591 25.7818 24.3564 25.8302 24.2433C25.8787 24.1303 25.9036 24.0091 25.9036 23.8867C25.9036 23.7643 25.8787 23.6431 25.8302 23.5301C25.7818 23.417 25.7107 23.3143 25.6212 23.2278L23.6937 21.365ZM5.66443 14.5728C5.66443 14.3258 5.5629 14.0889 5.38216 13.9143C5.20142 13.7396 4.95629 13.6415 4.70069 13.6415H1.80945C1.55385 13.6415 1.30872 13.7396 1.12798 13.9143C0.94724 14.0889 0.845703 14.3258 0.845703 14.5728C0.845703 14.8199 0.94724 15.0568 1.12798 15.2314C1.30872 15.4061 1.55385 15.5042 1.80945 15.5042H4.70069C4.95629 15.5042 5.20142 15.4061 5.38216 15.2314C5.5629 15.0568 5.66443 14.8199 5.66443 14.5728ZM15.3019 23.8867C15.0463 23.8867 14.8012 23.9848 14.6204 24.1595C14.4397 24.3342 14.3381 24.5711 14.3381 24.8181V27.6123C14.3381 27.8593 14.4397 28.0962 14.6204 28.2708C14.8012 28.4455 15.0463 28.5436 15.3019 28.5436C15.5575 28.5436 15.8026 28.4455 15.9834 28.2708C16.1641 28.0962 16.2656 27.8593 16.2656 27.6123V24.8181C16.2656 24.5711 16.1641 24.3342 15.9834 24.1595C15.8026 23.9848 15.5575 23.8867 15.3019 23.8867ZM28.7943 13.6415H25.9031C25.6475 13.6415 25.4024 13.7396 25.2216 13.9143C25.0409 14.0889 24.9394 14.3258 24.9394 14.5728C24.9394 14.8199 25.0409 15.0568 25.2216 15.2314C25.4024 15.4061 25.6475 15.5042 25.9031 15.5042H28.7943C29.0499 15.5042 29.2951 15.4061 29.4758 15.2314C29.6565 15.0568 29.7581 14.8199 29.7581 14.5728C29.7581 14.3258 29.6565 14.0889 29.4758 13.9143C29.2951 13.7396 29.0499 13.6415 28.7943 13.6415Z" fill="#D0A025"/>
        </svg>
        <p>Partial shade to full sun</p>
      </div>
    </div>
  )
};


function AddBox({newPlant, setPotPlants}){
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const handleAddClick = () => {
    setShowConfirmation(true);
  };

  const handleYesClick = () => {
    // Handle the confirmation logic here, like submitting a form or adding data
    // For demonstration, let's just hide the confirmation page
    setPotPlants(potPlants => [...potPlants, newPlant])
    setShowConfirmation(false);
  };

  const handleNoClick = () => {
    setShowConfirmation(false);
  };
  return (
    <div>
      <button className='add-box' onClick={handleAddClick}>
        <p>ADD</p>
      </button>
      {showConfirmation && (
        <div className="confirmation-page">
          <img src="https://s3-alpha-sig.figma.com/img/5f77/fd8d/50c9ed8a85fd591577929f22a13e8a20?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LY8evfVjdovxYqUeNzEqumGtYHEG2JRS2HeEjc9e2jKWhHpR7gQoSBJNjt5NrsB44lGl8nk2HkXoVTwn2yVvDYz8kmfhqpF4Qq7J9OTompvscxnTIWDtWqQcnVhZyVAC6B~v4SYGHSz1r1iqfSLmJlnOUzAwVwAGN518wlYyZJLhMIWnAbrxwABen~FD74EUSh3yYDMXCkR0s6YNsRIdknzW6CdQLW2oGObcyAODytHeWV~HDeWsGkoxe5YunvDsVf7ecGXHp89yiJeVYzSuikuIbRQg2W6q7y0LvqIy0IuMAm28iTclpYjzwU7krRfgwC~B8U1B3W5h7~3gx4EhtQ__" alt=""></img>
            <h2>Do you want to add this plant to your inventory?</h2>
            <button onClick={handleYesClick} style={{backgroundColor: '#095902'}}><b>Yes</b></button>
            <button onClick={handleNoClick} style={{backgroundColor: '#8E1717'}}><b>No</b></button>
          </div>
      )}
    </div>
  )
};
function PlantProfile({setScreen, plant, forum, setPotPlants}) { // passed in from App -- use {} for parameter lists
  // Write in Javascript here
  const [chat, setChat] = useState(forum.chat);
  const [messageInput, setMessageInput] = useState('')
  const sendMessage = () => {
    const newChat = [...chat, {name:'Alex', message: messageInput}]
    setChat(newChat);
    setMessageInput('');
  };

  return (
    <div className="plant-profile page">
      <button className='profile-backButton' onClick={()=> setScreen("dashboard")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
          <path d="M1.76616 7.37288L0.883078 8.28626L0 7.37288L0.883078 6.45951L1.76616 7.37288ZM23 17.7081C23 18.0507 22.8684 18.3793 22.6342 18.6216C22.3999 18.8639 22.0822 19 21.7509 19C21.4197 19 21.102 18.8639 20.8677 18.6216C20.6335 18.3793 20.5019 18.0507 20.5019 17.7081H23ZM7.12833 14.7458L0.883078 8.28626L2.64923 6.45951L8.89448 12.919L7.12833 14.7458ZM0.883078 6.45951L7.12833 0L8.89448 1.82675L2.64923 8.28626L0.883078 6.45951ZM1.76616 6.08098H14.2567V8.66479H1.76616V6.08098ZM23 15.1243V17.7081H20.5019V15.1243H23ZM14.2567 6.08098C16.5755 6.08098 18.7994 7.03376 20.4391 8.72971C22.0788 10.4257 23 12.7259 23 15.1243H20.5019C20.5019 13.4111 19.8439 11.7681 18.6727 10.5567C17.5015 9.34534 15.913 8.66479 14.2567 8.66479V6.08098Z" fill="black"/>
        </svg>
      </button>
      <img src="https://s3-alpha-sig.figma.com/img/5f77/fd8d/50c9ed8a85fd591577929f22a13e8a20?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LY8evfVjdovxYqUeNzEqumGtYHEG2JRS2HeEjc9e2jKWhHpR7gQoSBJNjt5NrsB44lGl8nk2HkXoVTwn2yVvDYz8kmfhqpF4Qq7J9OTompvscxnTIWDtWqQcnVhZyVAC6B~v4SYGHSz1r1iqfSLmJlnOUzAwVwAGN518wlYyZJLhMIWnAbrxwABen~FD74EUSh3yYDMXCkR0s6YNsRIdknzW6CdQLW2oGObcyAODytHeWV~HDeWsGkoxe5YunvDsVf7ecGXHp89yiJeVYzSuikuIbRQg2W6q7y0LvqIy0IuMAm28iTclpYjzwU7krRfgwC~B8U1B3W5h7~3gx4EhtQ__" alt="" className="profile-image-left" />
      <img src="https://s3-alpha-sig.figma.com/img/5f77/fd8d/50c9ed8a85fd591577929f22a13e8a20?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LY8evfVjdovxYqUeNzEqumGtYHEG2JRS2HeEjc9e2jKWhHpR7gQoSBJNjt5NrsB44lGl8nk2HkXoVTwn2yVvDYz8kmfhqpF4Qq7J9OTompvscxnTIWDtWqQcnVhZyVAC6B~v4SYGHSz1r1iqfSLmJlnOUzAwVwAGN518wlYyZJLhMIWnAbrxwABen~FD74EUSh3yYDMXCkR0s6YNsRIdknzW6CdQLW2oGObcyAODytHeWV~HDeWsGkoxe5YunvDsVf7ecGXHp89yiJeVYzSuikuIbRQg2W6q7y0LvqIy0IuMAm28iTclpYjzwU7krRfgwC~B8U1B3W5h7~3gx4EhtQ__" alt="" className="profile-image-right" />
      <div className='profile-container'>
        <img src={plant.image} alt="" className='profile-content' />
        <div className='profile-name'>{plant.name}</div>
        {plant.inDashboard && (<div className='profile-date'>Planted 3 weeks ago</div>)}
      </div>
      <div className='profile-bottom-content'>
        {plant.inDashboard? (<WarningBox />) : (<PlantNeeds />)}
        <div className='profile-desc'>
          <b>Description</b>
          <p style={{fontWeight: "400", fontFamily: "Karla"}}>{plant.description}</p>
          <b style={{fontSize: "16px"}}>What neighbors in {forum.location} are saying</b>
          {chat.map((message) => (
            <ChattingBox chats={message}></ChattingBox>
          ))}
        </div>
      </div>

      {plant.inDashboard ? (<AlexSaysBox messageInput={messageInput} setMessageInput={setMessageInput} sendMessage={sendMessage}/>)
       : 
       (<AddBox newPlant={plant} setPotPlants={setPotPlants}/>)}
      {/* Write in XML here; use {to break out and write in JS} */}
    </div>
  );
}

export {PlantProfile}; 
// Use {} notation to export more than one component;
