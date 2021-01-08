const xhr = new XMLHttpRequest();
let importedData;
window.onload = loadData;
let finalTotal = 0;
let days;

function loadData() {
    document.getElementById("lastNameInput").addEventListener('keyup', function () {
        searchByLastName(this.value);
    }, false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            importedData = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "rentalclients.json", true);
    xhr.send();
}

function searchByLastName(searchInput) {
    let obj;
    let output = "<tr></tr>";
    for (let i = 0; i < importedData.length; i++) {
        obj = importedData[i];
        let searchName = obj.last_name.toLowerCase(); // made it not case sensitive
        if (searchName.startsWith((searchInput.toLowerCase()))) {
            output += "<tr onclick='fillDetails(this.id)'><td>";
            output += obj.first_name;
            output += "</td><td>";
            output += obj.last_name;
            output += "</td></tr>";
        }
    }
    document.getElementById("searchResults").innerHTML = output;
    document.querySelectorAll('table tr').forEach(function (e, i) {
        if (e.textContent.trim().length === 0) {
            e.parentNode.removeChild(e);
        } else {
            e.setAttribute('id', i.toString());
        }
    });
}

function fillDetails(id) {
    let obj;
    for (let i = 0; i < document.getElementsByTagName('tr').length; i++) {
        if (document.getElementsByTagName('tr')[i].id.toString() === id) {
            document.getElementById('firstNameOutput').value = document.getElementsByTagName('tr')[i].cells[0].innerText;
            document.getElementById('lastNameOutput').value = document.getElementsByTagName('tr')[i].cells[1].innerText;
            for (let j = 0; j < importedData.length; j++) {
                obj = importedData[j];
                let searchName = obj.last_name.toLowerCase();
                if (searchName.startsWith(((document.getElementsByTagName('tr')[i].cells[1].innerText).toLowerCase()))) {
                    document.getElementById('address').value = obj.address;
                    document.getElementById('phone').value = obj.phone;
                    document.getElementById('firstNameOutput').removeAttribute('disabled');
                    document.getElementById('lastNameOutput').removeAttribute('disabled');
                    document.getElementById('address').removeAttribute('disabled');
                    document.getElementById('phone').removeAttribute('disabled');
                    document.getElementById('email').removeAttribute('disabled');
                    document.getElementById('prov').removeAttribute('disabled');
                }
            }
        }
    }
    formFade();
}

function scrollFade() {
    document.getElementById('scrollbox').classList.remove("hidden");
    document.getElementById('scrollbox').classList.add('visible');
    document.getElementById('formFade').classList.add('hidden');
}

function formFade() {
    document.getElementById('scrollbox').classList.add("hidden");
    document.getElementById('formFade').classList.remove("hidden");
    document.getElementById('formFade').classList.add('visible');
}

function getTotal() {
    if (finalTotal !== 0) {
        finalTotal = 0;
    }
    document.getElementById('total').value = null;
    if (document.getElementById('days').value !== 0) {
        let days = document.getElementById('days').value;
        for (let i = 1; i < document.getElementsByName('carType').length; i++) {
            if (document.getElementsByName('carType')[i].checked) {
                switch (document.getElementsByName('carType')[i].id) {
                    case "compact":
                        finalTotal += days * 15;
                        break;
                    case "midSize":
                        finalTotal += days * 20;
                        break;
                    case "luxury":
                        finalTotal += days * 35;
                        break;
                    case "truck":
                        finalTotal += days * 40;
                        break;
                }
            }
        }
        if (document.getElementById('rack').checked) {
            finalTotal += days * 5;
        }
        if (document.getElementById('gps').checked) {
            finalTotal += days * 10;
        }
    }
    document.getElementById('total').value = finalTotal;
}

function sendAlert() {
    alert('Mark your total is : $' + finalTotal + ". Don't worry I accept E-transfers");
}

