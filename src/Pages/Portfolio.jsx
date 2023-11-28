import Content from "../components/Content";

export default function Portfolio() {
  const projects = [
    {
        "image_url": "src/images/sheri-silver-q5C-_coAZR4-unsplash.jpg",
        "title": "Recipe Blog",
        "repo_link": "https://github.com/Shanna-not-Shawna/cms-blog",
        "deployed_link": "https://safe-beyond-36437-fd4baa9db3a8.herokuapp.com/",
        "description": "Recipe Blog technologies used"
    },
    {
        "image_url": "src/images/noaa-5YryiYcFvtA-unsplash.jpg",
        "title": "Weather Dashboard",
        "repo_link": "https://github.com/Shanna-not-Shawna/weather-dashboard",
        "deployed_link": "https://shanna-not-shawna.github.io/weather-dashboard/",
        "description": "Weather Dashboard technologies used"
    },
    {
        "image_url": "src/images/mike-tinnion-3ym6i13Y9LU-unsplash.jpg",
        "title": "Note Taker",
        "repo_link": "https://github.com/Shanna-not-Shawna/note-taker",
        "deployed_link": "https://mysterious-island-53745-682eedebbb58.herokuapp.com/",
        "description": "Note Taker technologies used"
    },
    {
        "image_url": "src/images/estee-janssens-aQfhbxailCs-unsplash.jpg",
        "title": "Work Day Scheduler",
        "repo_link": "https://github.com/Shanna-not-Shawna/work-day-scheduler",
        "deployed_link": "https://shanna-not-shawna.github.io/work-day-scheduler/",
        "description": "Work Day Scheduler technologies used"
    },
    {
        "image_url": "src/images/ravi-palwe-_JTF0Prc7jc-unsplash.jpg",
        "title": "Nintendo Quiz",
        "repo_link": "https://github.com/Shanna-not-Shawna/nintendo-quiz",
        "deployed_link": "https://shanna-not-shawna.github.io/nintendo-quiz/",
        "description": "Nintendo Quiz technologies used"
    },
    {
        "image_url": "src/images/towfiqu-barbhuiya-FnA5pAzqhMM-unsplash.jpg",
        "title": "Password Generator",
        "repo_link": "https://github.com/Shanna-not-Shawna/password-generator",
        "deployed_link": "https://shanna-not-shawna.github.io/password-generator/",
        "description": "Password Generator technologies used"
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
