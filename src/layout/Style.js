/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import theme from "./Theme";

const Style = (props) => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

    button,
    hr,
    input {
      overflow: visible;
    }

    progress,
    sub,
    sup {
      vertical-align: baseline;
    }

    [type="checkbox"],
    [type="radio"],
    legend {
      box-sizing: border-box;
      padding: 0;
    }

    html {
      line-height: 1.5;
      -webkit-text-size-adjust: 100%;
    }

    body {
      margin: 0;
      font-family: "Poppins", sans-serif;
    }

    hr {
      box-sizing: content-box;
      height: 0;
    }

    kbd,
    samp {
      font-family: monospace, monospace;
      font-size: 14px;
    }

    pre {
      width: 100%;
      overflow-x: scroll;
      margin-bottom: 24px;
    }

    p > code {
      background-color: #f6f8fa;
      padding: 8px;
      font-size: 110%;
    }

    abbr[title] {
      border-bottom: none;
      text-decoration: underline dotted;
    }

    b,
    strong {
      font-weight: 600;
      color: ${theme.colors.primary};
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    img {
      border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }

    button,
    select {
      text-transform: none;
    }

    [type="button"],
    [type="reset"],
    [type="submit"],
    button {
      -webkit-appearance: button;
    }

    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }

    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring,
    button:-moz-focusring {
      outline: ButtonText dotted 1px;
    }

    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }

    legend {
      color: inherit;
      display: table;
      max-width: 100%;
      white-space: normal;
    }

    textarea {
      overflow: auto;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }

    [type="search"] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }

    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }

    details {
      display: block;
    }

    summary {
      display: list-item;
    }

    [hidden],
    template {
      display: none;
    }

    html {
      box-sizing: border-box;
    }

    ::selection {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.background};
    }

    *,
    *::before,
    *::after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      overflow-x: hidden;
      margin: 0;
      min-height: 100vh;
      height: 100%;
    }

    #nav-logo {
      font-family: "Abril Fatface", cursive;
    }

    .card-image {
      border-radius: 10px;
      width: 105%;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
      transition: 0.3s;
    }

    header.scrolled {
      background-color: hsla(256, 100%, 97%, 0.8);
      box-shadow: 0 5px 20px 0.1px rgba(0, 0, 0, 0.03);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }

    header.scrolled .logo {
      height: 5rem;
      line-height: 5rem;
    }

    button,
    input[type="submit"] {
      cursor: pointer;
      background: ${theme.colors.primary};
      color: white;
      border-radius: 4px;
      border: none;
    }

    p {
      line-height: 1.5;
      margin: 0 0 16px;
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      background-color: transparent;
    }

    ul {
      list-style: none;
      margin-top: 0;
    }

    select {
      padding: 8px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-rendering: optimizelegibility;
      margin: 0 0 16px;
      font-family: ${theme.fonts.heading};
    }

    #subtitle {
      font-family: "Abril Fatface", cursive;
    }

    input,
    select,
    textarea {
      padding: 4px;
      border: solid 2px #aed7ff;
      font-size: 16px;
      font-family: inherit;
    }

    select {
      -webkit-appearance: menulist;
    }

    table {
      border-collapse: collapse;
    }

    input {
      text-align: inherit;
      padding-left: 4px;
    }

    /* Others */
  `}</style>
);

export default Style;
