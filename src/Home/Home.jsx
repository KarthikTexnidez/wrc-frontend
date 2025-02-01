import "./Home.css";
import wrclogo from "./assets/white logo wrc.png";
import rallylogo from "./assets/rallywhitelogo.png";
import navlogo from "./assets/navigationbarwhite.png";
import heroimage from "./assets/hero.png";
import wrcgreylogo from "./assets/black logo wrc.png";
import polandflag from "./assets/poland-national-flag-transparent-free-png.webp";
import swedenflag from "./assets/sweden png logl.png";
import kenyaflag from "./assets/kenya flag png.png";
import croatiaflag from "./assets/CROATIOA FLAG PNG.png";
import portugalflag from "./assets/portugal flag.png";
import italyflag from "./assets/italy flag png.png";
import finlandflag from "./assets/FINLAD FLAG.png";
import one from "./assets/1d92426f-e20a-4d49-b2e8-80e5fe378f6a_290125br1.jpg";
import two from "./assets/4c512df3-02f3-4654-b1cd-7be101d608cb_300125at-tan2.jpg";
import three from "./assets/59ddd4a0-14af-4620-b6c0-1968e0b94fbb_3100125at-mce.jpg";
import four from "./assets/6e9ef8c6-d568-416a-a049-0313f2352901_280125hmsgfou1.jpg";
import five from "./assets/866cb725-8629-4aa8-a3fd-293e55e169c1_300125-at-munster.jpg";
import six from "./assets/d2882624-cdb7-4cde-8861-ec1b34ced095_010225-at-hankook.jpg";
import seven from "./assets/e3995c81-0e47-4b0d-a93d-31da70ca90e8_290125-at-eva2.jpg";
import monteCarloImage from "./assets/1.jpg";
import hankookImage from "./assets/2.jpg";
import pointsUpdateImage from "./assets/3.jpg";
import regulationsImage from "./assets/4.jpg";
import backstoriesImage from "./assets/5.jpeg";
import streaming from "./assets/streaming Images.jpg";
import iconone from "./assets/footerHankook.png";
import icontwo from "./assets/footerWolf.png";
import iconthree from "./assets/footerAsahi.png";
import iconfour from "./assets/footerFanatec.png";
import iconfive from "./assets/footerForum.png";
import iconsix from "./assets/footerP1v3.png";
import iconseven from "./assets/footerSafetyCulture2.png";
import iconeight from "./assets/footereas.png";
import day from "./assets/lightlogo.png";
import night from "./assets/NightLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [theme, setTheme] = useState("day");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "day" ? "night" : "day"));
  };

  const navlist = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Races", path: "/" },
    { id: 3, name: "Teams", path: "/" },
    { id: 4, name: "Standing", path: "/standings" },
    { id: 5, name: "News", path: "/" },
    { id: 6, name: "Contact", path: "/" },
  ];

  const rallyEvents = [
    { id: 1, flag: polandflag, name: "RALLYE MONTE-CARLO", date: "25-28 Jan" },
    { id: 2, flag: swedenflag, name: "RALLY SWEDEN", date: "15-18 Feb" },
    { id: 3, flag: kenyaflag, name: "SAFARI RALLY KENYA", date: "10-20 Mar" },
    { id: 4, flag: croatiaflag, name: "CROATIA RALLY", date: "15-25 Apr" },
    {
      id: 5,
      flag: portugalflag,
      name: "VODAFONE RALLY DE PORTUGAL",
      date: "1-20 May",
    },
    {
      id: 6,
      flag: italyflag,
      name: "RALLY ITALIA SARDEGNA",
      date: "4-15 June",
    },
    {
      id: 7,
      flag: finlandflag,
      name: "SECTO RALLY FINLAND",
      date: "8-29 July",
    },
  ];

  const newsData = [
    {
      date: "FRI 31 JAN 2025",
      title: "McErlean’s Rally1 Debut Fuels Excitement for...",
      description: "Irishman Josh McErlean emerged from the FIA World Rally...",
      image: one,
    },
    {
      date: "FRI 31 JAN 2025",
      title: "Tänak Embraces the Upsides of Challenging...",
      description:
        "Hyundai star Ott Tänak says there are plenty of positives to take...",
      image: two,
    },
    {
      date: "THU 30 JAN 2025",
      title: "More Than Machine Highly Commended at The Race...",
      description:
        "More Than Machine, the acclaimed docuseries following M-Sport...",
      image: three,
    },
    {
      date: "WED 29 JAN 2025",
      title: "Evans optimistic after Rallye Monte-Carlo...",
      description:
        "Toyota driver Elfyn Evans emerged from last week’s Rallye Monte-...",
      image: four,
    },
    {
      date: "WED 29 JAN 2025",
      title: "WRC’s Young Driver Team Prepares for Snowy...",
      description:
        "Rising stars Claire Schönborn and Lyssia Baudet are ready to face...",
      image: five,
    },
    {
      date: "TUE 28 JAN 2025",
      title: "“I’m not here to play behind,” says Hyundai...",
      description:
        "Adrien Fourmaux has wasted no time proving that his rookie statu...",
      image: six,
    },
    {
      date: "TUE 28 JAN 2025",
      title: "“I’m not here to play behind,” says Hyundai...",
      description:
        "Adrien Fourmaux has wasted no time proving that his rookie statu...",
      image: seven,
    },
  ];

  const rallyNews = [
    {
      publishedOn: "FRI 3 JAN 2025",
      headline: "Entry List: Rallye Monte-Carlo 2025",
      summary:
        "Hyundai’s Thierry Neuville will lead away a 70-car entry for this month’s season-...",
      thumbnail: monteCarloImage,
    },
    {
      publishedOn: "MON 6 JAN 2025",
      headline: "Hankook’s WRC tyres impress Fourmaux ahead of 2025 season",
      summary:
        "Hyundai driver Adrien Fourmaux is pleased with his initial contact with Hankook, the...",
      thumbnail: hankookImage,
    },
    {
      publishedOn: "WED 11 DEC 2024",
      headline: "Sharper focus on rally wins with 2025 WRC points update",
      summary:
        "The FIA World Rally Championship (WRC) will debut a refined points system in 2025...",
      thumbnail: pointsUpdateImage,
    },
    {
      publishedOn: "THU 12 DEC 2024",
      headline: "2027 Regulations Provide Clear Roadmap for Future...",
      summary:
        "WRC Promoter has welcomed the announcement of the technical regulation...",
      thumbnail: regulationsImage,
    },
    {
      publishedOn: "TUE 10 DEC 2024",
      headline: "WRC Backstories: Luke Anear",
      summary:
        "In the latest episode of WRC Backstories, Becs Williams catches up with a person...",
      thumbnail: backstoriesImage,
    },
    {
      publishedOn: "WED 11 DEC 2024",
      headline: "Sharper focus on rally wins with 2025 WRC points update",
      summary:
        "The FIA World Rally Championship (WRC) will debut a refined points system in 2025...",
      thumbnail: pointsUpdateImage,
    },
    {
      publishedOn: "THU 12 DEC 2024",
      headline: "2027 Regulations Provide Clear Roadmap for Future...",
      summary:
        "WRC Promoter has welcomed the announcement of the technical regulation...",
      thumbnail: regulationsImage,
    },
  ];

  return (
    <>
      <div className="nav-bar" style={{background:theme === 'day' ? '#202A44' : 'black'}}>
        <img id="wrclogo" src={wrclogo} alt="" />
        <div className="lists">
          {navlist.map((list) => (
            // eslint-disable-next-line react/jsx-key
            <ul>
              <Link to={list.path}><li key={list.id}>{list.name}</li></Link>
            </ul>
          ))}
        </div>
        <img id="navlogo" src={navlogo} alt="" />
        <div className="right-red-box" style={{backgroundColor :theme === 'day' ? '#AC0000' : 'black'}}>
          <div
            onClick={toggleTheme}
            style={{
              backgroundColor: theme === "day" ? "black" : "white", //
              color: theme === "day" ? "#000" : "#fff", //
              padding: "0px",
              cursor: "pointer",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="toggle"
          >
            {theme === "day" ? (
              <img
                src={night}
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
            ) : (
              <img src={day} style={{ width: "30px", height: "30px" }} alt="" />
            )}
          </div>
          <img src={rallylogo} alt="" />
        </div>
      </div>
      <div className="hero">
        <img src={heroimage} alt="" />
        <div className="hero-top">
          <img src={wrcgreylogo} alt="" />
        </div>
        <p>Pushing the limits</p>
      </div>
      <div
        className="event"
        style={{ backgroundColor: theme === "day" ? "white" : "black" }}
      >
        <h1 style={{ fontFamily: "poppins" }}>Events</h1>
        {rallyEvents.map((event) => (
          <div className="event-table" key={event.id}>
            <h1>{event.id}</h1>
            <img src={event.flag} alt="" />
            <h2>{event.name}</h2>
            <h3>{event.date}</h3>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
        className="button"
      >
        <button
          style={{
            backgroundColor: "red",
            border: "none",
            width: "180px",
            height: "50px",
            borderRadius: "10px",
            color: "white",
            fontFamily: "poppins",
            fontWeight: "300",
          }}
        >
          Subscribe For Updates
        </button>
      </div>
      <div
        className="news-container"
        style={{ backgroundColor: theme === "day" ? "white" : "black" }}
      >
        {newsData.map((news, index) => (
          <div
            key={index}
            className="news-card"
            style={{ backgroundColor: theme === "day" ? "white" : "black" }}
          >
            <img src={news.image} alt={news.title} className="news-image" />
            <div
              className="news-content"
              style={{ color: theme === "day" ? "black" : "white" }}
            >
              <p
                className="news-date"
                style={{ color: theme === "day" ? "black" : "white" }}
              >
                {news.date}
              </p>
              <h2
                className="news-title"
                style={{ color: theme === "day" ? "black" : "white" }}
              >
                {news.title}
              </h2>
              <p
                className="news-description"
                style={{ color: theme === "day" ? "black" : "white" }}
              >
                {news.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="image-container">
        <img src={streaming} alt="" />
      </div>
      <div
        className="news-container"
        style={{ backgroundColor: theme === "day" ? "white" : "black" }}
      >
        {rallyNews.map((value, index) => (
          <div key={index} className="news-card">
            <img
              src={value.thumbnail}
              alt={value.title}
              className="news-image"
            />
            <div
              className="news-content"
              style={{ backgroundColor: theme === "day" ? "white" : "black" }}
            >
              <p
                className="news-date"
                style={{ color: theme === "day" ? "black" : "white" }}
              >
                {value.publishedOn}
              </p>
              <h2
                className="news-title"
                style={{ color: theme === "day" ? "black" : "white" }}
              >
                {value.headline}
              </h2>
              <p
                className="news-description"
                style={{ color: theme === "day" ? "black" : "white" }}
              >
                {value.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <div className="footer-image">
          <img src={iconone} alt="" />
          <img src={icontwo} alt="" />
          <img src={iconthree} alt="" />
          <img src={iconfour} alt="" />
          <img src={iconfive} alt="" />
          <img src={iconsix} alt="" />
          <img src={iconseven} alt="" />
          <img src={iconeight} alt="" />
        </div>

        <div className="footer-para">
          <h3>Contact</h3>
          <h3>Privacy</h3>
          <h3>Terms</h3>
          <h3>Jobs</h3>
          <h3>Careers</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
