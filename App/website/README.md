<div align="center">
    <a href="https://fjrodafo.vercel.app/">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/FJrodafo/FJrodafo/main/App/website/src/assets/images/preview/dark.png">
            <img alt="Preview" src="https://raw.githubusercontent.com/FJrodafo/FJrodafo/main/App/website/src/assets/images/preview/light.png">
        </picture>
    </a>
</div>

## Index

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Run it!](#run-it)
4. [Run with Docker](#run-with-docker)
5. [Build Docker image on your own](#build-docker-image-on-your-own)
6. [Available Scripts](#available-scripts)

## Introduction

My professional minimalist website, made with [React](https://react.dev/), powered by [Vercel](https://vercel.com/)!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/FJrodafo/FJrodafo/tree/main/App/website)

## Project Structure

<details>
<summary>Click me</summary>

```
website/
├── node_modules/
│   └── ...
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── *.woff2
│   │   ├── icons/
│   │   │   └── *.svg
│   │   ├── images/
│   │   │   ├── .../
│   │   │   │   └── *.png
│   │   │   └── profile.jpg
│   │   ├── styles/
│   │   │   └── *.css
│   │   ├── translations/
│   │   │   └── .../
│   │   │       └── *.json
│   │   └── FJrodafo-CV.pdf
│   ├── components/
│   │   ├── context/
│   │   │   └── ...
│   │   ├── layout/
│   │   │   └── ...
│   │   └── sections/
│   │       └── ...
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .env
├── docker-compose.yaml
├── Dockerfile
├── package-lock.json
└── package.json
```
</details>

## Run it!

This project needs a `.env` into the `website` directory with some data related to your EmailJS service (Make sure you have an EmailJS account created, you can create one in the [EmailJS](https://www.emailjs.com/) official website):

```conf
REACT_APP_EMAILJS_SERVICE_ID=your_service_code
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_code
REACT_APP_EMAILJS_USER_ID=your_user_code
```

As well, this project must be initialized and the necessary dependencies installed with the following command (Make sure you are in the `website` directory):

```shell
npm install
```

If you have the `.env` file into the `website` directory correctly configurated and Node v18 or higher installed on your machine, then you are good to go!

To check if you already have Node installed on your machine, run `node -v` in your terminal. Otherwise, you will need to install Node v18 or higher or, as a last option, check out the [Docker](#run-with-docker) alternative.

Finally, if you have Node installed, run the following command to run the app in the development mode (Make sure you are in the `website` directory):

```shell
npm start
# Press 'Ctrl + C' to exit
```

## Run with Docker

Make sure to create and configurate the `.env` file correctly into the `website` directory before running Docker commands...

Build the container:

```shell
docker compose build
```

Run the container:

```shell
docker compose up -d
```

Stop the Container:

```shell
docker compose down
```

## Build Docker image on your own

If you don't have Node v18 or higher installed on your machine, you can build a Docker image by running the [Dockerfile](./Dockerfile) (Make sure to create and configurate the `.env` file correctly into the `website` directory before building the docker image).

Open a terminal and run the following command (Make sure you are in the `website` directory):

```shell
docker build -t fjrodafo .
```

After the build completes, you can run your container with the following command:

```shell
docker run -dp 127.0.0.1:3000:3000 fjrodafo
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

<link rel="stylesheet" href="./README.css">
<a class="scrollup" href="#top">&#x1F53A</a>