import { useState } from "react";
import "./GenForm.scss";
function GenForm({ generateEmoji }) {
  const [textareaInput, setTextareaInput] = useState("");
  const [errorText, setErrorText] = useState("");
  function handleTextareaChange(event) {
    setTextareaInput(event.target.value);
  }

  function isFormValid() {
    if (!textareaInput.trim()) {
      setErrorText("Please enter a prompt");
      return false;
    }
    return true;
  }

  function handleClear(event) {
    event.preventDefault();
    setTextareaInput("");
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (isFormValid()) {
      generateEmoji("test");
      setTextareaInput("");
    }
  }
  return (
    <form className="gen-form">
      <div className="error-block">
        {errorText ? (
          <p className="error-block__text">🛑 {errorText}</p>
        ) : (
          <p className="error-block__text"></p>
        )}
      </div>
      <textarea
        className={
          errorText
            ? "gen-form__textarea gen-form__textarea--error"
            : "gen-form__textarea"
        }
        onChange={handleTextareaChange}
        onFocus={() => setErrorText("")}
        value={textareaInput}
        placeholder="Type something and generate an emoji 😜"
      ></textarea>

      <button onClick={handleClear}>Clear</button>
      <button type="submit" onClick={handleSubmit}>
        Generate
      </button>
    </form>
  );
}

export default GenForm;
