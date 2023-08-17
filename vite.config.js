import { defineConfig ,loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  const env = { ...loadEnv(mode, process.cwd())};

  return defineConfig({

    plugins: [react(),
      federation({
        name: 'Remote_Repo',
        remotes: {
          Game: env.VITE_MODULE_FEDERATION_GAME,
        },
        filename:"homeComponents.js",
        exposes:{
          "./Card": "./src/components/Card/Card.jsx",
          "./Carousel": "./src/components/Carousel/Carousel.jsx",
        },
        shared: ['react','react-dom'],
      })
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    }
    
  })
}
