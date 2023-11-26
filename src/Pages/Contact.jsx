import Content from "../components/Content";

export default function Contact() {
  return (
    <Content title="Contact Page">
      <form>
      <div class="mb-3">
          <label for="formName" class="form-label">Name</label>
          <input type="" class="form-control" id="formName" required/>
        </div>
        <div class="mb-3">
          <label for="formEmail" class="form-label">Email address</label>
          <input type="email" class="form-control" id="formEmail" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="formMessage" class="form-label">Message</label>
          <textarea class="form-control" id="formMessage" rows="4" required></textarea>
          </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </Content>
  );
}
