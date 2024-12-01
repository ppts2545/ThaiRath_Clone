import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/slides': 'http://localhost:3000', // ชี้ไปยัง Backend
        },
    },
});