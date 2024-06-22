<div align="center">
    <a href="https://fjrodafo-cv.vercel.app/">
        <picture>
            <img alt="Preview" src="https://raw.githubusercontent.com/FJrodafo/FJrodafo/main/App/cv/src/images/preview.png">
        </picture>
    </a>
</div>

## Index

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Run it!](#run-it)
4. [Run with Docker](#run-with-docker)
5. [Build Docker image on your own](#build-docker-image-on-your-own)
6. [Learn More](#learn-more)

## Introduction

My professional minimalist cv, made with [Nextjs](https://nextjs.org/), powered by [Vercel](https://vercel.com/), designed by [Bartosz Jarocki](https://github.com/BartoszJarocki)!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/FJrodafo/FJrodafo/tree/main/App/cv)

## Project Structure

<details>
<summary>Click me</summary>

```
cv/
├── node_modules/
│   └── ...
├── public/
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── icons/
│   │   │   ├── *.tsx
│   │   │   └── index.ts
│   │   ├── ui/
│   │   │   └── *.tsx
│   │   └── *.tsx
│   ├── data/
│   │   └── resume.tsx
│   ├── images/
│   │   └── preview.png
│   └── lib/
│       └── utils.ts
├── components.json
├── docker-compose.yaml
├── Dockerfile
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
</details>

## Run it!

This project must be initialized and the necessary dependencies installed with the following command (Make sure you are in the `cv` directory):

```shell
npm install
```

If you have Node v18 or higher installed on your machine, then you are good to go!

To check if you already have Node installed on your machine, run `node -v` in your terminal. Otherwise, you will need to install Node v18 or higher or, as a last option, check out the [Docker](#run-with-docker) alternative.

Finally, if you have Node installed, run the following command to run the development server (Make sure you are in the `cv` directory):

```shell
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
# Press 'Ctrl + C' to exit
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Run with Docker

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

If you don't have Node v18 or higher installed on your machine, you can build a Docker image by running the [Dockerfile](./Dockerfile).

Open a terminal and run the following command (Make sure you are in the `cv` directory):

```shell
docker build -t fjrodafo-cv .
```

After the build completes, you can run your container with the following command:

```shell
docker run -dp 127.0.0.1:3000:3000 fjrodafo-cv
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<link rel="stylesheet" href="./README.css">
<a class="scrollup" href="#top">&#x1F53A</a>