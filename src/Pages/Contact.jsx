import Content from "../components/Content";

export default function Contact() {
  return (
    <Content title="Contact Page">
      <form>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Name</label>
          <input type="" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
          </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </Content>
  );
}
