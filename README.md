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
    "dev": "vite --mode dev --port=5000 --strictPort",
    "prod": "vite --mode production",
    "build_dev": "vite build --mode dev",
    "build": "vite build --mode production",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview --port=5000 --strictPort",
    "deploy_dev": "npm run build_dev && npm run preview",
    "deploy": "npm run build && npm run preview"
}
```
### V1.0.4
* New Home Section added and New game section added
* Also implemented Module federation in this version.
* Now importing game from from other repo [My Games repo](https://github.com/mabhisheksingh/MyGames_F)
* UI and UX improvement added.
* New Router code implemented through useRoutes hook and old router component removed from this update.

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