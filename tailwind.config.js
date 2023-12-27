/**@type{import('tailwindcss').Config}*/
module.exports = {
    content: [
        './pages/**/*.{html,js,jsx}',
        './components/**/*.{html,js,jsx}',
        './src/**/*.{html,js,jsx}',
    ],
    corePlugins: {
        preflight: false,
    },
    // ...
}
