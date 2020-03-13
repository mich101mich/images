import * as firebase from "firebase/app"

const search = document.getElementById("search");
if (!(search instanceof HTMLInputElement))
	throw new Error("search is not an HTMLInputElement");
const form = document.getElementById("form");
if (!(form instanceof HTMLFormElement))
	throw new Error("form is not an HTMLFormElement");
const container = document.getElementById("container");
if (!(container instanceof HTMLDivElement))
	throw new Error("container is not an HTMLDivElement");

async function init() {
	await Promise.all([
		import("firebase/auth"),
		import("firebase/firestore"),
	]);

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


	/** @type {{ [x: string]: string; }} */
	let index;
	/** @type {{ [x: string]: HTMLImageElement; }} */
	let images = {};
	/** @type {HTMLCanvasElement[]} */
	let canvas = [];
	/** @type {{ [x: string]: firebase.firestore.DocumentReference; }} */
	let snapshot = {};

	/**
	 * @param {string} input 
	 */
	async function findString(input) {
		if (!index) {
			index = {};
			const snap = await documents.get();
			snap.forEach(doc => {
				snapshot[doc.id] = doc;
				index[doc.id] = " " + doc.get("index") + " ";
			});
		}

		for (const name in images) {
			images[name].hidden = true;
		}

		canvas.forEach((c, ci) => c.hidden = true);
		let i = 0;

		const start = input[0] == " ";
		const end = input[input.length - 1] == " ";
		const text = input.trim();

		for (const name in index) {
			if (index[name].indexOf(input) != -1) {
				if (!(name in images)) {
					const img = document.createElement("img");
					img.src = "https://storage.cloud.google.com/forward-rain-251118.appspot.com/documents/" + encodeURIComponent(name);
					img.hidden = true;
					const onLoad = new Promise((resolve) => img.addEventListener("load", resolve));
					document.body.appendChild(img);
					await onLoad;
					images[name] = img;
				}
				if (i >= canvas.length) {
					const can = document.createElement("canvas");
					can.width = container.clientWidth / 2.01;
					can.height = can.width * 1.5;
					container.appendChild(can);
					canvas.push(can);
				}
				const can = canvas[i];
				can.hidden = false;
				const c = can.getContext("2d");
				const scale = can.width / images[name].width;
				c.resetTransform();
				c.scale(scale, scale);
				c.drawImage(images[name], 0, 0);
				c.lineWidth = 1 / scale + 1;
				c.strokeStyle = "red";

				snapshot[name]
					.get("blocks")
					.filter(block => {
						/** @type string */
						const b = block.text;
						if (start && end) return b == text;
						if (start) return b.startsWith(text);
						if (end) return b.endsWith(text);
						return b.indexOf(text) != -1;
					})
					.forEach(block => {
						c.strokeRect(block.x, block.y, block.width, block.height);
					});

				i += 1;
			}
		}
	}

	form.addEventListener("submit", e => {

		const input = search.value;

		findString(input).catch(console.error)

		e.preventDefault();
		return false;
	});
}
init().catch(console.error);

