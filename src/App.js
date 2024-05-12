const userData = [{
  name: "Karthi",
  city: "Chennai",
  descriptions: "Front-end developer",
  skills: ["UI/UX", "HTML", "JAVASCRIPT", "BOOTSTRAP", "CSS", "NODE.JS", "SQL"],
  online: true,
  profile: "images/image1.jpg",
},
{
  name: "Surya",
  city: "Madurai",
  descriptions: "Flutter developer",
  skills: ["UI/UX", "HTML", "JAVASCRIPT", "BOOTSTRAP", "CSS", "NODE.JS", "SQL"],
  online: false,
  profile: "images/image2.jpg",
}, {
  name: "Vijay",
  city: "Coimbatore",
  descriptions: "Backend developer",
  skills: ["UI/UX", "HTML", "JAVASCRIPT", "BOOTSTRAP", "CSS", "NODE.JS", "SQL"],
  online: true,
  profile: "images/image3.jpg",
},];



function App(props) {

  return (
    <div className="Main">
      <div className="App">

        <span className={props.online ? "online" : "offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
        <img src={props.profile} className="img" alt="no picture" />
        <h1>{props.name}</h1>
        <h1>{props.city}</h1>
        <h2>{props.descriptions}</h2>
        <div>
          <button className="first one">Message</button>
          <button className="first two">Following</button>
        </div>
        <hr></hr>
        <div className="skill">
          <h5>SKILLS</h5>
          <ul>
            {props.skill.map((skillset, index) => (<li key={index}>{skillset}</li>))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export const Appcard = () => {
  return (<>
    {userData.map((user, index) => (<App key={index} name={user.name} city={user.city} descriptions={user.descriptions} profile={user.profile} online={user.online} skill={user.skills}
    />
    ))}
  </>)
}

