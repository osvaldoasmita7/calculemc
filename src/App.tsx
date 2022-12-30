import "./App.css";
import { Form } from "./components/custom/Form";
import { Navbar } from "./components/custom/Navbar";
import { TextsExam } from "./components/custom/TextsExam";

export const App = () => {
  return (
    <div className="App pb-5">
      <Navbar></Navbar>
      <div className="col-12 col-md-6 col-lg-5 px-4">
        <TextsExam></TextsExam>
      </div>
      <div className="col-12">
        <Form></Form>
      </div>
    </div>
  );
};
