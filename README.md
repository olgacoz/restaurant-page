# Restaurant Page

A dynamic Single Page Application (SPA) for a restaurant, built entirely with vanilla JavaScript, ES6 modules, and Webpack.

[🔗 Live Demo](https://olgacoz.github.io/restaurant-page/)

## 🌟 Overview

The goal of this project is to build an interactive restaurant website where the entire DOM content is generated dynamically using JavaScript. Instead of using static markup inside HTML, tab navigation (*Home*, *Menu*, *Contact*) wipes and repopulates the page content on the fly using dedicated JS modules.

### Key Features
* **Dynamic Tabbed Navigation:** Switch between pages seamlessly without full page reloads.
* **Modular Architecture:** Clean separation of views into dedicated ES6 modules.

## 🛠️ Tech Stack

* **Language:** JavaScript (ES6 Modules), HTML5, CSS3
* **Bundler:** Webpack 5
* **Configuration & Tools:**
  * **Common (webpack.common.js)**: `webpack-merge`, `HtmlWebpackPlugin`, Webpack Asset Modules (`type: "asset/resource"`)
  * **Development (webpack.dev.js)**: `webpack-dev-server`, `style-loader`, `css-loader`, `eval-source-map`
  * **Production (webpack.prod.js)**: `MiniCssExtractPlugin`, `CssMinimizerPlugin`, `source-map`, Cache Busting
* **Deployment:** GitHub Pages

## 🚀 Running the Project Locally

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) and `npm` installed on your machine.

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

This starts webpack-dev-server and opens http://localhost:8080 automatically.