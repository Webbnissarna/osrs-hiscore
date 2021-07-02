import React from "react";
import { Box } from "theme-ui";

interface Props {
  children: React.ReactNode;
}

export default function Overview({ children }): React.ReactNode {
  return (
    <Box
      sx={{
        padding: "lg",
        backgroundColor: "blue",
        color: "yellow",
        fontWeight: "bold",
      }}
    >
      {children}
    </Box>
  );
}
