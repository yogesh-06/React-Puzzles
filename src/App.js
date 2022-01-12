import axios from "axios";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Pagination from "./Pagination/Pagination";

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setCard(result.data);
    console.log(result.data);
  };

  return (
    <>
      <div className="container">
        <Pagination card={card} />
      </div>
    </>
  );
}

export default App;
