import Content from "../components/Content";

export default function Portfolio() {
  const items = [
    {
      "image_url": "https://picsum.photos/200/300",
      "title": "Majestic Mountain",
      "description": "A stunning image of a snow-capped mountain range, bathed in the warm glow of the setting sun.",
      "link": "https://www.example.com/majestic-mountain"
    },
    {
      "image_url": "https://picsum.photos/200/300?image=100",
      "title": "Tranquil Forest",
      "description": "A serene image of a lush, green forest, filled with towering trees and dappled sunlight.",
      "link": "https://www.example.com/tranquil-forest"
    },
    {
      "image_url": "https://picsum.photos/200/300?image=200",
      "title": "Vibrant Cityscape",
      "description": "A vibrant image of a bustling city skyline, with towering skyscrapers and colorful lights.",
      "link": "https://www.example.com/vibrant-cityscape"
    },
    {
      "image_url": "https://picsum.photos/200/300?image=300",
      "title": "Serene Beach",
      "description": "A tranquil image of a secluded beach, with soft sand and gentle waves.",
      "link": "https://www.example.com/serene-beach"
    },
    {
      "image_url": "https://picsum.photos/200/300?image=400",
      "title": "Mystical Waterfall",
      "description": "A breathtaking image of a cascading waterfall, surrounded by lush greenery.",
      "link": "https://www.example.com/mystical-waterfall"
    },
    {
      "image_url": "https://picsum.photos/200/300?image=500",
      "title": "Arid Desert",
      "description": "A striking image of a vast desert landscape, with rugged terrain and endless horizons.",
      "link": "https://www.example.com/arid-desert"
    },
    {
      "image_url": "https://picsum.photos/200/300?image=600",
      "title": "Enchanted Forest",
      "description": "A magical image of an enchanted forest, filled with whimsical creatures and hidden treasures.",
      "link": "https://www.example.com/enchanted-forest"
    },
    {
      "image_url": "https://picsum.photos/200/300?image=700",
      "title": "Cosmic Galaxy",
      "description": "A mesmerizing image of a swirling galaxy, filled with countless stars and nebulae.",
      "link": "https://www.example.com/cosmic-galaxy"
    }
  ]


  return (
    <Content title="Portfolio">
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
