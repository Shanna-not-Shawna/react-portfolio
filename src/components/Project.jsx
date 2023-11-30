export default function Project({project}) {
    const { title, repo_link, deployed_link, description, image_url } = project;

    return (
        <div key={title} className="col">
        <div className="card">
          <img src={image_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{description}</p>
            <a href={repo_link}><i className="pi pi-github" style={{ fontSize: '2rem', color: 'black' }}></i></a>
            <a href={deployed_link}><i className="pi pi-link" style={{ fontSize: '2rem', color: 'black' }}></i></a>
          </div>
        </div>
      </div>
    )
}