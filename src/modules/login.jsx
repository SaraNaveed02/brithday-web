import React from "react";
import profile from "../assets/profile.png";
import girlImage from "../assets/woman.png";
import boyImage from "../assets/man.png";

const UserAvatar = ({ user }) => {
    
  const getFallbackImage =()=>{
    if(user?.gender === "female") return girlImage;
    if(user?.gender === "male") return boyImage;
return profile;
  }
  const handleImageError= (e)=>{
    e.target.onError = null;
    e.target.src = getFallbackImage()
  }
  const profilePic = user ?.photoURL || getFallbackImage()

  return  (
<img src={profilePic}
alt="user profile"
onerror={handleImageError}

/>  
)
};

export default UserAvatar;
