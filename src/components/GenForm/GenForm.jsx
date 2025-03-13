import { useState, useRef } from "react";
import "./GenForm.scss";
import errorIcon from "../../assets/icons/error-24px.svg";
function GenForm({
  generateEmoji,
  setEmoji,
  errorText,
  setErrorText,
  prompt,
  setPrompt,
}) {
  const [textareaInput, setTextareaInput] = useState("");
  const textareaRef = useRef();

  function handleTextareaChange(event) {
    setTextareaInput((prev) => {
      if (!event.target.value) {
        setEmoji("👋");
      } else {
        setEmoji("💬");
      }
      return event.target.value;
    });
    setPrompt("");

    if (setErrorText) {
      setErrorText("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent new line
      handleSubmit(e); // Submit form
    }
  }

  function isFormValid() {
    if (!textareaInput.trim()) {
      return false;
    }
    return true;
  }

  function handleClear(event) {
    event.preventDefault();
    setTextareaInput("");
    setErrorText("");
    setEmoji("👋");
    setPrompt("");
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (isFormValid()) {
      generateEmoji(textareaInput);
      setPrompt(textareaInput);
      setTextareaInput("");
    } else {
      textareaRef.current.focus();
      setErrorText("Please enter a prompt");
      setEmoji("😤");
      setPrompt("");
    }
  }

  return (
    <form className="gen-form">
      <div className="error-block">
        {errorText ? (
          <>
            <img alt="error icon" src={errorIcon} />
            <p className="error-block__text">{errorText}</p>
          </>
        ) : (
          <p className="error-block__text"></p>
        )}
      </div>
      <div className="gen-input">
        <textarea
          className={
            errorText
              ? "gen-input__textarea gen-input__textarea--error"
              : "gen-input__textarea"
          }
          onChange={handleTextareaChange}
          value={textareaInput}
          placeholder="Type something and generate an emoji 😜"
          ref={textareaRef}
          onKeyDown={handleKeyDown}
        ></textarea>
        <div className="gen-input__buttons">
          <div className="button-box">
            <div className="button-box__gen-icon" onClick={handleClear}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
            <div
              className="button-box__gen-icon"
              type="submit"
              onClick={handleSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default GenForm;
