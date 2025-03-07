import { useState } from "react";
import "./GenForm.scss";
function GenForm() {
  const [textareaInput, setTextareaInput] = useState("");
  function handleTextareaChange(event) {
    setTextareaInput(event.target.value);
  }
  function handleClear(event) {
    event.preventDefault();
    setTextareaInput("");
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert("submitted");
    setTextareaInput("");
  }
  return (
    <form className="gen-form">
      <textarea
        className="gen-form__textarea"
        onChange={handleTextareaChange}
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
