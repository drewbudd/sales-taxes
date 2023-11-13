# Sales Tax Calculator

## Original Task Description

Basic sales tax is applicable at a rate of 10% on all goods, except books, food, 
and medical products that are exempt. Import duty is an additional sales tax 
applicable on all imported goods at a rate of 5%, with no exemptions. When I 
purchase items I receive a receipt which lists the name of all the items and 
their price (including tax), finishing with the total cost of the items, and the 
total amounts of sales taxes paid. The rounding rules for sales tax are that for 
a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 
0.05) amount of sales tax.

### Some sample input:

```
1 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85
1 imported bottle of perfume at 27.99
1 bottle of perfume at 18.99
1 packet of headache pills at 9.75
1 box of imported chocolates at 11.25
```

## Tech Stack

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