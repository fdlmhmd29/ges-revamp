// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,

  fonts: {
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
    primaryHover: "#22a100",
    secondary: "#f4b313",
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
        // title: "#26b600",
        // subtitle: "#fff",
        // text: "#fff",
        // background: "#000",
        // lite: "#333",
      },
    },
  },

  buttons: {
    primary: {
      display: "inline-block",
      padding: "0.9rem 1rem",
      borderRadius: "5px",
      fontSize: "0.85rem",
      fontWeight: 600,
      letterSpacing: "0.4px",
      textTransform: "capitalize",
      transition: "all 0.2s ease",

      "&:hover": {
        background: "primaryHover",
      },
    },

    filter: {
      display: "inline-block",
      color: "primary",
      background: "none",
      outline: "none",
      border: "none",
      padding: null,
      fontSize: "0.875rem",
      fontWeight: 600,
      letterSpacing: "0.4px",
      marginLeft: "0.3rem",
      fontFamily: "inherit",
      textTransform: "uppercase",
    },

    secondary: {
      position: "relative",
      color: "primary",
      background: "transparent",
      fontSize: "0.85rem",
      fontWeight: 500,
      display: "inline-block",
      padding: "0.9rem 1rem",
      borderRadius: "0px",
      letterSpacing: "0px",
      borderBottom: "2.5px solid hsl(42, 92%, 52%)",
      textTransform: "capitalize",
      transition: "all 0.2s ease",

      "&:hover": {
        color: "secondary",
      },

      "&::before": {
        content: "''",
        position: "absolute",
        width: "0%",
        height: "2.5px",
        bottom: "-2.5px",
        left: "0",
        backgroundColor: "primary",
        transition: "all 0.2s ease-in-out",
      },
      "&:hover::before": {
        width: "100%",
      },
    },
  },

  links: {
    more: {
      color: "primary",
      fontSize: "0.85rem",
      fontWeight: 600,
      letterSpacing: 1,
      transition: "0.2s ease-in-out",

      "&:hover": {
        color: "secondary",
      },
    },

    card: {
      color: "primary",
      fontSize: "0.75rem",
      fontWeight: 400,
      letterSpacing: 1,
      transition: "0.2s ease-in-out",

      "&:hover": {
        color: "secondary",
      },
    },

    cta: {
      background: "primary",
      color: "white",
      display: "inline-block",
      padding: "0.9rem 1rem",
      borderRadius: "5px",
      fontSize: "0.85rem",
      fontWeight: 600,
      letterSpacing: "0.4px",
      textTransform: "capitalize",
      transition: "all 0.2s ease",

      "&:hover": {
        background: "primaryHover",
      },
    },
  },

  text: {
    heading: {
      title: {
        color: "title",
        textTransform: "uppercase",
        fontSize: "80%",
        letterSpacing: "0.03125rem",
        borderLeft: "3px solid hsl(42, 92%, 52%)",
        padding: "0.13rem 0.75rem",
        display: "block !important",
        mb: "0.5rem !important",
        fontWeight: "500 !important",
      },

      subtitle: {
        color: "text",
        fontSize: "calc(1.375rem + 1.5vw)",
        fontWeight: 500,
        lineHeight: "1.3",
        mb: "1rem",
      },
    },

    caption: {
      main: {
        color: "text",
        fontSize: "16px",
        lineHeight: "2",
      },

      desktop: {
        color: "text",
        maxWidth: "440px",
        fontSize: "0.85rem",
        lineHeight: "2",
        margin: "2rem 0",
      },
    },
  },

  header: {
    title: {
      fontSize: ["24px", null, "28px", null, null, "32px", null, "36px"],
      lineHeight: [1.3, null, null, 1.2],
      textAlign: "center",
      fontWeight: "700",
      mb: "0.75rem",
      letterSpacing: "1px",
      width: "50%",
      letterSpacing: "1px",
    },

    subtitle: {
      fontSize: [0, null, "0.85rem"],
      color: "text",
      textAlign: "center",
      letterSpacing: [".5px", null, "1px"],
      width: "50%",
      lineHeight: 2,
    },
  },

  box: {
    top: {
      top: [null, null, null, null, null, "-40px"],
      width: [null, null, null, "100%", "50%", "50%"],
      order: [null, null, 1, 1, 0, 0],
    },

    bottom: {
      width: [null, null, null, "100%", "50%", "50%"],
      order: [null, null, 0, 0, 1, 1],
      pt: [null, null, null, "1.5rem", "1.5rem", null],
    },

    background: {
      main: {
        background: "rgb(244,240,255)",
        background:
          "-moz-linear-gradient(0deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
        background:
          "-webkit-linear-gradient(0deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
        background:
          "linear-gradient(0deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
      },
      secondary: {
        background: "rgb(244,240,255)",
        background: "rgb(244,240,255)",
        background:
          "-moz-linear-gradient(180deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
        background:
          "-webkit-linear-gradient(180deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
        background:
          "linear-gradient(180deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
      },
    },
  },

  // Responsive Settings
  breakpoints: ["375px", "411px", "768px", "1280px", "1440px"],

  layout: {
    container: {
      // Globally set max-width
      maxWidth: [null, null, "100%", "720px", "1140px"],
      px: "15px",

      // Variants
      showcase: {
        pt: [
          null,
          null,
          "13rem !important",
          "11rem !important",
          "13rem !important",
          "13rem !important",
        ],
        pb: "3.5rem !important",
        display: "flex",
        flexDirection: [null, null, "column", "column", "row", "row"],
        justifyContent: "space-between",
        alignItems: "center",
      },

      header: {
        display: "flex",
        flexDirection: "column",
        pb: "2rem !important",
      },

      about: {
        py: "3.5rem !important",
        display: "flex",
        flexDirection: [null, null, "column", "column", "row", "row"],
        justifyContent: "space-between",
        alignItems: "center",
      },

      services: {
        py: "3.5rem !important",
      },

      solution: {
        mx: "auto",
      },
    },
  },

  space: [0, 4, 8, 16, 32, 64, 128],

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
};
