let myIndex = 0;
rotation();

function rotation() {
    const img_show = document.getElementsByClassName("img_show");
    const img_figcaption = document.getElementsByClassName('img_figcaption');
    for (let i = 0; i < img_show.length; i++) {
        img_show[i].style.display = "none";
        img_figcaption[i].style.display = "none";
    }

    myIndex++;
    if (myIndex > img_show.length) {myIndex = 1}
    img_show[myIndex - 1 ].style.display = "block";
    img_figcaption[myIndex - 1].style.display = "block";
    setTimeout(rotation, 5000);
}

