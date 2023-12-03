![Loch Logo](./public/logo.svg)

# Loch App Frontend Assignment

The goal of this assignment was to convert the given figma design link into a website using ReactJS.  

## Deliverable

The website is hosted on Github Pages at https://gautamnaik1994.github.io/loch-app/  
The website is deployed using Github Actions after every commit to main branch.

## Installation Steps

- `git clone https://github.com/gautamnaik1994/loch-app.git`
- `cd loch-app && npm install`
- To run the app in development mode `npm run dev`
- Navigate to http://localhost:3000
- To build the application in production mode `npm run build`
- `dist` directory is generated after build process
- To change port edit port number in `vite.config.js`


## Tech Stack

- ReactJS
- SCSS for styling

## Miscellaneous

All static image assets are included in `public` directory and referenced directly. For example

```html
<img src="image_name">
```

