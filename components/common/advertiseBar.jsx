import React from "react";
import Marquee from 'react-fast-marquee';
const AdvertiseBar = () => {
  return (
    <div className="py-1 px-2 bg-stone-800 text-white text-sm">
       {/* <div className="flex relative overflow-x-hidden text-white text-sm">
        <div className=" animate-marquee whitespace-nowrap">
          <span className="mx-2">
            Marquee 1 has taken a bold step to overcome that and create
          </span>
          <span className="mx-2">•</span>
          <span>
            Marquee 1 has taken a bold step to overcome that and create
          </span>
          <span className="mx-2">•</span>
          <span className="mx-2">
            Marquee 1 has taken a boldreate through modern reproductive
            treatment.
          </span>
        </div>

      
      </div>  */}



      <Marquee pauseOnHover>
       
      <span className="mx-2">
      The iPhone 15 and 15 Plus have some notable upgrades, too, including the Dynamic Island that debuted with last year's Pro lineup and a matte finish on the back glass
          </span>
          <span className="mx-2">•</span>
          <span>
            Marquee 1 has taken a bold step to overcome that and create
          </span>
          <span className="mx-2">•</span>
          <span className="mx-2">
            Marquee 1 has taken a boldreate through modern reproductive
            treatment.
          </span>



      </Marquee>
    </div>
  );
};

export default AdvertiseBar;
