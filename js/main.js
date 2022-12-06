let width = window.innerWidth;
let heigh = window.innerHeight;
let boxes = document.querySelectorAll(".box");

let body = document.querySelector("body");
window.addEventListener("resize", setup);
window.addEventListener("load", setup, false);

// NAV
let navBurger = document.querySelector(".burger");
let dropDown = document.querySelector("nav .links");
let close = document.querySelector("nav .close");
close.addEventListener("click", showNav);
navBurger.addEventListener("click", showNav);
function showNav() {
	dropDown.classList.toggle("active");
	if (dropDown.classList.contains("active")) {
		body.classList.add("noScroll");
	} else {
		body.classList.remove("noScroll");
	}
}

function setup() {
	heigh = window.innerHeight;
	width = window.innerWidth;
	boxSize();
	body.classList.add("loaded");
}

let links = dropDown.children;
for (let i = 0; i < links.length; i++) {
	let navLink = links[i];
	navLink.addEventListener("click", closeNav);
}
function closeNav() {
	if (width < 650) {
		dropDown.classList.remove("active");
		body.classList.remove("noScroll");
		console.log("MALI");
	}
}

function boxSize() {
	let boxSize = { width: width / 2, heigh: width / 2.3, flex: "0 0 50%" };
	let gridSize = {
		width: width,
		heigh: width / 2.3,
	};

	if (width > 1230) {
		boxSize = {
			width: width / 2,
			heigh: width / 2.3,
			flex: "0 0 50%",
		};
		gridSize = {
			width: width,
			height: width / 2.3,
		};
		console.log("PRVA");
	} else if (width < 1230 && width > 768) {
		gridSize = {
			width: width,
			height: width * 1.6,
		};
		console.log("druga");
	} else if (width < 768) {
		boxSize = {
			width: "unset",
			height: "unset",
			flex: "0 0 100%",
		};
		console.log("treca");
	}

	boxes.forEach((box) => {
		box.style.width = `${boxSize.width}px`;
		box.style.height = `${boxSize.heigh}px`;
		box.style.flex = boxSize.flex;
	});
}

// --------------
// ---TRECINA----
//----------------

let slide_links = document.querySelectorAll("a.opt-link");
let emp_box = document.querySelector("#emp_box");
let opts = document.querySelectorAll(".opt");
let thr_imgWrapper = document.querySelector("#optImg");

slide_links.forEach((link) => {
	let currentLink = link.getAttribute("data-link");
	link.addEventListener("click", (e) => {
		e.preventDefault();
		removeActiveLink();
		link.classList.add("active");
		opts.forEach((opt) => {
			opt.classList.remove("active");
		});
		let currentOpt = document.querySelectorAll(`[data-link="${currentLink}"]`);
		currentOpt.forEach((opt) => {
			opt.classList.add("active");
		});
		emp_box.className = `top ${currentLink}`;
		console.log(currentOpt);
		thr_imgWrapper.setAttribute("data-link", `${currentLink}`);
	});
});
function removeActiveLink() {
	slide_links.forEach((link) => {
		link.classList.remove("active");
	});
}

// PAKETI

let paketi = document.querySelectorAll("#paketi article.card");

function paketiEffect() {
	paketi.forEach((paket) => {
		paket.classList.add("active");
	});
}

window.addEventListener("load", paketiEffect);
