import PageTitle from "../../components/PageTitle/PageTitle";
import "./GenPage.scss";
import GenForm from "../../components/GenForm/GenForm";
import GenBox from "../../components/GenBox/GenBox";

import axios from "axios";
import { ToastContainer, Slide } from "react-toastify";
import customToast from "../../utils/customToast.js";

function GenPage() {
  async function generateEmoji(prompt) {
    try {
      throw new Error();
    } catch (error) {
      customToast.error("Error generating emoji 😔", {
        position: "bottom-right",
        autoClose: 3000,
        transition: Slide,
      });
    }
  }

  return (
    <>
      <PageTitle text="Generate Emoji" />
      <section className="gen-content">
        <GenBox />
        <GenForm generateEmoji={generateEmoji} />
      </section>
      <ToastContainer />
    </>
  );
}

export default GenPage;
