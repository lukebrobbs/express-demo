# Express web application demo

This repo is a small demo of an express application,

## Getting started

To start the app, first install the necessary dependencies by running:

```bash
npm install
```

To start the application, you can run `npm start`.

## Whats in the box

If you take a look in the `src` folder, you will see the following directories and files:

-**index.js** - This is where the express application is initiated, and the server is started.

- **routes** - All of the routes are defined here. Take a look at the [Express guide](https://expressjs.com/en/guide/routing.html) for a little more information.
- **controllers** - Handlers for your routes live here. Mozilla has a [useful guide](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes) that covers both routes and controllers.
- **middleware** - Functions that have access to the `request` and `response` objects like controllers, but that also have access to a `next` parameter, which allows moving on to the next part of the requests cycle. See the [Express guide](https://expressjs.com/en/guide/using-middleware.html)
