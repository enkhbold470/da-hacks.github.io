import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";
import MarkdownRenderer from "./MarkdownRenderer";

const Policy = () => {
  return (
    <>
      <div className={`flex lg:flex-row max-md:flex-col gap-10 p-4 m-4 `}>
        <MarkdownRenderer filePath="./policies/code_of_conduct.md" />
        <MarkdownRenderer filePath="./policies/privacy.md" />
      </div>
      <Footer />
    </>
  );
};

export default Policy;
