import "./GenBox.scss";

function GenBox({ emoji }) {
  if (!emoji) {
    emoji = "👋";
  }
  return (
    <section className="gen-box">
      <h2 className="gen-box__emoji">{emoji}</h2>
    </section>
  );
}

export default GenBox;
