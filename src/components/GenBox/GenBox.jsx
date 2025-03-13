import "./GenBox.scss";

function GenBox({ emoji, prompt }) {
  if (!emoji) {
    emoji = "👋";
  }
  return (
    <section className="gen-box">
      <h2 className="gen-box__emoji">{emoji}</h2>
      {prompt && <p className="gen-box__prompt">{`"${prompt}"`}</p>}
    </section>
  );
}

export default GenBox;
