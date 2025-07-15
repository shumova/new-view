🛠️ Technologies
React, TypeScript, Redux Thunk, Jest, React Testing Library, Axios, Toastify, React Hook Form, Webpack

📝 Description
Online store of photo and video equipment. Working with data and an address bar (query parameters), filtering, sorting data, pagination, adding and removing products from a cart, promo codes, ordering, uploading and publishing product reviews, form validation, carousel and tabs, unit testing and error handling (redirect to 404, toastify). The project layout was done by another developer.

<img width="2700" height="1700" alt="image" src="https://github.com/user-attachments/assets/c301d4f9-0ee6-47df-95f1-86fc7c404135" />





# Project Guide

This project was created with the help of [Create React App](https://github.com/facebook/create-react-app).

## Project structure

---

_Do not delete or modify folders or files:_
_`.editorconfig`, `.gitattributes`, `.gitignore`, `package.json`._

---

### public

Directory for placing static resources (fonts, styles, images, etc.). Root directory of the project.

**Please note** the `Readme.md` file in the `public` directory contains a description of the preparation process you need to complete before you can begin working on the project.

### src

The directory contains the source code of the project: components, test files, modules, etc. The structure of the `src` directory can be arbitrary.

## Scenarios

After creating a project, the following scripts are available to you. Please note that to run a script, you must be in the project directory (`./project`).

### Project launch

```bash
npm start
```

Once launched, the application is available for viewing in a browser at [http://localhost:3000](http://localhost:3000).

When you save changes, the project is restarted and updated in the browser. This way, you can follow the development of the project in real time.

**Please note** that the development mode is configured in such a way that errors found by the **ESLint** static code analyzer are displayed in the same browser tab in which the project is running.

### Running tests

```bash
npm test
```

Running application tests in interactive mode.

In this case, we mean tests that are placed in separate files with the suffix `*.test.*` in their names. For example, `app.test.tsx`.

For more information, please visit the page [Running Tests](https://facebook.github.io/create-react-app/docs/running-tests).

### Linter check

```bash
npm run lint
```

Launching a project check by the **ESLint** static code analyzer.

Code analysis is performed only in files located in the `src` directory.

**Please note** that when running this command, errors are output to the terminal.

### Building the project

```bash
npm run build
```

Starting the application build.

During the application build process, the application code is optimized and minified to achieve the best performance.

During the execution of the project build instructions, a `build` directory is created in the project root, where the resulting files will be placed. After the build, the project is ready for publication.

Detailed information can be found on the page [Project Deployment](https://facebook.github.io/create-react-app/docs/deployment).

### Retrieving Project Configuration

```bash
npm run eject
```

**Please note** that when you run `npm run eject` there is no way to revert the changes you made!

Running this command, `react-scripts` will copy all configuration files and scripts to the root of the project. This process allows you to get full control over the project configuration.

Do not use this command if you are not sure how it works or what result it will lead to.
