/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.{js,jsx,ts,tsx}", // entry file
    "./app/**/*.{js,jsx,ts,tsx}", // all screens inside app/
    "./components/**/*.{js,jsx,ts,tsx}", // all components inside components/
  ],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bgDark: "hsl(0 0% 0%)",
        bgMedium: "hsl(0 0% 10%)",
        text: "hsl(0 0% 95%)",
        textMuted: "hsl(0 0% 70%)"
      },
      fontFamily: {
        roboto: ["RobotoRegular"],
        robotoBold: ["RobotoBold"],
        robotoLight: ["RobotoLight"],
        poppins: ["PoppinsRegular"],
        poppinsBold: ["PoppinsBold"],
      },

    },
  },
  plugins: [],
};
