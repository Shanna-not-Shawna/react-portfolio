import Content from "../components/Content";

export default function Home() {
  return (
    <Content title="About Me">
      <div className="row align-items-center">
        <div className="col-4">
          <img style={{width: "100%"}} src="https://picsum.photos/640/360" alt="" />
        </div>
        <div className="col-8">
          <p>
            This is my bio.
          </p>
        </div>
      </div>
    </Content>

  );
}