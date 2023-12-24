import Image from "next/image";
import LogoWhite from "public/logo-white.svg";
import Header from "components/Header/Header";
import BackgroundImage from "components/BackgroundImage/BackgroundImage";

import mobileBackgroundImg from "public/background_mobile.png";

export default function Home() {
  return (
    <main className="mainContainer">
      {/*<BackgroundImage src={mobileBackgroundImg} alt="test">*/}
        <h1 className="heroTitle">
          Pump Up Your Event with Rent Noise
          <div>The Premier Speaker Rental in Los Angeles</div>
        </h1>

        <div className="announcement">
            Full website is under construction. However you can get info and consultation through our Google Business Account or Instagram
        </div>
      {/*</BackgroundImage>*/}
    </main>
  );
}
