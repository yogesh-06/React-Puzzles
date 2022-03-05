import React, { useEffect, useState } from "react";
const Online = () => {
  const [userState, setUserState] = useState({
    Bob: true,
    Gary: true,
    Jessica: false,
    Sam: true,
    Eric: false,
  });

  useEffect(() => {
    const intervl = setInterval(() => {
      toggleValues();
    }, 500);
    return () => clearInterval(intervl);
  }, []);
  // console.log(userState);

  const toggleValues = () => {
    const key = Object.keys(userState);
    const randomKey = Math.round(Math.random() * key.length);
    const updatedUser = { ...userState };
    updatedUser[key[randomKey]] = !updatedUser[key[randomKey]];
    setUserState(updatedUser);
  };
  return (
    <>
      {Object.keys(userState).map((key) => {
        return (
          <>
            <p>
              {/* {key}: {userState[key] ? <span styl></span> : "kh"} */}
              <p>
                {key}:{" "}
                <span
                  style={{
                    ...(userState[key] ? { color: "red" } : { color: "blue" }),
                  }}
                >
                  kh
                </span>
              </p>
            </p>
          </>
        );
      })}
    </>
  );
};
export default Online;
