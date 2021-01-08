/*script.js*/
const xhr = new XMLHttpRequest();
let importedData;
window.onload = loaddata;

function loaddata() {
    document.getElementById("IDNumber").addEventListener("keyup", function () {
        searchIDNumber(this.value);
    }, false);
    document.getElementById("firstName").addEventListener('keyup', function () {
        searchByFirstName(this.value);
    }, false);
    document.getElementById("lastName").addEventListener('keyup', function () {
        searchByLastName(this.value);
    }, false);
    document.getElementById("address").addEventListener('keyup', function () {
        searchByAddress(this.value);
    }, false);
    document.getElementById("postalCode").addEventListener('keyup', function () {
        searchByPostalCode(this.value);
    }, false);
    document.getElementById("phone").addEventListener('keyup', function () {
        searchByPhone(this.value);
    }, false);
    document.getElementById("type").addEventListener("keyup", function () {
        searchByType(this.value);
    }, false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            importedData = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "ClientData.json", true);
    xhr.send();
}

function searchIDNumber(inputID) {
    document.getElementById("searchValue").innerHTML = "Search by ID Number" + "<br>";
    let output = "<tr><th>ID Number</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code </th><th>Phone</th><th>Type</th></tr>";
    for (let i = 0; i < importedData.length; i++) {
        const obj = importedData[i];
        if (obj.id === parseInt(inputID)) {
            output += "<tr><td>";
            output += obj.id;
            output += "</td><td>";
            output += obj.firstName;
            output += "</td><td>";
            output += obj.lastName;
            output += "</td><td>";
            output += obj.address;
            output += "</td><td>";
            output += obj.postalCode;
            output += "</td><td>";
            output += obj.phone;
            output += "</td><td>";
            output += obj.type;
            output += "</td></tr>";
        }
    }
    document.getElementById("searchResults").innerHTML = output;


}

function searchByFirstName(searchInput) {
    document.getElementById("searchValue").innerHTML = "Search by First Name" + "<br>";
    let output = "<tr><th>ID Number</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code </th><th>Phone</th><th>Type</th></tr>";
    for (let i = 0; i < importedData.length; i++) {
        let obj = importedData[i];
        let searchName = obj.firstName.toLowerCase(); // made it not case sensitive
        if (searchName.startsWith((searchInput.toLowerCase()))) {
            output += "<tr><td>";
            output += obj.id;
            output += "</td><td>";
            output += obj.firstName;
            output += "</td><td>";
            output += obj.lastName;
            output += "</td><td>";
            output += obj.address;
            output += "</td><td>";
            output += obj.postalCode;
            output += "</td><td>";
            output += obj.phone;
            output += "</td><td>";
            output += obj.type;
            output += "</td></tr>";
        }
    }
    document.getElementById("searchResults").innerHTML = output;
}

function searchByLastName(searchInput) {
    document.getElementById("searchValue").innerHTML = "Search by Last Name" + "<br>";
    let output = "<tr><th>ID Number</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code </th><th>Phone</th><th>Type</th></tr>";
    for (let i = 0; i < importedData.length; i++) {
        let obj = importedData[i];
        let searchName = obj.lastName.toLowerCase(); // made it not case sensitive
        if (searchName.startsWith((searchInput.toLowerCase()))) {
            output += "<tr><td>";
            output += obj.id;
            output += "</td><td>";
            output += obj.firstName;
            output += "</td><td>";
            output += obj.lastName;
            output += "</td><td>";
            output += obj.address;
            output += "</td><td>";
            output += obj.postalCode;
            output += "</td><td>";
            output += obj.phone;
            output += "</td><td>";
            output += obj.type;
            output += "</td></tr>";
        }
    }
    document.getElementById("searchResults").innerHTML = output;
}

function searchByAddress(searchInput) {
    document.getElementById("searchValue").innerHTML = "Search by Address" + "<br>";
    let output = "<tr><th>ID Number</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code </th><th>Phone</th><th>Type</th></tr>";
    for (let i = 0; i < importedData.length; i++) {
        let obj = importedData[i];
        let searchName = obj.address.toLowerCase(); // made it not case sensitive
        if (searchName.startsWith((searchInput.toLowerCase()))) {
            output += "<tr><td>";
            output += obj.id;
            output += "</td><td>";
            output += obj.firstName;
            output += "</td><td>";
            output += obj.lastName;
            output += "</td><td>";
            output += obj.address;
            output += "</td><td>";
            output += obj.postalCode;
            output += "</td><td>";
            output += obj.phone;
            output += "</td><td>";
            output += obj.type;
            output += "</td></tr>";
        }
    }
    document.getElementById("searchResults").innerHTML = output;
}

function searchByPostalCode(searchInput) {
    document.getElementById("searchValue").innerHTML = "Search by Postal Code" + "<br>";
    let output = "<tr><th>ID Number</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code </th><th>Phone</th><th>Type</th></tr>";
    for (let i = 0; i < importedData.length; i++) {
        let obj = importedData[i];
        let searchName = obj.postalCode.toLowerCase(); // made it not case sensitive
        if (searchName.startsWith((searchInput.toLowerCase()))) {
            output += "<tr><td>";
            output += obj.id;
            output += "</td><td>";
            output += obj.firstName;
            output += "</td><td>";
            output += obj.lastName;
            output += "</td><td>";
            output += obj.address;
            output += "</td><td>";
            output += obj.postalCode;
            output += "</td><td>";
            output += obj.phone;
            output += "</td><td>";
            output += obj.type;
            output += "</td></tr>";
        }
    }
    document.getElementById("searchResults").innerHTML = output;
}

function searchByPhone(inputID) {
    document.getElementById("searchValue").innerHTML = "Search by Phone Number" + "<br>";
    let output = "<tr><th>ID Number</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code </th><th>Phone</th><th>Type</th></tr>";
    for (let i = 0; i < importedData.length; i++) {
        const obj = importedData[i];
        if (obj.phone.startsWith(inputID)) {
            output += "<tr><td>";
            output += obj.id;
            output += "</td><td>";
            output += obj.firstName;
            output += "</td><td>";
            output += obj.lastName;
            output += "</td><td>";
            output += obj.address;
            output += "</td><td>";
            output += obj.postalCode;
            output += "</td><td>";
            output += obj.phone;
            output += "</td><td>";
            output += obj.type;
            output += "</td></tr>";
        }
    }
    document.getElementById("searchResults").innerHTML = output;


}

function searchByType(searchInput) {
    document.getElementById("searchValue").innerHTML = "Search by Type" + "<br>";
    let output = "<tr><th>ID Number</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code </th><th>Phone</th><th>Type</th></tr>";
    for (let i = 0; i < importedData.length; i++) {
        let obj = importedData[i];
        let searchName = obj.type.toLowerCase(); // made it not case sensitive
        if (searchName.startsWith((searchInput.toLowerCase()))) {
            output += "<tr><td>";
            output += obj.id;
            output += "</td><td>";
            output += obj.firstName;
            output += "</td><td>";
            output += obj.lastName;
            output += "</td><td>";
            output += obj.address;
            output += "</td><td>";
            output += obj.postalCode;
            output += "</td><td>";
            output += obj.phone;
            output += "</td><td>";
            output += obj.type;
            output += "</td></tr>";
        }
    }
    document.getElementById("searchResults").innerHTML = output;
}

