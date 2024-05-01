// Import using relational paths
import '../App.css';
import { useState, useRef} from 'react';
import { weatherOutlook } from '../AppConfig';
function CurrTemp({temps}){
  return (
    <div>
      <div className='temp-container'>
        <div className='temp-text'><b>Chance of Precipitation:</b> {temps.precipitation}</div>
        <div className='temp-text'><b>Wind:</b> {temps.Wind}</div>
        <div className='temp-text'><b>Humidity:</b> {temps.Humidity}</div>
      </div>
      <div className='insights-temp'>
        <p>{temps.temperature}°F</p>
      </div>
    </div>
  )
};


function ProfilePlants(){
  return(
    <div className='season-plant-container'>
      <div className='temp-plants'>
        <img src="https://s3-alpha-sig.figma.com/img/bbe6/f09b/2bae8c5e14b1b0e0fbe723be497d6327?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKygwAOkOsu-nf1YpxwDXM3nSVSKjBxTb7BhS1DJD4S3-TReLNygJ~3qVTJ-xxXVbZcrwlbHYeXJinaCKYUzNKBrIFD67Y4crHJAoZ-RWh7GZoCLfkqhwTYb-GIZVMa33VTg42-kN-oD3VBsLmXlWkegoPNFVFcYxVq-4zLg4QgSEeRf3jTiEfZtXv2MQE3a~VL~kL6-DifgLK41mIoQp8vi34bqRs89yt7Bj3ZNRcJ6AvC59DoHyY37YLDuRbiRpebNI~11xqN4p98V4wnWpQr5J7CcL455enkA~xacirD1lTW80EsJW7udN~AxB3qBn8YQyu9qqmu~yPeHVj-r7A__" alt="" className="insight-plant"/>
      </div>
      <div className='season-plant-desc'>
        <div className='season-plant-warn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 22 32" fill="none">
            <path d="M10.9999 25.3509C10.2865 25.351 9.59299 25.1157 9.02694 24.6815C8.46088 24.2473 8.05391 23.6384 7.86914 22.9493" stroke="#21C6FA" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8.44608 3.76449C9.4686 2.02571 9.98067 1.15552 10.7115 1.02588C10.9023 0.991374 11.0977 0.991374 11.2884 1.02588C12.0192 1.15552 12.5313 2.02571 13.5538 3.76449L16.2568 8.36017C18.1459 11.572 19.6199 15.0106 20.6434 18.5935C22.3077 24.4159 17.9372 30.2124 11.8799 30.2124H10.12C4.0643 30.2124 -0.307758 24.4159 1.35648 18.5935C2.38004 15.0106 3.85402 11.572 5.74312 8.36017L8.44608 3.76449Z" stroke="#18ABDA" strokeWidth="2"/>
          </svg>
        </div>
        <p>With drier conditions for the next two weeks, increase watering frequency to 2-3 times per week</p>
      </div>
    </div>
  )
};


function SeasonFuture({ weather }) {

  return (
    <div>
      <div className="season-future-container">
        <div className="scrollable-content" >
          {weather.map((temps, index) => (
            <div key={index} className="season-future-box">
              <p>
              {temps.time}
              <img src={temps.image} alt=""></img>
              {temps.temperature}°F
              </p>
              <ul>
                <li><b>Precipitation:</b> {temps.precipitation}</li>
                <li><b>Wind:</b> {temps.Wind}</li>
                <li><b>Humidity:</b> {temps.Humidity}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SeasonInsights({setScreen}){
  // Write in Javascript here
  const [ballPosition, setBallPosition] = useState(0);
  const getBackgroundColor = () => {
    console.log(ballPosition);
    if (ballPosition < 100) {
      return '#E0E1BC';
    } else if (ballPosition >= 100 && ballPosition < 200) {
      return '#E9EA9E';
    } else if (ballPosition >= 200 && ballPosition < 300) {
      return '#E1CEBC';
    } else {
      return '#BCD8E1';
    }
  };
  const prevPosition = useRef(null);

  const handleTouchMove = (e) => {
    e.preventDefault();
    // Calculate the position of the black ball within the rectangular bar
    const rect = e.target.getBoundingClientRect();
    const newPosition = e.touches[0].clientX - rect.left;

    if (prevPosition.current !== null) {
      const delta = newPosition - prevPosition.current;
      setBallPosition((prevPosition) => prevPosition + delta);
    } else {
      setBallPosition(newPosition);
    }

    prevPosition.current = newPosition;
  };
  return (
    <div className="season-insights page" style={{ backgroundColor: getBackgroundColor() }}>
      <img src="https://s3-alpha-sig.figma.com/img/5f77/fd8d/50c9ed8a85fd591577929f22a13e8a20?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LY8evfVjdovxYqUeNzEqumGtYHEG2JRS2HeEjc9e2jKWhHpR7gQoSBJNjt5NrsB44lGl8nk2HkXoVTwn2yVvDYz8kmfhqpF4Qq7J9OTompvscxnTIWDtWqQcnVhZyVAC6B~v4SYGHSz1r1iqfSLmJlnOUzAwVwAGN518wlYyZJLhMIWnAbrxwABen~FD74EUSh3yYDMXCkR0s6YNsRIdknzW6CdQLW2oGObcyAODytHeWV~HDeWsGkoxe5YunvDsVf7ecGXHp89yiJeVYzSuikuIbRQg2W6q7y0LvqIy0IuMAm28iTclpYjzwU7krRfgwC~B8U1B3W5h7~3gx4EhtQ__" alt="" className="insight-image" />
      <img src="https://s3-alpha-sig.figma.com/img/9d0c/9998/ac3501dad3f660fa3a50d296eaeb9870?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAb7HmXWYOtSM1eeJj-x8SbzVIfPg9Vh06RK4BRANOadTMVNzXreoXM7tfFVteoDz9VvpIuSq2rFrJ31FEiCtMrmKQE2xzVToqqc8t1FI8VvcoCNFnZAw6~UqjnWAQcRG9IGmgG~0~gQgre8k55LfTEvXoHg1c5xePrTzOXHxdXK5L8pt1NMA~JVWzJaiDVyxjaVBoWFEAcLv1qc-zNCscmiKvWvzB6Wiz0RuzoxKIoeSPKBtCve2QIqXtkfObhhRYHv2zAX9S2qJ91fsI7y2BxB4VoiNFhQiP1XEttkJGZ3hkNG0mC4yZyGSFC4baMWFEr13ULtbDpGpXdj-ZPqEQ__" alt="" className="insight-cloud"/>
      <h2>Arlington, TX</h2>
      <CurrTemp temps={weatherOutlook[0]}></CurrTemp>

      <SeasonFuture weather={weatherOutlook} />

      <h1> Season Insights</h1>
      <pre>   Spring       Summer       Fall         Winter</pre>
      <div className="scroll-container" onTouchMove={handleTouchMove}>
        <div
          className="black-ball"
          style={{ left: ballPosition }}
        ></div>
      </div>
      <div className='season-bottom-container'>
        <ProfilePlants />
        <ProfilePlants /> 
      </div>
    </div>
  );
}

export {SeasonInsights}; 
// Use {} notation to export more than one component;
