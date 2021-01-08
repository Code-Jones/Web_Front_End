let currentSelection;
const p_small = 8.5;
const p_med = 11.5;
const p_large = 14;
const p_topping = 1.75;
const s_garden = 7.5;
const s_beef = 8.5;
const s_mixed = 9.5;
const s_pork = 9.5;
const d_small = 1.25;
const d_med = 1.75;
const d_large = 2;
let firstName;
let lastName;
let finalTotal = 0;
let first = false;

const order = {
    pizzaList: [],
    sandwichList: [],
    drinkList: []
};

const customer = {
    firstName,
    lastName,
    order,
};

const pizza = {
    cost: 0,
    toppings: []
};

const sandwich = {
    cost: 0
};

const drink = {
    cost: 0
};

// mini functions
function checkThroughOptions(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            return list[i];
        }
    }
}

function calcTotal() {
    if (finalTotal !== 0) {
        finalTotal = 0;
    }
    document.getElementById('total').innerText = "";
    for (let i = 1; i < document.getElementById('order_pizza_table').getElementsByTagName('tr').length; i++) {
        finalTotal += parseFloat(document.getElementById('order_pizza_table').getElementsByTagName('tr')[i].cells[0].innerText) * (parseFloat(document.getElementById('order_pizza_table').getElementsByTagName('tr')[i].cells[2].innerText.substr(1)));
    }
    for (let i = 1; i < document.getElementById('order_sandwich_table').getElementsByTagName('tr').length; i++) {
        finalTotal += parseFloat(document.getElementById('order_sandwich_table').getElementsByTagName('tr')[i].cells[0].innerText) * parseFloat(document.getElementById('order_sandwich_table').getElementsByTagName('tr')[i].cells[2].innerText.substr(1));
    }
    for (let i = 1; i < document.getElementById('order_drink_table').getElementsByTagName('tr').length; i++) {
        finalTotal += parseFloat(document.getElementById('order_drink_table').getElementsByTagName('tr')[i].cells[0].innerText) * parseFloat(document.getElementById('order_drink_table').getElementsByTagName('tr')[i].cells[2].innerText.substr(1));
    }
    document.getElementById('total').innerText = "$" + finalTotal.toString();
}

function deleteItem(item) {
    item.remove();
}

function setCustomerDetails() {
    customer.firstName = document.getElementById("firstName").value;
    customer.lastName = document.getElementById("lastName").value;
    customer.address = document.getElementById("address").value;
    customer.phone = document.getElementById("phone").value;
    customer.email = document.getElementById("email").value;
    setCookie("firstName", customer.firstName, 10);
    setCookie("lastName", customer.lastName, 10);
    setCookie("address", customer.address, 10);
    setCookie("phone", customer.phone, 10);
    setCookie("email", customer.email, 10);
    displayCustomer();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// hid options till pressed
function showOptions(option) {
    document.getElementById("quantity").value = 0;
    switch (option) {
        case "pizza":
            document.getElementById('pizza_option_group').style.display = 'flex';
            document.getElementById('size_option_group').style.display = 'flex';
            document.getElementById('sand_option_group').style.display = 'none';
            document.getElementById('drink_option_group').style.display = 'none';
            currentSelection = "pizza";
            break;
        case "sandwich":
            document.getElementById('sand_option_group').style.display = 'flex';
            document.getElementById('size_option_group').style.display = 'none';
            document.getElementById('drink_option_group').style.display = 'none';
            document.getElementById('pizza_option_group').style.display = 'none';
            currentSelection = "sandwich";
            break;
        case "drink":
            document.getElementById('drink_option_group').style.display = 'flex';
            document.getElementById('size_option_group').style.display = 'flex';
            document.getElementById('sand_option_group').style.display = 'none';
            document.getElementById('pizza_option_group').style.display = 'none';
            currentSelection = "drink";
            break;
    }
}

// the main meat & potatoes
function addToOrder() {
    switch (currentSelection) {
        case "pizza":
            pizza.cost = 0;
            pizza.pizza_option = checkThroughOptions(document.getElementsByClassName("pizza_option")).labels[0].innerText;
            pizza.size = checkThroughOptions(document.getElementsByClassName('size_option')).labels[0].innerText;
            const top = document.getElementsByClassName("topping_choice");
            for (let i = 0; i < top.length; i++) {
                if (top[i].checked) {
                    pizza.toppings.push(top[i].labels[0].innerText);
                }
            }
            switch (pizza.size) {
                case "Small":
                    pizza.cost += p_small;
                    break;
                case "Med":
                    pizza.cost += p_med;
                    break;
                case "Large":
                    pizza.cost += p_large;
                    break;
            }
            pizza.cost += (pizza.toppings.length * p_topping);
            pizza.amount = document.getElementById("quantity").value;
            for (let i = 0; i < pizza.amount; i++) {
                order.pizzaList.push(Object.assign({}, pizza));
            }
            break;
        case "sandwich":
            sandwich.cost = 0;
            sandwich.sandwich_option = checkThroughOptions(document.getElementsByClassName("sandwich_option")).labels[0].innerText;
            switch (sandwich.sandwich_option) {
                case "All Garden Vegetarian":
                    sandwich.cost += s_garden;
                    break;
                case "Big Beef on a Bun":
                    sandwich.cost += s_beef;
                    break;
                case "Mixed Grill":
                    sandwich.cost += s_mixed;
                    break;
                case "Grilled Pork":
                    sandwich.cost += s_pork;
                    break;
            }
            sandwich.amount = document.getElementById("quantity").value;
            for (let i = 0; i < sandwich.amount; i++) {
                order.sandwichList.push(Object.assign({}, sandwich));
            }
            break;
        case "drink":
            drink.cost = 0;
            drink.drink_option = checkThroughOptions(document.getElementsByClassName("drink_option")).labels[0].innerText;
            drink.size = checkThroughOptions(document.getElementsByClassName('size_option')).labels[0].innerText;
            switch (drink.size) {
                case "Small":
                    drink.cost += d_small;
                    break;
                case "Med":
                    drink.cost += d_med;
                    break;
                case "Large":
                    drink.cost += d_large;
                    break;
            }
            drink.amount = document.getElementById("quantity").value;
            for (let i = 0; i < drink.amount; i++) {
                order.drinkList.push(Object.assign({}, drink));
            }
            break;
    }
    makeNewRow();
}

function displayCustomer() {
    // getting it from the customer object caused issues for some reason
    // this is easier / it's actually more accurate too.
    document.getElementById('information_name').children[0].appendChild(document.createElement('p')).innerText = capitalizeFirstLetter(document.getElementById('firstName').value) + " " + capitalizeFirstLetter(document.getElementById('lastName').value);
    document.getElementById('information_address').children[0].appendChild(document.createElement('p')).innerText = document.getElementById('address').value;
    document.getElementById('information_phone').children[0].appendChild(document.createElement('p')).innerText = document.getElementById('phone').value;
}

function makeNewRow() {
    const button = document.createElement('button');
    button.type = 'radio';
    button.name = 'Remove';
    button.className = 'removeButton';
    button.onclick = function deleteRow() {
        deleteItem(button.parentElement.parentElement);
        calcTotal();
    };
    let table;
    let newRow;
    let cell_one;
    let cell_two;
    let cell_three;
    switch (currentSelection) {
        case "pizza":
            // i could have used element off the page again but what fun is saving the data to never use it ?
            document.getElementById('pizza_title').style.display = 'block';
            table = document.getElementById('order_pizza_table').getElementsByTagName('tbody')[0];
            newRow = table.insertRow();
            let currentPizza = order.pizzaList[order.pizzaList.length - 1];
            cell_one = newRow.insertCell(0);
            cell_one.appendChild(document.createTextNode(currentPizza.amount));
            cell_two = newRow.insertCell(1);
            cell_two.appendChild(document.createTextNode(currentPizza.pizza_option + ", " + currentPizza.toppings));
            cell_three = newRow.insertCell(2);
            cell_three.appendChild(document.createTextNode("$" + currentPizza.cost));
            newRow.insertCell(3).appendChild(button);
            break;
        case "sandwich":
            document.getElementById('sandwich_title').style.display = 'block';
            table = document.getElementById('order_sandwich_table').getElementsByTagName('tbody')[0];
            newRow = table.insertRow();
            let currentSandwich = order.sandwichList[order.sandwichList.length - 1];
            cell_one = newRow.insertCell(0);
            cell_one.appendChild(document.createTextNode(currentSandwich.amount));
            cell_two = newRow.insertCell(1);
            cell_two.appendChild(document.createTextNode(currentSandwich.sandwich_option));
            cell_three = newRow.insertCell(2);
            cell_three.appendChild(document.createTextNode("$" + currentSandwich.cost));
            newRow.insertCell(3).appendChild(button);
            break;
        case "drink":
            document.getElementById('drink_title').style.display = 'block';
            table = document.getElementById('order_drink_table').getElementsByTagName('tbody')[0];
            newRow = table.insertRow();
            let currentDrink = order.drinkList[order.drinkList.length - 1];
            cell_one = newRow.insertCell(0);
            cell_one.appendChild(document.createTextNode(currentDrink.amount));
            cell_two = newRow.insertCell(1);
            cell_two.appendChild(document.createTextNode(currentDrink.drink_option));
            cell_three = newRow.insertCell(2);
            cell_three.appendChild(document.createTextNode("$" + currentDrink.cost));
            newRow.insertCell(3).appendChild(button);
            break;
    }
    calcTotal();
}

function sendData() {
    if (customer.firstName != null && customer.lastName != null && customer.address != null && (order.drinkList != null || order.pizzaList != null || order.drinkList != null)) {
        alert('We sent the order ! We will make it to Purrrfection!');
    } else {
        alert("Mark are you trying to see if i tested this ? ")
    }
}

// cookie information
function getValue(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cookieName, cookieValue, length) {
    const date = new Date();
    date.setTime(date.getTime() + (length * 24 * 60 * 60));
    const expires = "expires=" + date.toGMTString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function setData() {
    document.getElementById('firstName').value = getValue('firstName');
    document.getElementById('lastName').value = getValue('lastName');
    document.getElementById('address').value = getValue('address');
    document.getElementById('phone').value = getValue('phone');
    document.getElementById('email').value = getValue('email');
}
// far to lazy to fix the time
function welcome() {
    if (getValue("Mark's cookie")) {
        document.getElementById("change_element").innerText = "Welcome back " + getValue('firstName');
        document.getElementById("change_element_date").innerText = "Your last visit was " + getValue("lastVisit");
        setData();
    } else {
        document.getElementById("change_element").innerText = "Welcome new Customer";

    }
}

welcome();
setCookie("Mark's cookie", 1, 365);
setCookie("lastVisit", new Date, 365);
