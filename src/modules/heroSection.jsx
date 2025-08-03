"use client";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import ballon1 from "../../public/balloons/1.png";
import ballon2 from "../../public/balloons/2.png";
import ballon3 from "../../public/balloons/3.png";
import ballon4 from "../../public/balloons/4.png";
import ballon5 from "../../public/balloons/5.png";
import ballon6 from "../../public/balloons/7.png";
import ballon7 from "../../public/balloons/6.png";
import "../styles/App.css";
import BalloonSVG from "../assets/ybdaylogo.svg";
import UserAvatar from "../modules/login";
import "../styles/ballons.css";

function Balloons() {
  return (
    <div className="balloons-container">
      <img src={ballon1} className="balloon" alt="balloon1" />
      <img src={ballon2} className="balloon" alt="balloon2" />
      <img src={ballon3} className="balloon" alt="balloon3" />
      <img src={ballon4} className="balloon" alt="balloon4" />
      <img src={ballon5} className="balloon" alt="balloon5" />
      <img src={ballon6} className="balloon" alt="balloon6" />
      <img src={ballon7} className="balloon" alt="balloon7" />
    </div>
  );
}





const HeroSection = ({user}) => {
 const ballon = Balloons()
  return (
    <div className="birthday-page">
      <div className="balloon-container">{ballon}</div>
      <section className="hero-section ">
        {/* Hero section  start  */}
        <div className="hero-container">
          <div className="hero-header">
            <Link to="/">
              <img src={BalloonSVG} alt="logo" width={200} height={100} className="logo"/>
            </Link>
            <div>
              {user ? (
                <Link to="/profile">
                  <UserAvatar user={user} />
                </Link>
              ) : (
                <Link to="/login" className="login-signup-btn">
                  <button className="login " >
                    <img src={profile} alt="profile" height={20} width={20} />
                    Login  
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="hero-content">
            <h1>
              Let's <span>Celebrate</span> Together
            </h1>
            <p>
              Create unforgettable birthday celebrations and bring friends
           <br/>   together virtually
            </p>
            <div className="join-section">
              <input
                type="text"
                placeholder="Paste link here"
                className="join-link"
              />
              <Link to="/eventpage">
                <button className="join-btn">Join</button>
              </Link>
            </div>
            <div className="after-link">
              <div className="lines"></div>
              <span>OR</span>
            <div className="lines"></div>
            </div>
            <Link to="/create-event" className="create-event">
              <button className="create-event-btn">
               Host your Event
              </button>
            </Link>
          </div>
          {/* Hero section ends */}
          {/* Hero footer starts */}
          <div className="hero-footer">
            <ul>
              <li>
                <Link to="/howitwork">How it work </Link>
              </li>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/Terms & Conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          {/* Hero footer ends */}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
