import polandflag from "../Home/assets/poland-national-flag-transparent-free-png.webp";
import swedenflag from "../Home/assets/sweden png logl.png";
import kenyaflag from "../Home/assets/kenya flag png.png";
import croatiaflag from "../Home/assets/CROATIOA FLAG PNG.png";
import portugalflag from "../Home/assets/portugal flag.png";
import italyflag from "../Home/assets/italy flag png.png";
import finlandflag from "../Home/assets/FINLAD FLAG.png";
import './Standings.css'

const Standing = () => {

    const rallyStandings = [
        { position: 1, country: polandflag, team: "Team A", points: 120, time: "2:15:32" },
        { position: 2, country: swedenflag, team: "Team C", points: 115, time: "2:17:01" },
        { position: 3, country: kenyaflag, team: "Team D", points: 110, time: "2:19:40" },
        { position: 4, country: portugalflag, team: "Team B", points: 105, time: "2:21:17" },
        { position: 5, country: italyflag, team: "Team E", points: 100, time: "2:23:50" },
        { position: 6, country: croatiaflag, team: "Team G", points: 95, time: "2:25:06" },
        { position: 7, country: finlandflag, team: "Team F", points: 90, time: "2:28:13" },
      ];
  return (
    <>
    <div
        className="standing"
        style={{ backgroundImage: 'url(../Home/assets/R.jpeg)' }}
      >
        <h1 style={{ fontFamily: "poppins" }}>Standings</h1>
        {rallyStandings.map((event) => (
          <div className="standing-table" key={event.position}>
            <h1>{event.position}</h1>
            <img src={event.country} alt="" />
            <h2>{event.team}</h2>
            <h3>{event.time}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default Standing;