import { Link } from "react-router-dom";
import Button from "../components/Button";

const About = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-5xl font-Montserrat font-medium capitalize  ">comming soon</h1>
      <Button
        className="mt-4 bg-Yellow text-White capitalize"
        aria_label="back to home"
      >
        <Link to="/">back to home</Link>
      </Button>
    </div>
  );
};

export default About;
