import Content from "../components/Content";

export default function Portfolio() {
  const projects = [
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Title of Project 1",
          "repo_link": "https://github.com/openai/gpt-3",
          "deployed_link": "https://beta.openai.com/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Title of Project 2",
          "repo_link": "https://ai.googleblog.com/2021/01/lamda-language-model-for-dialogue.html",
          "deployed_link": "https://lamda.ai/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Title of Project 3",
          "repo_link": "https://github.com/tensorflow/tensorflow",
          "deployed_link": "https://www.tensorflow.org/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Title of Project 4",
          "repo_link": "https://github.com/pytorch/pytorch",
          "deployed_link": "https://pytorch.org/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Title of Project 5",
          "repo_link": "https://github.com/keras-team/keras",
          "deployed_link": "https://www.keras.io/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Title of Project 6",
          "repo_link": "https://github.com/google/jax",
          "deployed_link": "https://jax.readthedocs.io/en/latest/"
      }
  ]


  return (
    <Content title="Portfolio Page">
      <div class="row row-cols-2 g-4">
        {
          projects.map((item) => {
            return (
              <div class="col">
                <div class="card">
                  <img src={item.image_url} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description}</p>
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
