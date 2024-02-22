/**@type{import('tailwindcss').Config}*/
module.exports = {
    content: [
        './pages/**/*.{html,js,jsx}',
        './components/**/*.{html,js,jsx}',
        './src/**/*.{html,js,jsx,ts}',
    ],
    corePlugins: {
        preflight: false,
    },
    // ...
    theme: {
        extend: {
            spacing: {
                '1': '1px',
                '2': '2px',
                // 其他间距设置...
            },
            borderWidth: {
                '0': '0px',
                '2': '2px',
                // 其他边框宽度设置...
            },
        },
    },
}
