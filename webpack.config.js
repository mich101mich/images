const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: "./main.js",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "docs")
	},
	mode: "production"
};
