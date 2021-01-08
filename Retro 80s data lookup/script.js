const request = new XMLHttpRequest();
let dataset;
const music = new Audio('Miami_Nights_1984 _Accelerated.mp3');
const headers = "<tr><th>First Name</th><th>Last Name</th><th>ID Number</th><th>Company</th><th>Job Title</th><th>Phone</th></tr>";
let mouseCursor = document.querySelector(".cursor");
let inputs = document.querySelectorAll('.input');
window.addEventListener('mousemove', cursor);

// if the music doesn't play when you load pls reload, chrome and mozilla have this thing
// where it doesn't want to let autoplay things. I tried multiple ways around it but nothing
// worked 100% of the time.
window.onload = loadXML;

function loadXML() {
    document.getElementById("first_name").addEventListener("keyup", function () {
        findClientByAnything(this.value, this.id);
    }, false);
    document.getElementById("last_name").addEventListener("keyup", function () {
        findClientByAnything(this.value, this.id);
    }, false);
    document.getElementById("id").addEventListener("keyup", function () {
        findClientByAnything(this.value, this.id);
    }, false);
    document.getElementById("job_title").addEventListener("keyup", function () {
        findClientByAnything(this.value, this.id);
    }, false);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            dataset = request.responseXML;
        }
    };
    request.open("GET", "dataset.xml", true);
    request.send();
}

function findClientByAnything(inputValue, inputID) {
    document.getElementById("table").innerHTML = "";
    let table = headers;
    const employeeList = dataset.getElementsByTagName("employee");
    for (let i = 0; i < employeeList.length; i++) {
        let employeeTrait = employeeList[i].getElementsByTagName(inputID)[0].childNodes[0].nodeValue;
        if (employeeTrait.toLowerCase().startsWith(inputValue.toLowerCase())) {
            table += "<tr><td>" +
                employeeList[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue +
                "</td><td>" +
                employeeList[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue +
                "</td><td>" +
                employeeList[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
                "</td><td>" +
                employeeList[i].getElementsByTagName("company")[0].childNodes[0].nodeValue +
                "</td><td>" +
                employeeList[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue +
                "</td><td>" +
                employeeList[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue +
                "</td></tr>";
        }
    }
    document.getElementById("table").innerHTML = table;
}

function clearTable(id) {
    if (document.getElementById(id).value === '') {
        document.getElementById("table").innerHTML = "";
    }
}

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

inputs.forEach(input => {
    input.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('input-grow');
        input.classList.remove('hovered-inputs');
    });
    input.addEventListener('mouseover', () => {
        mouseCursor.classList.add('input-grow');
        input.classList.add('hovered-inputs')
    });
});
