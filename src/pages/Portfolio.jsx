import Content from "../components/Content";
import casserole from "../images/casserole.jpg";
import noaa from "../images/noaa.jpg";
import notebook from "../images/notebook.jpg";
import calendar from "../images/calendar.jpg";
import nintendo from "../images/nintendo.jpg";
import lock from "../images/lock.jpg";

export default function Portfolio() {
  const projects = [
    {
        "image_url": casserole,
        "title": "Recipe Blog",
        "repo_link": "https://github.com/Shanna-not-Shawna/cms-blog",
        "deployed_link": "https://safe-beyond-36437-fd4baa9db3a8.herokuapp.com/",
        "description": "Node.js, Inquirer, MySQL"
    },
    {
        "image_url": noaa,
        "title": "Weather Dashboard",
        "repo_link": "https://github.com/Shanna-not-Shawna/weather-dashboard",
        "deployed_link": "https://shanna-not-shawna.github.io/weather-dashboard/",
        "description": "HTML, CSS, Open Weather API"
    },
    {
        "image_url": notebook,
        "title": "Note Taker",
        "repo_link": "https://github.com/Shanna-not-Shawna/note-taker",
        "deployed_link": "https://mysterious-island-53745-682eedebbb58.herokuapp.com/",
        "description": "Express.js"
    },
    {
        "image_url": calendar,
        "title": "Work Day Scheduler",
        "repo_link": "https://github.com/Shanna-not-Shawna/work-day-scheduler",
        "deployed_link": "https://shanna-not-shawna.github.io/work-day-scheduler/",
        "description": "HTML, CSS, jQuery"
    },
    {
        "image_url": nintendo,
        "title": "Nintendo Quiz",
        "repo_link": "https://github.com/Shanna-not-Shawna/nintendo-quiz",
        "deployed_link": "https://shanna-not-shawna.github.io/nintendo-quiz/",
        "description": "HTML, CSS, JavaScript"
    },
    {
        "image_url": lock,
        "title": "Password Generator",
        "repo_link": "https://github.com/Shanna-not-Shawna/password-generator",
        "deployed_link": "https://shanna-not-shawna.github.io/password-generator/",
        "description": "JavaScript"
    }
]

  return (
    <Content title="Portfolio">
      <div className="row row-cols-2 g-4">
        {
          projects.map((item) => {
            return (
              <div key={item.title} className="col">
                <div className="card">
                  <img src={item.image_url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p>{item.description}</p>
                    <a href={item.repo_link}><i className="pi pi-github" style={{ fontSize: '2rem', color: 'black' }}></i></a>
                    <a href={item.deployed_link}><i className="pi pi-link" style={{ fontSize: '2rem', color: 'black' }}></i></a>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>

    </Content>
  );
}
