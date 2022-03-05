import React, { useState } from "react";
// import ShowData from "./ShowData";

const ObjectRecursion = () => {
  const [data] = useState({
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        food: {
          sushi:
            "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
          apple: {
            Honeycrisp:
              "an apple cultivar developed at the MAES Horticultural Research Center",
            Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
            apple: {
              Honeycrisp:
                "an apple cultivar developed at the MAES Horticultural Research Center",
              Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
            },
          },
        },
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
        apple: {
          Honeycrisp:
            "an apple cultivar developed at the MAES Horticultural Research Center",
          Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
        },
      },
    },
  });

  return (
    <>
      <ShowData data={data} />
    </>
  );
};

const ShowData = ({ data }) => {
  return (
    <>
      {Object.entries(data).map(([key, value]) => {
        if (typeof value === "object") {
          return (
            <div>
              {`${key}:`}
              <div style={{ paddingLeft: "50px" }}>
                <ShowData data={value} />
              </div>
            </div>
          );
        } else {
          return <div>{`${key}: ${value}`}</div>;
        }
      })}
    </>
  );
};
export default ObjectRecursion;
