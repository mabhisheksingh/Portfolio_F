import { defineConfig ,loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  const env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({

    plugins: [react(),
      federation({
        name: 'Remote_Repo',
        remotes: {
          Game: env.VITE_MODULE_FEDERATION_GAME,
        },
        shared: ['react','react-dom'],

      })
    ],
    preview:{
      cors:{
        origin:[env.VITE_MODULE_FEDERATION_GAME],
        methods:['GET']
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

// https://vitejs.dev/config/
// export default defineConfig({

//   plugins: [react(),
//     federation({
//       name: 'Remote_Repo',
//       remotes: {
//         Game: env.VITE_MODULE_FEDERATION_GAME,
//       },
//       shared: ['react','react-dom']
//     })
//   ],
//   build: {
//     modulePreload: false,
//     target: 'esnext',
//     minify: false,
//     cssCodeSplit: false
//   }
  
// })
