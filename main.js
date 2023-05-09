const navlist = document.querySelector(".nav-list");

document.querySelector(".hamburger").onclick = () {
    navlist.classlist.add("show");
};

document.querySelector(".close").onclick = () {
    navlist.classlist.remove("show");
};
