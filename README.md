# Restaurant Page

A dynamic Single Page Application (SPA) for a restaurant, built entirely with vanilla JavaScript, ES6 modules, and Webpack.

[🔗 Live Demo](https://olgacoz.github.io/restaurant-page/)

## 🌟 Overview

The goal of this project is to build an interactive restaurant website where the entire DOM content is generated dynamically using JavaScript. Instead of using static markup inside HTML, tab navigation (*Home*, *Menu*, *Contact*) wipes and repopulates the page content on the fly using dedicated JS modules.

### Key Features
* **Dynamic Tabbed Navigation:** Switch between pages seamlessly without full page reloads.
* **Modular Architecture:** Clean separation of views into dedicated ES6 modules.
* **Webpack Build Pipeline:** Bundling JS, injecting CSS, processing webp/jpg images, and generating `index.html` dynamically via `HtmlWebpackPlugin`.
* **Responsive Design:** Optimized across mobile, tablet, and desktop viewports.

## 🛠️ Tech Stack

* **Language:** JavaScript (ES6 Modules), HTML5, CSS3
* **Bundler:** Webpack
  * **Plugins:** `HtmlWebpackPlugin`
  * **Loaders:** `style-loader`, `css-loader`
  * **Asset Management:** Webpack Asset Modules (`type: "asset/resource"`)
* **Dev Environment:** `webpack-dev-server` with `eval-source-map`
* **Hosting & Deployment:** GitHub Pages

## 🚀 Running the Project Locally

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) and `npm` installed on your machine.

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npx webpack serve
```

Open http://localhost:8080 in your browser.

## ℹ️ Note on Webpack Build Warnings

When running `npx webpack` or `npx webpack serve`, you may notice performance warnings (WARNING in asset size limit / entrypoint size limit). These occur because high-resolution image assets exceed Webpack's default 244 KiB threshold. These warnings do not affect site functionality and can be safely ignored.