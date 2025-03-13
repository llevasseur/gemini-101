import "./GenContent.scss";
import GenForm from "../GenForm/GenForm";
import GenBox from "../GenBox/GenBox";

import { useState, useEffect } from "react";
import customToast from "../../utils/customToast.js";
import axios from "axios";

import { ToastContainer, Slide } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

function GenContent() {
  const [emoji, setEmoji] = useState("");
  const [errorText, setErrorText] = useState("");
  async function generateEmoji(prompt) {
    try {
      const response = await axios.post(`${API_URL}/api/gemini/emoji`, {
        prompt,
      });
      setEmoji(response.data);
    } catch (error) {
      customToast.error("Error generating emoji 😔", {
        position: "bottom-right",
        autoClose: 3000,
        transition: Slide,
      });
      setEmoji("❌");
      setErrorText(error.message);
    }
  }

  return (
    <>
      <section className="gen-content">
        <GenBox emoji={emoji} />
        <GenForm
          generateEmoji={generateEmoji}
          setEmoji={setEmoji}
          errorText={errorText}
          setErrorText={setErrorText}
        />
      </section>
      <ToastContainer />
    </>
  );
}

export default GenContent;
