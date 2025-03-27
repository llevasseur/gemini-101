import "./AboutPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";

function AboutPage() {
  return (
    <>
      <PageTitle text="About" />
      <section className="about">
        <div className="about__content">
          <div className="text-block">
            <h2>Purpose</h2>
            <p>
              Demonstrate how to use Google Gemini AI in a Node application.
            </p>
          </div>
          <div className="text-block">
            <h2>How to Use</h2>
            <p>
              Type in text to the prompt area and wait for an emoji to be
              generated!
            </p>
          </div>
          <div className="text-block">
            <h2>License</h2>
            <p>
              Google AI Studio api key is used to generate an emoji from
              Google's Gemini model.The service may quit unexpectedly if Too
              Many Requests are made.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
