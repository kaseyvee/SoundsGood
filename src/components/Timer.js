import React, {useState} from "react";



const Timer = () => {


    const [hour, setHour] = useState(420);
    const [minute, setMinute] = useState(42);
    const [second, setSecond] = useState(69);

    return (
        <div className="timer">
            <div className="timer_time">
                <h1 className="timer_time_text">{`${hour} : ${minute} : ${second}`}</h1>
            </div>  

            <div className="timer_userbox">
                <button className="timer_userbox_button">
                    START THE TIMER
                </button>
            </div>
        </div> 
          
    );  
}

export default Timer; 