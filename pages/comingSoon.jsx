import { useState, useEffect } from "react";
import { FaChampagneGlasses } from "react-icons/fa6";

const Countdown = ({}) => {
  const [primaryColor, setPrimaryColor] = useState("#061826");
  const [secondaryColor, setSecondaryColor] = useState("#2C4053");
  const [textColor, setTextColor] = useState("#ffffff");
  const [startTime, setStartTime] = useState(1713000001111);
  //const [startTime, setStartTime] = useState(Date.now() + 450 * 3600 * 1000);
  console.log("setPrimaryColor", startTime);
  const [timeRemaining, setTimeRemaining] = useState(
    // dummy time remaining
    {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  );

  const calculateTimeRemaining = () => {
    const timeRemaining = startTime - Date.now();
    // console.log(timeRemaining);
    return {
      days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
      seconds: Math.floor((timeRemaining / 1000) % 60),
    };
  };

  // Update time remaining every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
      console.log("Time remaining" + timeRemaining);
    }, 1000);

    //    return interval
    return () => {
      console.log("CLEAR TIME");
      clearInterval(interval);
    };
  }, [startTime]);
  console.log("start Timeee",startTime)
  return (
    <div className=" min-h-screen flex   justify-center items-center bg-black">
      {/* container */}

      <div
        className="flex w-[100%] z-30 md:w-6/12 bg-primary rounded-md count sm:px-2 px-1 md:mt-32"
        style={{ backgroundColor: primaryColor }}
      >
        {/* Countdown Titles */}
        <div className="contain-tile w-1/4 h-full flex flex-col justify-center items-center pt-3 pb-1">
          <div
            className="bg-secondary aspect-square w-11/12 rounded-md flex justify-center items-center"
            style={{ backgroundColor: secondaryColor }}
          >
            <span
              className="transition  text-6xl font-bold text-white flex justify-center items-center"
              style={{ color: textColor }}
              suppressHydrationWarning={true}
            >
              {timeRemaining.days}
            </span>
          </div>
          <span
            className="transition  text-xl font-semibold text-white flex justify-center items-center"
            style={{ color: textColor }}
          >
            Days
          </span>
        </div>

        <div className="contain-tile w-1/4 h-full flex flex-col justify-center items-center pt-3 pb-1">
          <div
            className="bg-secondary aspect-square w-11/12 rounded-md flex justify-center items-center"
            style={{ backgroundColor: secondaryColor }}
          >
            <span
              className="transition  text-6xl font-bold text-white flex justify-center items-center"
              style={{ color: textColor }}
              suppressHydrationWarning={true}
            >
              {timeRemaining.hours}
            </span>
          </div>
          <span
            className="transition count-other text-xl font-semibold text-white flex justify-center items-center"
            style={{ color: textColor }}
          >
            Hours
          </span>
        </div>

        <div className="contain-tile w-1/4 h-full flex flex-col justify-center items-center pt-3 pb-1">
          <div
            className="bg-secondary aspect-square w-11/12 rounded-md flex justify-center items-center"
            style={{ backgroundColor: secondaryColor }}
          >
            <span
              className="transition count-text text-6xl font-bold text-white flex justify-center items-center"
              style={{ color: textColor }}
              suppressHydrationWarning={true}
            >
              {timeRemaining.minutes}
            </span>
          </div>
          <span
            className="transition count-other text-xl font-semibold text-white flex justify-center items-center"
            style={{ color: textColor }}
          >
            Minutes
          </span>
        </div>

        <div className="contain-tile w-1/4 h-full flex flex-col justify-center items-center pt-3 pb-1">
          <div
            className="bg-secondary aspect-square w-11/12 rounded-md flex justify-center items-center"
            style={{ backgroundColor: secondaryColor }}
          >
            <span
              className="transition count-text text-6xl font-bold text-white flex justify-center items-center"
              style={{ color: textColor }}
              suppressHydrationWarning={true}
            >
              {timeRemaining.seconds}
            </span>
          </div>
          <span
            className="transition count-other text-xl font-semibold text-white flex justify-center items-center"
            style={{ color: textColor }}
          >
            Seconds
          </span>

          <div className="relative text-white xs:left-[-150px] xs:top-[100px] xl:top-[70px] xl:left-[-300px] font-bold xs:text-xs text-l  w-60">
            <span className="text-green-200 hover:text-red-400 text-xl animate-ping ">
              Coming Soon{" "}
            </span>
            <div>
              <span className="text-blue-300 text-3xl hover:text-orange-400   ">
                ITPROMAX.COM
              </span>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute object-cover w-full h-full top-0 left-0 -mt-32"
        alt="img"
        src={
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </div>
  );
};

export default Countdown;
