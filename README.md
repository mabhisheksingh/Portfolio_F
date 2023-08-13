# My Portfolio

## This is my portfolio to run this u need to following commands

To install all dependency
```powershell
npm i
```

To run in dev env
```powershell
npm run dev
``````

INFO to run project
```json
"scripts": {
    "dev": "vite",
    "prod": "vite --mode production",
    "build": "vite build ",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview --port=5000 --strictPort",
    "deploy": "npm run build && npm run preview"
},

```
### V1.0.3
* New Carousel added as component
### V1.0.2
* Bug UI fix in nav bar.
*  
### V1.0.1
* Added one more package route dom v6 for routing.
* Router V6 implemented for public access with centralized path all pth should be present in Router.data.js file and we are dynamically add all routes in our code.
* Also we have break Navbar component in two part.
* On next update we will try to focus on Button component and login logout form and also try to introduced New UI for Home page.

### V1.0.0
* Added basic css and built small navbar