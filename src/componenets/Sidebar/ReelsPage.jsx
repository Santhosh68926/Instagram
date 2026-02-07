import "./ReelsPage.scss";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShareModal from "../Sidebar/ShareModal";

const reels = [
  {
    id: 1,
    video: "reelsVideo/reel1.mp4",
    user: "Surya Ishu",
    desc: "Ishu & Gowtham ❤️ #kadhal",
    likes: "32.1k",
  },
   {
    id: 2,
    video: "reelsVideo/reel2.mp4",
    user: "Dinesh love",
    desc: "Aagastha 💕 #love",
    likes: "201k",
  },
  {
    id: 3,
    video: "reelsVideo/reel3.mp4",
    user: "Jeeva_cinema",
    desc: "Perunthil nee 💕 #love",
    likes: "3101k",
  },
  {
    id: 4,
    video: "reelsVideo/reel4.mp4",
    user: "tamil_cinema",
    desc: "Valkai.. 😒 #Alone",
    likes: "4201k",
  },
  {
    id: 5,
    video: "reelsVideo/reel5.mp4",
    user: "Ashokselvan love",
    desc: "Couple love 😍 #love",
    likes: "320k",
  },
  {
    id: 6,
    video: "reelsVideo/reel6.mp4",
    user: "Men characters",
    desc: "Men's love 💕 #love",
    likes: "4201k",
  },
  {
    id: 7,
    video: "reelsVideo/reel7.mp4",
    user: "Pondicherry_tour",
    desc: "Pondicy diaries #Mass",
    likes: "350.1k",
  },
  {
    id: 8,
    video: "reelsVideo/reel8.mp4",
    user: "love_cinema",
    desc: "sollaponal ennal..❤️",
    likes: "3201k",
  },
  {
    id: 9,
    video: "reelsVideo/reel9.mp4",
    user: "ayothi 💖🎶",
    desc: "self-motivate.. ",
    likes: "3201k",
  },
  {
    id: 10,
    video: "reelsVideo/reel10.mp4",
    user: "silunu oru kadhal",
    desc: "surya & Ishu 🔥 #Kadhal",
    likes: "3201k",
  },
  {
    id: 11,
    video: "reelsVideo/reel11.mp4",
    user: "sirai Tamil_cinema",
    desc: "Pure love Anbuselvi #Love",
    likes: "3201k",
  },
  {
    id: 12,
    video: "reelsVideo/reel12.mp4",
    user: "tamil_cinema 90's ",
    desc: "Vijayakanth love ❤️🎶 #love-bgm",
    likes: "3201k",
  },
  {
    id: 13,
    video: "reelsVideo/reel13.mp4",
    user: "tamil...",
    desc: "Kadhal kavithai ...❤️",
    likes: "3201k",
  },
  {
    id: 14,
    video: "reelsVideo/reel14.mp4",
    user: "Rhythm_cinema",
    desc: "Arjunmeena pura love #Rhythm ❤️",
    likes: "3201k",
  },
  {
    id: 15,
    video: "reelsVideo/reel15.mp4",
    user: "tamil_cinema",
    desc: "vVellamanam..😍 #song",
    likes: "3201k",
  },
  {
    id: 16,
    video: "reelsVideo/reel16.mp4",
    user: "feeling_alone",
    desc: "You? .. #alone",
    likes: "3201k",
  },
  {
    id: 17,
    video: "reelsVideo/reel17.mp4",
    user: "MSD_ dhoni rasigan",
    desc: "Thala_07 😍 #Mass",
    likes: "3201k",
  },
  {
    id: 18,
    video: "reelsVideo/reel18.mp4",
    user: "tamil_cinema",
    desc: "friends_.. #comedy",
    likes: "3201k",
  },
  {
    id: 19,
    video: "reelsVideo/reel19.mp4",
    user: "tamil_alone ",
    desc: "jobs_alone 😒 #travel",
    likes: "3201k",
  },
  {
    id: 20,
    video: "reelsVideo/reel20.mp4",
    user: "tamil_cinema",
    desc: "pure love 💖 #Kadhal",
    likes: "3201k",
  },
  {
    id: 21,
    video: "reelsVideo/reel21.mp4",
    user: "Dharmadhurai",
    desc: "Aandipatti..😍 #love",
    likes: "3201k",
  },
  {
    id: 22,
    video: "reelsVideo/reel22.mp4",
    user: "iyarkai_cinema",
    desc: "Iyarkai 💖 #Nansi",
    likes: "3201k",
  },
  {
    id: 23,
    video: "reelsVideo/reel23.mp4",
    user: "tamil_cinema",
    desc: "First love 🔥 #Love",
    likes: "3201k",
  },
  {
    id: 24,
    video: "reelsVideo/reel24.mp4",
    user: "Nivin & pallavi ",
    desc: "First sight ❤️ 🔥 #Love",
    likes: "3201k",
  },
  {
    id: 25,
    video: "reelsVideo/reel25.mp4",
    user: "Goals_love marriage",
    desc: "Marriage goals 💖 #love",
    likes: "3201k",
  },
  {
    id: 26,
    video: "reelsVideo/reel26.mp4",
    user: "tamil_cinema",
    desc: "Nanban..💔 #alone",
    likes: "3201k",
  },
  {
    id: 27,
    video: "reelsVideo/reel27.mp4",
    user: "feeling_alone",
    desc: "peace-dharmadurai.. #peace",
    likes: "3201k",
  },
  {
    id: 28,
    video: "reelsVideo/reel28.mp4",
    user: "tamil_data",
    desc: "Data_memory #Memories❤️",
    likes: "3201k",
  },
  {
    id: 29,
    video: "reelsVideo/reel29.mp4",
    user: "memo-reels",
    desc: "Missing_friends..💔 #Missing",
    likes: "3201k",
  },
  {
    id: 30,
    video: "reelsVideo/reel30.mp4",
    user: "tamil_story",
    desc: "story_lover..❤️ #Stories",
    likes: "3201k",
  },
  {
    id: 31,
    video: "reelsVideo/reel31.mp4",
    user: "Tamil_Songs",
    desc: "Vaaranam Aayiram..❤️ #love",
    likes: "3201k",
  },
  {
    id: 32,
    video: "reelsVideo/reel32.mp4",
    user: "tamil_cinema",
    desc: "Dharmadurai_love..💖 #Heart",
    likes: "3201k",
  },
  {
    id: 33,
    video: "reelsVideo/reel33.mp4",
    user: "tamil_thendral",
    desc: "vaithegi love.❤️ #vijayakanth #love",
    likes: "3201k",
  },
  {
    id: 34,
    video: "reelsVideo/reel34.mp4",
    user: "tamil_love",
    desc: "Love joe.. #Saree",
    likes: "3201k",
  },
  {
    id: 35,
    video: "reelsVideo/reel35.mp4",
    user: "tamil_love",
    desc: "Movie is Therapy..💕 #Therapy",
    likes: "3201k",
  },
  {
    id: 36,
    video: "reelsVideo/reel36.mp4",
    user: "tamil_god loves",
    desc: "Kandipa unakuthan..🤍 #pain",
    likes: "3201k",
  },
  {
    id: 37,
    video: "reelsVideo/reel37.mp4",
    user: "Pure_'loves'",
    desc: "sandakozhi..❤️ #love",
    likes: "3201k",
  },
  {
    id: 38,
    video: "reelsVideo/reel38.mp4",
    user: "tamil_Kadhal",
    desc: "Kadhal menories 💖 #KarthiRoja",
    likes: "3201k",
  },
  {
    id: 39,
    video: "reelsVideo/reel39.mp4",
    user: "tamil_cinema",
    desc: "Peacefully life🎶🎶..",
    likes: "3201k",
  },
  {
    id: 40,
    video: "reelsVideo/reel40.mp4",
    user: "tamil_cinema",
    desc: "Kaarkuzhal kathal..💕 #love",
    likes: "3201k",
  },
  {
    id: 41,
    video: "reelsVideo/reel41.mp4",
    user: "CSK-Payaluga..",
    desc: "CSK🔥 #YELLOW",
    likes: "3201k",
  },
  {
    id: 42,
    video: "reelsVideo/reel42.mp4",
    user: "tamil_cinema",
    desc: "entry 🔥 #Mass",
    likes: "3201k",
  },
  {
    id: 43,
    video: "reelsVideo/reel43.mp4",
    user: "tamil_cinema",
    desc: "entry 🔥 #Mass",
    likes: "3201k",
  },
  {
    id: 44,
    video: "reelsVideo/reel44.mp4",
    user: "tamil_cinema",
    desc: "entry 🔥 #Mass",
    likes: "3201k",
  },
  {
    id: 45,
    video: "reelsVideo/reel45.mp4",
    user: "tamil_cinema",
    desc: "entry 🔥 #Mass",
    likes: "3201k",
  },
  {
    id: 46,
    video: "reelsVideo/reel46.mp4",
    user: "tamil_cinema",
    desc: "entry 🔥 #Mass",
    likes: "3201k",
  },
];

function Reel({ reel }) {
  const videoRef = useRef(null);

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(reel.likes);
  const [muted, setMuted] = useState(true);
  const [openShare, setOpenShare] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  const toggleSound = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="Reel">
      {/* <div className="ReelsTopBar">
  <i className="bi bi-arrow-left" onClick={() => navigate(-1)}></i>
</div> */}

      <video
        ref={videoRef}
        src={reel.video}
        loop
        autoPlay
        unmuted
        playsInline
        className="ReelVideo"
      />

      <div className="ReelActions">
        <div className="LikesAction">
           <i
          className={`bi ${liked ? "bi-heart-fill liked" : "bi-heart"}`}
          onClick={handleLike}
        ></i>
        <span>{likes}</span>
        </div>
        <i className="bi bi-chat"></i>

        {/* SHARE */}
        <i className="bi bi-send" onClick={() => setOpenShare(true)}></i>

        <i
          className={`bi ${muted ? "bi-volume-mute" : "bi-volume-up"}`}
          onClick={toggleSound}
        ></i>
      </div>

      <div className="ReelInfo">
        <span className="User">@{reel.user}</span>
        <p>{reel.desc}</p>
      </div>

      {openShare && <ShareModal onClose={() => setOpenShare(false)} />}
    </div>
  );
}


function ReelsPage() {
  const reelRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target.querySelector("video");
          if (entry.isIntersecting) video.play();
          else video.pause();
        });
      },
      { threshold: 0.75 }
    );

    reelRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ReelsPage">

      {/* 🔙 Overlay Header inside reels */}
      <div className="ReelsHeader">
        <i className="bi bi-arrow-left" onClick={() => navigate(-1)}></i>
      </div>

      {reels.map((reel, index) => (
        <div
          className="ReelWrapper"
          key={reel.id}
          ref={el => (reelRefs.current[index] = el)}
        >
          <Reel reel={reel} />
        </div>
      ))}
    </div>
  );
}

export default ReelsPage;
