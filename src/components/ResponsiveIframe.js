import { Box, Embed } from "theme-ui";

const ResponsiveIframe = ({ src, children, title, ...props }) => {
  return (
    <Box sx={styles.videoContainer}>
      {children ? children : <Embed src={src} title={title} {...props} />}
    </Box>
  );
};

export default ResponsiveIframe;

const styles = {
  videoContainer: {
    overflow: "hidden",
    position: "relative",
  },
};
