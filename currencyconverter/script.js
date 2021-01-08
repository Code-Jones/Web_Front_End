// TODO
//  up to date currency rate
//  make more efficient
//  more css


function changeText() {
    document.getElementById("label_1").innerText = document.getElementById("currency_option_1").value;
    document.getElementById("label_2").innerText = document.getElementById("currency_option_2").value;
    hidChoice();
}

function hidChoice() {
    const option_1 = document.getElementById("currency_option_1");
    const option_2 = document.getElementById("currency_option_2");
    for (let i = 0; i < option_1.length; i++) {
        option_1[i].style.visibility = 'visible';
        option_2[i].style.visibility = 'visible';
    }
    option_1[option_2.selectedIndex].style.visibility = 'hidden';
    option_2[option_1.selectedIndex].style.visibility = 'hidden';
}

function box1_to_box2() {
    const currency_1 = document.getElementById("currency_option_1").value;
    const currency_2 = document.getElementById("currency_option_2").value;
    const text_box_clicked = "text_box_1";
    const text_box_change = "text_box_2";
    change(currency_1, currency_2, text_box_clicked, text_box_change)
}
function box2_to_box1() {
    const currency_1 = document.getElementById("currency_option_2").value;
    const currency_2 = document.getElementById("currency_option_1").value;
    const text_box_clicked = "text_box_2";
    const text_box_change = "text_box_1";
    change(currency_1, currency_2, text_box_clicked, text_box_change)
}

function change(currency_1, currency_2, text_box_clicked, text_box_change) {
    if (currency_1 === "Canadian Dollar") {
        switch (currency_2) {
            case "Euro":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 0.68).toFixed(2);
                document.getElementById('rate').innerText = "1 Cad = 0.68 Euro";
                break;
            case "US Dollar":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 0.75).toFixed(2);
                document.getElementById('rate').innerText = "1 Cad = 0.75 USD";
                break;
            case "UK Pound Sterling":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 0.58).toFixed(2);
                document.getElementById('rate').innerText = "1 Cad = 0.58 Pound";
                break;
            case "Japanese Yen":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 80.57).toFixed(2);
                document.getElementById('rate').innerText = "1 Cad = 80.57 Yen";
                break;
        }
    }

    if (currency_1 === "Euro") {
        switch (currency_2) {
            case "Canadian Dollar":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 1.48).toFixed(2);
                document.getElementById('rate').innerText = "1 Euro = 1.48 CAD";
                break;
            case "US Dollar":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 1.10).toFixed(2);
                document.getElementById('rate').innerText = "1 Euro = 1.10 USD";
                break;
            case "UK Pound Sterling":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 0.86).toFixed(2);
                document.getElementById('rate').innerText = "1 Euro = 0.86 Pound";
                break;
            case "Japanese Yen":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 119.19).toFixed(2);
                document.getElementById('rate').innerText = "1 Euro = 119.19 Yen";
                break;
        }
    }

    if (currency_1 === "US Dollar") {
        switch (currency_2) {
            case "Canadian Dollar":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 1.34).toFixed(2);
                document.getElementById('rate').innerText = "1 USD = 1.34 CAD";
                break;
            case "Euro":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 0.91).toFixed(2);
                document.getElementById('rate').innerText = "1 USD = 0.91 Euro";
                break;
            case "UK Pound Sterling":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 0.78).toFixed(2);
                document.getElementById('rate').innerText = "1 USD = 0.78 Pound";
                break;
            case "Japanese Yen":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 108.12).toFixed(2);
                document.getElementById('rate').innerText = "1 USD = 108.12 Yen";
                break;
        }
    }
    if (currency_1 === "UK Pound Sterling") {
        switch (currency_2) {
            case "Canadian Dollar":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 1.72).toFixed(2);
                document.getElementById('rate').innerText = "1 Pound = 1.72 CAD";
                break;
            case "Euro":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 1.16).toFixed(2);
                document.getElementById('rate').innerText = "1 Pound = 1.16 Euro";
                break;
            case "US Dollar":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 1.28).toFixed(2);
                document.getElementById('rate').innerText = "1 Pound = 1.28 USD";
                break;
            case "Japanese Yen":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 138.58).toFixed(2);
                document.getElementById('rate').innerText = "1 Pound = 138.58 Yen";
                break;
        }
    }
    // i changed the decimal point to 4 for this one. it makes more sense for yen
    if (currency_1 === "Japanese Yen") {
        switch (currency_2) {
            case "Canadian Dollar":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 0.012).toFixed(4);
                document.getElementById('rate').innerText = "1 Yen = 0.012 CAD";
                break;
            case "Euro":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 0.0084).toFixed(4);
                document.getElementById('rate').innerText = "1 Pound = 0.0084 Euro";
                break;
            case "US Dollar":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 0.0093).toFixed(4);
                document.getElementById('rate').innerText = "1 Pound = 0.0093 USD";
                break;
            case "UK Pound Sterling":
                document.getElementById(text_box_change).value = (document.getElementById(text_box_clicked).value * 0.0072).toFixed(4);
                document.getElementById('rate').innerText = "1 Pound = 0.0072 Pound";
                break;
        }
    }
}

