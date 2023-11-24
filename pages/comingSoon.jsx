import { Container } from "postcss";
import React, { useState, useRef, useEffect } from "react";


const CountDown = () => {
  const [countDays, setCountDays] = useState("00");
  const [countHours, setCountHours] = useState("00");
  const [countMinutes, setCountMinutes] = useState("00");
  const [countSeconds, setCountSeconds] = useState("00");


  let interval = useRef();
  const startTimer = ({ yearTrget, monthTrget, dayTrget }) => {
    const countdowndate = new Date(
      `${yearTrget},${monthTrget},${dayTrget},  00:00:00`
    ).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdowndate - now;


      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        //update Timer
        setCountDays(days);
        setCountHours(hours);
        setCountMinutes(minutes);
        setCountSeconds(seconds);
      }
    }, 1000);
  };


  useEffect(() => {
    let intervalClean = interval.current;
    startTimer({ yearTrget: "2023", monthTrget: "11", dayTrget: "31" });
    return () => {
      clearInterval(intervalClean);
    };
  });
  return (
  

<div className=" w-full h-auto min-h-screen object-cover object-center ">
      {/* ---content--- */}


      <img
        className=" w-full !h-full min-h-screen object-cover object-center"
        src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />


      <div className="text-center justify-center items-center flex h-[100vh]  absolute md:top-[3px]  md:left-[1060px] top-[200px] left-[185px]">
        <div className="bg-red-400">
<div>    Days
</div>

<div>
    Hours
</div>

<div>
    Minutes
</div>

<div>
    Seconds
</div>

</div>
      </div>



    </div>


    
  );
};


export default CountDown;






//primary #061826"

//Secondary #2C4053

//text color #ffffff