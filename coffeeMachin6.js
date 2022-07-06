const input = require('sync-input');
let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;
let sugar =200;
let action;
let n = '\n';
function remainingCoffeeMachin() {
    return console.log(`The coffee machine has:${n}remaining${water} ml of water ${n}${milk} ml of milk ${n}${beans} g of coffee beans
${sugar} g of sugar ${n}${cups} disposable cups${n}"$" ${money} of money`);
};
function fillCoffeMachin() {
    water = water + Number(input("Write how many ml of water you want to add:\n"));
    milk =  milk + Number(input("Write how many ml of milk you want to add:\n"));
    beans = beans + Number(input("Write how many grams of coffee beans you want to add:\n"));
    cups = cups + Number(input("Write how many disposable coffee cups you want to add:\n"));
    sugar = sugar + Number(input("Write how many disposable sugar you want to add:\n"));
    return water, milk, beans, cups, sugar;
};

while (action != "exit") {
    action = input("Write action (buy, fill, take, remaining, exit):\n");

    if (action === "take") {
        console.log("I gave you $" + money);
        money = money - money;
    }
    if (action === "remaining") {
        remainingCoffeeMachin();
    }
    else if (action === "fill") {
        fillCoffeMachin();
    }
    else if (action === "buy") {
        let coffeeSugar = input("Would you like coffee with sugar? yes or no\n");
        if (coffeeSugar === "no") {
            let coffeeSort = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n"));
            if (coffeeSort === 1) {

                if (water > 250 && milk > 0 && beans > 16 && cups > 1) {
                    water = water - 250;
                    milk = milk - 0;
                    beans = beans - 16;
                    cup = cups--
                    money = money + 4;
                    console.log("I have enough resources, making you a coffee!");
                } else if (water < 250) {
                    console.log("Sorry, not enough water!");
                } else if (milk < 0) {
                    console.log("Sorry, not enough milk!");
                } else if (beans < 16) {
                    console.log("Sorry, not enough beans!");
                } else if (cups < 1) {
                    console.log("Sorry, not enough cups!");
                }
            } else if (coffeeSort === 2) {
                if (water > 350 && milk > 75 && beans > 20 && cups > 1) {
                    water = water - 350;
                    milk = milk - 75;
                    beans = beans - 20;
                    cup = cups--
                    money = money + 7;
                    console.log("I have enough resources, making you a coffee!");
                } else if (water < 350) {
                    console.log("Sorry, not enough water!");
                } else if (milk < 75) {
                    console.log("Sorry, not enough milk!");
                } else if (beans < 20) {
                    console.log("Sorry, not enough beans!");
                } else if (cups < 1) {
                    console.log("Sorry, not enough cups!");
                }
            } else if (coffeeSort === 3) {
                if (water > 200 && milk > 100 && beans > 12 && cups > 1) {
                    water = water - 200;
                    milk = milk - 100;
                    beans = beans - 12;
                    cup = cups--
                    money = money + 6;
                    console.log("I have enough resources, making you a coffee!");
                } else if (water < 200) {
                    console.log("Sorry, not enough water!");
                } else if (milk < 100) {
                    console.log("Sorry, not enough milk!");
                } else if (beans < 12) {
                    console.log("Sorry, not enough beans!");
                } else if (cups < 1) {
                    console.log("Sorry, not enough cups!");
                }
            }
        }
        else if (coffeeSugar === "yes") {

        let coffeeSort = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n"));
        if (coffeeSort === 1) {

            if (water > 250 && milk > 0 && beans > 16 && sugar >5 && cups > 1) {
                water = water - 250;
                milk = milk - 0;
                beans = beans - 16;
                sugar = sugar - 5;
                cup = cups--
                money = money + 4;
                console.log("I have enough resources, making you a coffee!");
            } else if (water < 250) {
                console.log("Sorry, not enough water!");
            } else if (milk < 0) {
                console.log("Sorry, not enough milk!");
            } else if (beans < 16) {
                console.log("Sorry, not enough beans!");
            } else if (cups < 1) {
                console.log("Sorry, not enough cups!");
            }
            else if (sugar < 5) {
                console.log("Sorry, not enough sugar!");
            }
        } else if (coffeeSort === 2) {
            if (water > 350 && milk > 75 && beans > 20 && sugar > 5  && cups > 1) {
                water = water - 350;
                milk = milk - 75;
                beans = beans - 20;
                sugar = sugar - 5;
                cup = cups--
                money = money + 7;
                console.log("I have enough resources, making you a coffee!");
            } else if (water < 350) {
                console.log("Sorry, not enough water!");
            } else if (milk < 75) {
                console.log("Sorry, not enough milk!");
            } else if (beans < 20) {
                console.log("Sorry, not enough beans!");
            } else if (cups < 1) {
                console.log("Sorry, not enough cups!");
            }
            else if (sugar < 5) {
                console.log("Sorry, not enough sugar!");
            }
        } else if (coffeeSort === 3) {
            if (water > 200 && milk > 100 && beans > 12 && sugar > 5 && cups > 1) {
                water = water - 200;
                milk = milk - 100;
                beans = beans - 12;
                sugar = sugar - 5;
                cup = cups--
                money = money + 6;
                console.log("I have enough resources, making you a coffee!");
            } else if (water < 200) {
                console.log("Sorry, not enough water!");
            } else if (milk < 100) {
                console.log("Sorry, not enough milk!");
            } else if (beans < 12) {
                console.log("Sorry, not enough beans!");
            } else if (cups < 1) {
                console.log("Sorry, not enough cups!");
            }
            else if (sugar < 5) {
                console.log("Sorry, not enough sugar!");
            }
        }
    }
    }
}