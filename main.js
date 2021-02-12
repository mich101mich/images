// @ts-check

let search = getInputElement("search");
let submit = getInputElement("submit");
let form = getFormElement("form");
let container = getDivElement("container");
let scaleNum = getElement("scaleNum");
let scaleSlider = getInputElement("scale");

let scale = parseInt(scaleSlider.value);

/** @type {{[name: string]: string}} */
const index = {};
/** @type {{[name: string]: HTMLImageElement}} */
const images = {};
/** @type {HTMLCanvasElement[]} */
const canvas = [];
/** @type {{[name: string]: firebase.firestore.QueryDocumentSnapshot}} */
const snapshot = {};
/** @type {string[]} */
const ids = [];

let finished = false;

async function init() {
	await import("firebase/app");
	await Promise.all([
		import("firebase/auth"),
		import("firebase/firestore")
	])

	firebase.initializeApp({
		apiKey: "AIzaSyA6NxdrkCKIxqu3XBkx5hIVteOQ0jv2zrA",
		authDomain: "forward-rain-251118.firebaseapp.com",
		databaseURL: "https://forward-rain-251118.firebaseio.com",
		projectId: "forward-rain-251118",
		storageBucket: "forward-rain-251118.appspot.com",
		messagingSenderId: "924050779321",
		appId: "1:924050779321:web:ab16910e8859ce8c71ff68",
		measurementId: "G-R9KW7GPT0L"
	});

	const auth = new firebase.auth.GoogleAuthProvider();
	await firebase.auth().signInWithPopup(auth);

	const db = firebase.firestore();

	const documents = db.collection("documents");

	const snap = await documents.get();
	snap.forEach(doc => {
		snapshot[doc.id] = doc;
		index[doc.id] = " " + doc.get("index") + " ";
		ids.push(doc.id);
	});
	finished = true;
}

init().catch(console.error);

let lastQuery = "";

/**
 * @param {string} input
 */
async function findString(input, force = false) {
	if (!finished || input.length < 3) {
		return;
	}
	if (!force && lastQuery == input) {
		return;
	}
	lastQuery = input;

	input = input.toLowerCase();

	finished = false;
	checkEnabled();

	canvas.forEach(c => c.hidden = true);

	const start = input[0] == " ";
	const end = input[input.length - 1] == " ";
	const trimmed = input.trim();

	const found = ids.filter(id => index[id].indexOf(input) != -1);

	while (canvas.length < found.length) {
		const can = document.createElement("canvas");
		can.width = container.clientWidth / scale - 1;
		can.height = can.width * 1.5 + 1;
		can.style.width = can.width + "px";
		can.style.height = can.height + "px";
		container.appendChild(can);
		canvas.push(can);
	}

	await Promise.all(found.map((id, i) => showImage(id, canvas[i], trimmed, start, end)));

	finished = true;
	checkEnabled();
}

function checkEnabled() {
	const submitEnabled = finished && search.value.trim().length >= 3 && search.value != lastQuery;
	const sliderEnabled = finished && lastQuery.length >= 3;
	submit.disabled = !submitEnabled;
	scaleSlider.disabled = !sliderEnabled;
}

search.addEventListener("input", checkEnabled);

form.onsubmit = (e) => {
	findString(search.value).catch(console.error)

	e.preventDefault();
	return false;
};

/**
 * @param {boolean} redraw
 */
function resize(redraw) {
	for (const can of canvas) {
		const ratio = can.height / can.width;
		const width = container.clientWidth / scale - 1;
		const height = width * ratio + 1;
		can.style.width = width + "px";
		can.style.height = height + "px";
	}
	if (redraw) {
		findString(lastQuery, true).catch(console.error)
	}
}

window.addEventListener("resize", () => resize(true));

scaleSlider.addEventListener("input", () => {
	scale = parseInt(scaleSlider.value);
	scaleNum.innerText = "Images per Row: " + scale;
	resize(false);
});
scaleSlider.addEventListener("change", () => {
	scale = parseInt(scaleSlider.value);
	scaleNum.innerText = "Images per Row: " + scale;
	resize(true);
});

/**
 * @param {string} id 
 * @param {HTMLCanvasElement} can 
 * @param {string} text 
 * @param {boolean} start 
 * @param {boolean} end 
 */
async function showImage(id, can, text, start, end) {
	if (!(id in images)) {
		const img = document.createElement("img");
		img.src = "https://storage.cloud.google.com/forward-rain-251118.appspot.com/documents/" + encodeURIComponent(id);
		img.hidden = true;
		const onLoad = new Promise((resolve) => img.addEventListener("load", resolve));
		document.body.appendChild(img);
		await onLoad;
		images[id] = img;
	}
	const image = images[id];

	can.hidden = false;
	const ratio = image.height / image.width;
	can.width = container.clientWidth / scale - 1;
	can.height = can.width * ratio + 1;
	can.style.width = can.width + "px";
	can.style.height = can.height + "px";

	const c = can.getContext("2d");
	if (!c) {
		throw new Error("Cannot get 2d Context of Canvas");
	}
	const imageScale = can.width / image.width;
	c.resetTransform();
	c.scale(imageScale, imageScale);
	c.drawImage(image, 0, 0);
	c.lineWidth = 1 / imageScale + 1;
	c.strokeStyle = "red";

	/**
	 * @type {{ text: string; x: number, y: number, width: number, height: number }[]} blocks
	 */
	const blocks = snapshot[id].get("blocks");
	blocks
		.filter((block) => {
			const b = block.text;
			if (start && end) return b == text;
			if (start) return b.startsWith(text);
			if (end) return b.endsWith(text);
			return b.indexOf(text) != -1;
		})
		.forEach((block) => {
			c.strokeRect(block.x, block.y, block.width, block.height);
		});
}

/** @param {string} id */
function getElement(id) {
	const ret = document.getElementById(id);
	if (!ret) throw new Error(`Element ${id} does not exist`);
	return ret;
}
/** @param {string} id */
function getInputElement(id) {
	const ret = getElement(id);
	if (!(ret instanceof HTMLInputElement)) throw new Error(`Element ${id} is not of type HTMLInputElement`);
	return ret;
}
/** @param {string} id */
function getDivElement(id) {
	const ret = getElement(id);
	if (!(ret instanceof HTMLDivElement)) throw new Error(`Element ${id} is not of type HTMLDivElement`);
	return ret;
}
/** @param {string} id */
function getFormElement(id) {
	const ret = getElement(id);
	if (!(ret instanceof HTMLFormElement)) throw new Error(`Element ${id} is not of type HTMLFormElement`);
	return ret;
}
