# Sales Tax Calculator

Tech Stack:

* [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
* NuxtUI
* Vue 3 (part of Nuxt 3)
* TypeScript
* Vitest
* Eslint
* Docker
* Node.js 18 (as required by Nuxt 3)

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Docker

There is a Dockerfile provided to build a production version of the app. You should build the image, then run it.
There are many ways this could be done, but a short example would be:

```bash
docker build . -t sales-tax:newest
docker run -p 3000:3000 sales-tax:newest
```

With these commands, you should have the app running locally at ```http://localhost:3000```