import Content from "../components/Content";

export default function Portfolio() {
  const projects = [
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Recipe Blog",
          "repo_link": "https://github.com/Shanna-not-Shawna/cms-blog",
          "deployed_link": "https://safe-beyond-36437-fd4baa9db3a8.herokuapp.com/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Weather Dashboard",
          "repo_link": "https://github.com/Shanna-not-Shawna/weather-dashboard",
          "deployed_link": "https://shanna-not-shawna.github.io/weather-dashboard/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Note Taker",
          "repo_link": "https://github.com/Shanna-not-Shawna/note-taker",
          "deployed_link": "https://mysterious-island-53745-682eedebbb58.herokuapp.com/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Work Day Scheduler",
          "repo_link": "https://github.com/Shanna-not-Shawna/work-day-scheduler",
          "deployed_link": "https://shanna-not-shawna.github.io/work-day-scheduler/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Nintendo Quiz",
          "repo_link": "https://github.com/Shanna-not-Shawna/nintendo-quiz",
          "deployed_link": "https://shanna-not-shawna.github.io/nintendo-quiz/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Password Generator",
          "repo_link": "https://github.com/Shanna-not-Shawna/password-generator",
          "deployed_link": "https://shanna-not-shawna.github.io/password-generator/"
      }
  ]


  return (
    <Content title="Portfolio Page">
      <div className="row row-cols-2 g-4">
        {
          projects.map((item) => {
            return (
              <div className="col">
                <div className="card">
                  <img src={item.image_url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <a href={item.repo_link}><i className="pi pi-github" style={{ fontSize: '1rem', color: 'black' }}></i></a>
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
