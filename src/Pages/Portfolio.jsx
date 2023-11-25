import Content from "../components/Content";

export default function Portfolio() {
  const items = [
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "GPT-3",
          "repo_link": "https://github.com/openai/gpt-3",
          "deployed_link": "https://beta.openai.com/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "LaMDA",
          "repo_link": "https://ai.googleblog.com/2021/01/lamda-language-model-for-dialogue.html",
          "deployed_link": "https://lamda.ai/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "TensorFlow",
          "repo_link": "https://github.com/tensorflow/tensorflow",
          "deployed_link": "https://www.tensorflow.org/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "PyTorch",
          "repo_link": "https://github.com/pytorch/pytorch",
          "deployed_link": "https://pytorch.org/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "Keras",
          "repo_link": "https://github.com/keras-team/keras",
          "deployed_link": "https://www.keras.io/"
      },
      {
          "image_url": "https://picsum.photos/640/360",
          "title": "JAX",
          "repo_link": "https://github.com/google/jax",
          "deployed_link": "https://jax.readthedocs.io/en/latest/"
      }
  ]


  return (
    <Content title="Portfolio Page">
      <div class="row row-cols-2 g-4">
        {
          items.map((item) => {
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
