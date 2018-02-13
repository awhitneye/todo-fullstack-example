# Example Fullstack TODO app

This repository is an example app with comments/annotations to help understand the various components of a full stack app.

### Overview of Folders & Files:

/client -> this folder is where all of our pre-compiled client side code will live. This is where we will define our React components.

/db -> this folder is where we are going to define models and helper methods to make read/write queries to our database.

/db/models -> this folder will be where we define all of our models

/dist -> this is the folder where all of your js assets will be placed after they are bundled by webpack into a bundle.js file.

/node_modules -> this is the folder where all of the dependencies are loaded when you do npm install

/server -> this is the folder where you will add all server side code

/server/controllers -> this is the folder where you keep all of the controllers. Controllers here mean the request handlers separated by resource type.

.babelrc -> this is the file which configures babel and allows us to babel-ify the webpack config file so that we can use import statements to load dependencies

.gitignore -> this the file that tells git which files or directories to ignore

package.json -> this is the file which 

webpack.config.babel.js -> this is the file which defines which files will be transpiled from React/JSX/ES6 to regular JS.