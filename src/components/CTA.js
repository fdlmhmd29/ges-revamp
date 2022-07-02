import { keyframes } from "@emotion/react";
import React, { useRef, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Box, Button } from "theme-ui";

const Context = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [context, setContext] = useState();

  useEffect(() => {
    setContext(modalRef.current);
  }, []);

  return (
    <Box as={"div"} sx={styles.container}>
      <Context.Provider value={context}>{children}</Context.Provider>
      <Box as={"div"} ref={modalRef} />
    </Box>
  );
}

export function Modal({ onClose, children, ...props }) {
  const modalNode = useContext(Context);

  return modalNode
    ? ReactDOM.createPortal(
        <Box as={"div"} sx={styles.overlay}>
          <Box as={"div"} sx={styles.dialogue} {...props}>
            {children}
            <Button onClick={onClose}>Close</Button>
          </Box>
        </Box>,
        modalNode
      )
    : null;
}

const fadeIn = keyframes`from {opacity: 0;}`;
const styles = {
  container: {
    position: "relative",
    zIndex: 0,
  },

  overlay: {
    animation: `${fadeIn} 200ms ease-out`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.3)",
  },

  dialogue: {
    background: "white",
    borderRadius: "5px",
    padding: "20px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
};
