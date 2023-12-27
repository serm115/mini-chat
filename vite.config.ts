import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages/') },
            { find: '@core', replacement: path.resolve(__dirname, 'src/core/') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components/') },
            { find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts/') },
            { find: '@styles', replacement: path.resolve(__dirname, 'src/styles/') },
            { find: '@helpers', replacement: path.resolve(__dirname, 'src/helpers/') },
            { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks/') },
            { find: '@configs', replacement: path.resolve(__dirname, 'src/configs/') },
            { find: '@store', replacement: path.resolve(__dirname, 'src/store/') },
            { find: '@router', replacement: path.resolve(__dirname, 'src/router/') },
            { find: '@types', replacement: path.resolve(__dirname, 'src/types/') },
        ],
    },
})
