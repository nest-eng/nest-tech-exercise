# Nest Tech Exercise

This codebase is intended for technical interviews at Nest. If you are a candidate, before your interview please clone this repo locally and follow the setup instructions to build and run the app. If you have any difficultly, email the hiring manager or interviewer with the issue and we can help you resolve it ASAP or at the beginning of the interview.

Once the interview begins, your interviewer will send you a link to a list of tasks to be pair programmed throughout the session.

## API Server

### Setup instructions

After cloning the repo locally, you must install the required dependencies to be able to run the app.

#### Install dependencies

Running the API server securely over https requires `mkcert` and `nss` to create certificates locally. Once installed, the certificates will be created when you start the dev server.

    brew install mkcert nss

Running the API server requires docker, if you don't have it installed locally you can [download it here](https://docs.docker.com/get-docker/). Once installed and running you go to the `/api` directory and run:

    npm run docker:build

#### Running the app

Run the following inside the `/api` directory to start the API server:

    npm run docker:dev

Run migration and seed the database:

    npm run docker:db:reset

> The app uses port `8000`, if it isn't available you can update the `PORT` in `/api/.env` to use a different port.

Visit https://localhost:8000/graphql in your browser to verify the GraphQL server is running.

## App Server

### Setup instructions

After cloning the repo locally, you must install the required dependencies to be able to run the app.

#### Install dependencies

Running the web app securely over https requires `mkcert` and `nss` to create certificates locally. Once installed, the certificates will be created when you start the dev server.

    brew install mkcert nss

Running the app and dev server requires `node` and `npm`, make sure these are installed locally then run the following in the `/app` directory:

    npm install

#### Running the app

Run the following to start the app:

    npm run dev

> The app uses port `8080`, if it isn't available you can update the `dev` script in `/app/package.json` to use a different port.

Visit https://localhost:8000 to view the app in your browser.

### Nice work, happy coding

##### Let's go! 🤘🎉
