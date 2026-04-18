export default function Contact() {
  return (
    <div className="page">
      <h1>Contact</h1>

      <form className="form">
        <label>
          Name
          <input placeholder="Your name" />
        </label>

        <label>
          Email
          <input placeholder="you@email.com" />
        </label>

        <label>
          Message
          <textarea rows="5" placeholder="Write your message..." />
        </label>

        <button className="btnPrimary" type="button">Send</button>
      </form>
    </div>
  );
}