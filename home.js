import React from "react";

import Carousel from "../../../components/common/Carousel";

import placeholder4 from "../../../images/HeroImages/laptopman.png";
import placeholder5 from "../../../images/HeroImages/laptopman2.png";
import placeholder6 from "../../../images/HeroImages/rocket.png";




export default function Home() {
  return (
    <div className={style.Home}>
      <Carousel
        interval={3000}
        callsToAction={[
          <div>
            click the button<button>hello</button>
          </div>,
          <div>
            please<button>hello</button>
          </div>,
          <div>
            hello?<button>hello</button>
          </div>
        ]}
        images={[placeholder4, placeholder5, placeholder6]}
      />
    </div>
  );
}
