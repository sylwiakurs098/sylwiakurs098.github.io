console.log("hello")

document.querySelectorAll("nav a").forEach(a => {
    a.onclick = () => {
        document.querySelector("#toggler").checked = false;
    }
})

const projekty = [
    {
        title: "Projekt 1",
        desc: "Opis projektu 1",
        src: "img/Desert.jpg",
    },
    {
        title: "Projekt 2",
        desc: "Opis projektu 2",
        src: "img/Tulips.jpg",
    },
    {
        title: "Projekt 3",
        desc: "Opis projektu 3",
        src: "img/Koala.jpg",
    }
]

let currentProject = 1;
const displayProject = () => {
    const title = document.querySelector("#projekty h3");
    title.innerText = projekty[currentProject].title;

    const desc = document.querySelector("#projekty p");
    desc.innerText = projekty[currentProject].desc;

    const img = document.querySelector("#projekty img");
    img.src = projekty[currentProject].src;

}

displayProject();

document.querySelector(".right").onclick = () => {
    currentProject++;
    if (currentProject >= projekty.length) {
        currentProject = 0;
    }
    displayProject();
}

document.querySelector(".left").onclick = () => {
    currentProject--;
    if (currentProject < 0) {
        currentProject = projekty.length - 1;
    }
    displayProject();
}