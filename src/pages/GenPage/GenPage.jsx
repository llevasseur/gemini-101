import PageTitle from "../../components/PageTitle/PageTitle";
import "./GenPage.scss";
import GenForm from "../../components/GenForm/GenForm";

function GenPage() {
  return (
    <>
      <PageTitle text="Generate Emoji" />
      <section className="gen-content">
        <GenForm />
      </section>
    </>
  );
}

export default GenPage;
