const item1 = {
  Name: "Rice",
  price: 85000,
};

const item2 = {
  Name: "Vegetable oil",
  price: 12000,
};

const item3 = {
  Name: "Dangote salt(1kg)",
  price: 3200,
};

const total = item1.price + item2.price + item3.price;

const choice = Number(
  prompt(
    "what operation do you want to do? put the number \n 0. View an item price\n 1. Calculate total of all item \n 2.Apply discount \n 3. Confirm if the product is affordable \n 4. exit application",
  ),
);

switch (choice) {
  case 0:
    const items = Number(
      prompt(
        "which item do you want the price \n 0. price of Rice \n 1. price of Vegetable oil \n 2. the price of Dangote salt \n 3. No item left",
      ),
    );

    switch (items) {
      case 0:
        console.log(`the price of ${item1.Name} ${item1.price}`);
        break;

      case 1:
        console.log(`the price of ${item2.Name} ${item2.price}`);
        break;

      case 2:
        console.log(`the price of ${item2.Name} ${item2.price}`);
        break;

      default:
        console.log("No item left");
        break;
    }
    break;

  case 1:
    total = item1.price + item2.price + item3.price;
    console.log(`The total amount for all item ${total}`);
    break;

  case 2:
    const discount = Number(prompt("how many percent discount do you want"));
    const percentage = total - (discount / 100) * total;
    console.log(`The discount pric is ${percentage}`);
    break;

  case 3:
    const balance = 80000;
    const item = Number(
      prompt(
        "Which item do you want to buy. \n 1. Rice \n 2. Vegetable \n 3. Sugar ",
      ),
    );
    switch (item) {
      case 1:
        if (balance > Item1.price) {
          console.log(`You can afford it because your balance is ${balance}`);
        }
        console.log(
          `You can't afford it your balance is ${balance} and the price is ${Item1.price}`,
        );
        break;

      case 1:
        if (balance > Item2.price) {
          console.log(`You can afford it because your balance is ${balance}`);
        }
        console.log(
          `You can't afford the balance is ${balance} and the price is ${Item2.price}`,
        );
        break;

      case 1:
        if (balance > Item3.price) {
          console.log(`You can afford it because your balance is ${balance}`);
        }
        console.log(
          `You can't afford the balance is ${balance} and the price is ${Item3.price}`,
        );
        break;

      default:
        console.log("Wrong input");
    }
    break;

  default:
    console;
    break;
}
