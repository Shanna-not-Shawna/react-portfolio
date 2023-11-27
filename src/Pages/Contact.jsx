import Content from "../components/Content";

export default function Contact() {
  return (
    <Content title="Contact Page">
      <form>
      <div className="mb-3">
          <label htmlFor="formName" className="form-label">Name</label>
          <input type="" className="form-control" id="formName" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="formEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="formEmail" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="formMessage" className="form-label">Message</label>
          <textarea className="form-control" id="formMessage" rows="4" required></textarea>
          </div>
        <button type="submit" id="submit-button" className="btn btn-primary">Submit</button>
      </form>
    </Content>
  );
}
