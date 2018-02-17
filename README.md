# Example Fullstack TODO app

This repository is an example app with comments/annotations to help understand the various components of a full stack app.

### Overview of Folders & Files:

/client -> this folder is where all of our pre-compiled client side code will live. This is where we will define our React components.

/db -> this folder is where we are going to define models and helper methods to make read/write queries to our database.

    /db/models -> this folder will be where we define all of our models

/dist -> this is the folder where all of your js assets will be placed after they are bundled by webpack into a bundle.js file.

    /dist/bundle.js -> 

    /dist/bundle.js.map -> This is the generated source map file.

    It's generally a good practice to minify and combine your assets (Javascript & CSS) when deploying to production. This process reduces the size of your assets and dramatically improves your website's load time. Source maps create a map from these compressed asset files back to the source files. This source map allows you to debug and view the source code of your compressed assets, as if you were actually working with the original CSS and Javascript source code.

/node_modules -> this is the folder where all of the dependencies are downloaded to when you run `npm install`

/server -> this is the folder where you will add all server side code

  /server/controllers -> this is the folder where you keep all of the controllers. Controllers here mean the request handlers separated by resource type.

.gitignore -> this the file that tells git which files or directories to ignore from your git history

package.json -> this is the file which npm uses to figure out which depndencies to load and has all of the helpful scripts (ex. `npm start` to start your server and `npm run build` to build your assets

webpack.config.babel.js -> this is the file which defines which files will be transpiled from React/JSX/ES6 to regular JS.