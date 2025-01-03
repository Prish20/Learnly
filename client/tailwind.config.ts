import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1400px',
                },
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',

                customgreys: {
                    background: '#F8FAFC',
                    '100': '#F1F5F9',
                    '300': '#CBD5E1',
                    '400': '#94A3B8',
                    '500': '#64748B',
                    '600': '#475569',
                    '700': '#334155',
                    '800': '#1E293B',
                    '900': '#0F172A',
                    '950': '#020617',
                },

                primary: {
                    '50': '#EFF6FF',
                    '100': '#E0F2FE',
                    '200': '#BFDBFE',
                    '300': '#93C5FD',
                    '400': '#60A5FA',
                    '500': '#3B82F6',
                    '600': '#2563EB',
                    '700': '#1D4ED8',
                    '800': '#1E40AF',
                    '900': '#1E3A8A',
                    '950': '#172554',
                },

                active: {
                    '50': '#F0FDF4',
                    '100': '#DCFCE7',
                    '200': '#BBF7D0',
                    '300': '#86EFAC',
                    '400': '#4ADE80',
                    '500': '#22C55E',
                    '600': '#16A34A',
                    '700': '#15803D',
                    '800': '#166534',
                    '900': '#14532D',
                    '950': '#052E16',
                },

                error: {
                    '50': '#FEF2F2',
                    '100': '#FEE2E2',
                    '200': '#FECACA',
                    '300': '#FCA5A5',
                    '400': '#F87171',
                    '500': '#EF4444',
                    '600': '#DC2626',
                    '700': '#B91C1C',
                    '800': '#991B1B',
                    '900': '#7F1D1D',
                    '950': '#450A0A',
                },

                warning: {
                    '50': '#FEFCE8',
                    '100': '#FEF9C3',
                    '200': '#FEF08A',
                    '300': '#FDE047',
                    '400': '#FACC15',
                    '500': '#EAB308',
                    '600': '#CA8A04',
                    '700': '#A16207',
                    '800': '#854D0E',
                    '900': '#713F12',
                    '950': '#422006',
                },
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;
