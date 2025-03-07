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
            <p>To be determined 😏</p>
          </div>
          <div className="text-block">
            <h2>License</h2>
            <p>insert license here</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
