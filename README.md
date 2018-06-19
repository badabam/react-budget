# Installation
- npm install
- npm start

# Technology
- React, Redux
- storybook as Living Styleguide
- jest/enzyme for unit tests
- emotion from css-in-js & styled components

# Added express backend following these steps:
- Update .gitignore to ignore `server/node_modules`
- `$ npm i -D express-generator`
- `$ npx express server`
- `$ cd server && npm i`
- send user-json from within server/routes/users.js
- edit server/package.json to set PORT=3001 before node start
- Add start-server in ./package.json and update start-task to start both servers at once
- Add request via componentDidMount
