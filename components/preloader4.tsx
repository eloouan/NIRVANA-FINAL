import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
      <div className="preloader">
        <div className="banner">
          <div className="clouds">
            <img className="img1" src="cloud1.png"  />
            <img className="img2" src="cloud2.png" />
            <img className="img3" src="cloud3.png" />
            <img className="img4" src="cloud4.png" />
            <img className="img5" src="cloud5.png"  />
            <img className="img6" src="cloud7.png" />
            <img className="img7" src="cloud7.png" />
          </div>
        </div>
      </div>
  );
};

export default PreLoader;

