import Header from "./Header";
import Online from "./React/Online";
import JsonPlaceholder from "./React/JsonPlaceholder";
import ObjectRecursion from "./React/ObjectRecursion";
import Pagination from "./React/Pagination";
import QuizObject from "./React/QuizObject";
import RoboHash from "./React/RoboHash";
import TodoOrg from "./React/TodoOrg";
import MaterialUI from "./React/MaterialUI";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <MaterialUI />
        <hr />
        <Pagination />
        <hr />
        <JsonPlaceholder />
        <hr />
        <ObjectRecursion />
        <hr />
        <QuizObject />
        <hr />
        <RoboHash />
        <hr />
        <TodoOrg />
        <hr />
        <Online />
        <hr />{" "}
      </div>
    </>
  );
}
export default App;
