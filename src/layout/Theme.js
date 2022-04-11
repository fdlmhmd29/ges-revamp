export default {
  useCustomProperties: true,

  useColorSchemeMediaQuery: true,

  fonts: {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
    heading: "inherit",
  },

  fontSizes: [16, 18, 20, 24, 30, 36, 40, 48, 64, 72, 96],
  fontWeights: {
    lite: 200,
    body: 400,
    heading: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },

  colors: {
    primary: "#26b600",
    primaryHover: "#1b8300",
    secondary: "#f5b314",
    background: "#f4f0ff",
    title: "#26b600",
    subtitle: "#1b1e21",
    text: "#3a4047",
    blue: "#4169e1",
    cyan: "#41b9e1",
    gray: "#667788",
    green: "#27a727",
    purple: "#6941e1",
    orange: "#fba100",
    pink: "#e141b9",
    red: "#ee5555",
    white: "#fff",
    yellow: "#FFDD22",
    lite: "#eee",

    modes: {
      dark: {
        title: "#26b600",
        subtitle: "#fff",
        text: "#fff",
        background: "#000",
        lite: "#333",
      },
    },
  },

  buttons: {
    primary: {
      display: "inline-block",
      padding: "0.9rem 1rem",
      borderRadius: "12px",
      letterSpacing: "0.4px",
      textTransform: "capitalize",
      transition: "all 0.2s ease",

      "&:hover": {
        background: "primaryHover",
      },
    },

    secondary: {
      background: "transparent",
      fontWeight: 500,
      display: "inline-block",
      padding: "0.9rem 1rem",
      borderRadius: "12px",
      letterSpacing: "0.4px",
      textTransform: "capitalize",
      transition: "all 0.2s ease",

      "&:hover": {
        color: "secondary",
      },
    },
  },

  layout: {
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "75rem",
      padding: "0 1.5rem",
      margin: "0 auto",
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128],

  breakpoints: ["32em", "48em", "64em", "80em"],

  radii: [0, 3, 6],

  shadows: {
    card: "0 0 4px rgba(0, 0, 0, .125)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
  },
}
