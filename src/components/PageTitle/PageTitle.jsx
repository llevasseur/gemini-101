import "./PageTitle.scss";

function PageTitle({ text }) {
  return (
    <>
      <h1>{text}</h1>
      <div className="bar"></div>
    </>
  );
}

export default PageTitle;
