import React, { useState } from "react";

const RoboHash = () => {
  const [input, setInput] = useState("");
  const [links, setLinks] = useState([]);

  const handleAdd = () => {
    setLinks((e) => [...e, input]);
    setInput("");
  };

  const handleDelete = (id) => {
    // console.log(id);
    setLinks(links.filter((link, index) => index !== id));
  };
  return (
    <>
      <div className="container ">
        <div className="text-center row my-5">
          <input
            className="col-8"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className="btn btn-primary btn-sm col-3" onClick={handleAdd}>
            Add
          </button>
        </div>
        <div>
          {links.map((link, id) => {
            return (
              <>
                <img
                  className="p-5"
                  src={`https://robohash.org/${link}`}
                  onClick={() => handleDelete(id)}
                  key={id}
                  alt="dsfdsg"
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default RoboHash;
