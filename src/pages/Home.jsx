import Content from "../components/Content";
import profilePic from "../images/profilepic.jpg"

export default function Home() {
  return (
    <Content title="About Me">
      <div className="row align-items-center">
        <div className="col-4">
          <img style={{width: "100%"}} src={profilePic} alt="Shanna Brooks" />
        </div>
        <div className="col-8">
          <h2>About Me</h2>
          <p> Hi there! I'm Shanna Brooks, a passionate problem solver with a knack for coding based in Texas. Recently graduating from a coding bootcamp, I'm on a mission to dive into the world of full-stack development.</p>
          <h5>What Drives Me:</h5>
          <p>I thrive on turning complex challenges into elegant solutions. From my roots in real estate title and customer service to custom apparel decoration, I bring a diverse set of skills to the tech table. Every obstacle is a new puzzle to solve, and I'm ready to tackle them head-on.</p>
          <h5>Beyond the Screen:</h5>
          <p>When I'm not immersed in code, you'll find me building intricate LEGO masterpieces, piecing together challenging jigsaws, or immersing myself in the realm of video games. It's this same love for creativity and problem-solving that fuels my passion for coding.</p>
          <h5>Let's Connect:</h5>
          <p>I'm excited to bring my unique background and skills to the tech world. Let's connect and explore the possibilities together!</p>
        </div>
      </div>
    </Content>

  );
}