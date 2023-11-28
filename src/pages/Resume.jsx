import resume from "../images/Resume.pdf";

export default function Resume() {
  return (
    <div className="proficiencies">
      <br></br>
      <h3>Proficiencies:</h3>
      <ul>
        <li>HTML/CSS/Git</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>APIs</li>
        <li>JQuery</li>
        <li>JSON</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>React</li>
        <li>MERN Stack</li>
      </ul>
       My resume can be downloaded here<a href={resume}><i className="pi pi-download" style={{ fontSize: '1.5rem', color: 'black' }}></i></a> 
      
    </div>
  );
}
