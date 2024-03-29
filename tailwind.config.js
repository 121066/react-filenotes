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
                '3': '3px',
                '4': '4px',
                '5': '5px',
                '6': '6px',
                '7': '7px',
                '8': '8px',
                '9': '9px',
                '10': '10px',
                '11': '11px',
                '12': '12px',
                '13': '13px',
                '14': '14px',
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
