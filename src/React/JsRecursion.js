const data = {
  taxi: "a car licensed to transport passengers in return for payment of a fare",
  food: {
    sushi:
      "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
    apple: {
      Honeycrisp:
        "an apple cultivar developed at the MAES Horticultural Research Center",
      Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
    },
  },
};
let space = "\t";
const showData = (data) => {
  Object.entries(data).map(([key, value]) => {
    if (typeof value === "object") {
      //   console.log(key + ":");
      showData(value);
    } else {
      //   console.log("\t", key + ":", value);
    }
  });
};

showData(data);
