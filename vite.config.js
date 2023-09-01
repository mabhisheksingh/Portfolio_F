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

        // filename:"homeComponents.js",
        // exposes:{
        //   "./Card": "./src/Components/Card/Card.jsx",
        //   "./Carousel": "./src/Components/Carousel/Carousel.jsx",
        // },
        shared: ['react','react-dom'],
      })
    ],
    preview:{

      //This is a security issue as of now we are allowing all https requests.
      headers: {
        "Access-Control-Allow-Origin": "*"
      }

    },
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    }
    
  })
}
