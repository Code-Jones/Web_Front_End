let user = {
    name: "",
    address: "",
    postal_code: "",
    phone_number: "",
    email: ""
};

let lastChoice;

function getData() {
    user = {
        name: document.getElementById('name_box').value,
        address: document.getElementById('address_box').value,
        postal_code: document.getElementById('postal_box').value,
        phone_number: document.getElementById('number_box').value,
        email: document.getElementById('email_box').value
    };
    // console.log(user);
    changeToChoicePage();
}

function changeToChoicePage() {
    // console.log("things");
    document.getElementById('action_page').style.display = "none";
    document.getElementById('calc_box').style.display = "inline-grid";
}

function changeToMeasurements(choice) {
    // console.log("into measurements");
    lastChoice = choice;
    document.getElementById('Square').style.display = 'none';
    document.getElementById("cylinder").style.display = 'none';
    document.getElementById("spherical").style.display = 'none';
    document.getElementById("cone").style.display = 'none';
    // console.log(choice);
    switch (choice) {
        case "Square":
            document.getElementById("square_meas").style.display = "flex";
            break;
        case "cylinder":
            document.getElementById("cylinder_meas").style.display = "flex";
            break;
        case "spherical":
            document.getElementById("sphere_meas").style.display = "flex";
            break;
        case "cone":
            document.getElementById("cone_meas").style.display = "flex";
            break;
    }
}

function squareCalc() {
    let height = document.getElementById("square_height").value;
    let width = document.getElementById("square_width").value;
    let length = document.getElementById('square_length').value;
    let volume = (height * width * length).toFixed(2);
    document.getElementById("square_volume").value = volume;
    document.getElementById('square_cost').value = (volume * 0.1).toFixed(2);
}

function cylinderCalc() {
    let height = document.getElementById("cylinder_height").value;
    let radius = document.getElementById("cylinder_radius").value;
    let volume = (Math.PI * radius * radius * height).toFixed(2);
    document.getElementById("cylinder_volume").value = volume;
    document.getElementById('cylinder_cost').value = (volume * 0.12).toFixed(2);
}

function sphereCalc() {
    let radius = document.getElementById("sphere_radius").value;
    let volume = ((1.3 * Math.PI * radius * radius * radius) * .5).toFixed(2);
    document.getElementById("sphere_volume").value = volume;
    document.getElementById('sphere_cost').value = (volume * 0.15).toFixed(2);
}

function coneCalc() {
    let radius_one = document.getElementById("cone_radius_one").value;
    let radius_two = document.getElementById("cone_radius_two").value;
    let height = document.getElementById("cone_height").value;
    let volume = ((1 / 3) * Math.PI * height * (Math.pow(radius_two, 2) + radius_two * radius_one + Math.pow(radius_one, 2))).toFixed(2);
    document.getElementById("cone_volume").value = volume;
    document.getElementById('cone_cost').value = (volume * 0.2).toFixed(2);
}

function backToChoices(currentPage) {
    document.getElementById(currentPage).style.display = "none";
    // changeToChoicePage();
    document.getElementById('Square').style.display = 'block';
    document.getElementById("cylinder").style.display = 'block';
    document.getElementById("spherical").style.display = 'block';
    document.getElementById("cone").style.display = 'block';
}

function sendReport(shape) {
// could enter everything into object reference
// makes it more streamlined and cleaner code

    changeToChoicePage();
    document.getElementById('calc_box').style.display = "none";
    document.getElementById("final_form").style.display = "flex";
    document.getElementById("final_name").innerText = "Name: " + user.name;
    document.getElementById("final_address").innerText = "Address: " + user.address;
    document.getElementById("final_postal").innerText = "Postal Code: " + user.postal_code;
    document.getElementById("final_shape").innerText = "Shape type: " + shape;
    switch (lastChoice) {
        case "Square":
            document.getElementById("final_dem_one").innerText = "Height: " + document.getElementById('square_height').value;
            document.getElementById("final_dem_two").innerText = "Width: " + document.getElementById('square_width').value;
            document.getElementById("final_dem_three").innerText = "Length: " + document.getElementById('square_length').value;
            document.getElementById("final_volume").innerText = "Volume: " + document.getElementById('square_volume').value;
            document.getElementById("final_cost").innerText = "Cost: " + document.getElementById('square_cost').value;
            break;
        case "cylinder":
            document.getElementById("final_dem_one").innerText = "Height: " + document.getElementById('cylinder_height').value;
            document.getElementById("final_dem_two").innerText = "Radius: " + document.getElementById('cylinder_radius').value;
            document.getElementById("final_volume").innerText = "Volume: " + document.getElementById('cylinder_volume').value;
            document.getElementById("final_cost").innerText = "Cost: " + document.getElementById('cylinder_cost').value;
            break;
        case "spherical":
            document.getElementById("final_dem_one").innerText = "Radius: " + document.getElementById('sphere_radius').value;
            document.getElementById("final_volume").innerText = "Volume: " + document.getElementById('sphere_volume').value;
            document.getElementById("final_cost").innerText = "Cost: " + document.getElementById('sphere_cost').value;
            break;
        case "cone":
            document.getElementById("final_dem_one").innerText = "Height: " + document.getElementById('cone_height').value;
            document.getElementById("final_dem_two").innerText = "Radius One: " + document.getElementById('cone_radius_one').value;
            document.getElementById("final_dem_three").innerText = "Radius Two: " + document.getElementById('cone_radius_two').value;
            document.getElementById("final_volume").innerText = "Volume: " + document.getElementById('cone_volume').value;
            document.getElementById("final_cost").innerText = "Cost: " + document.getElementById('cone_cost').value;
            break;
    }
}

function testing() {
    changeToChoicePage();
    changeToMeasurements("cone");
}
