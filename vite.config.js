import { defineConfig ,loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

const env = loadEnv(
    'all',
    process.cwd()
);

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react(),
    federation({
      name: 'Remote_Repo',
      remotes: {
        Game: env.VITE_MODULE_FEDERATION_GAME,
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
  
})
