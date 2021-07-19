/** @jsx jsx */
import { MotionValue } from "framer-motion";
import { useState, useEffect } from "react";

import { jsx, Box, Flex, Text } from "theme-ui";
import { motion } from "framer-motion";
import Overview from "./overview/Overview";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(async () => {
    setData(
      await fetch("/api?username=kjof")
        .then((res) => res.json())
        .then((res) => res.body)
    );
  }, []);

  return (
    <Box>
      <Overview>Overview</Overview>
      {data && <User data={data} />}
    </Box>
  );
}

function User({ data }) {
  return (
    <Box>
      <ExpandedContent heading={"Skills"}>
        {data.data.skills.map((skill) => {
          return (
            <Row key={skill.name}>
              <Column>{skill.name}</Column>
              <Column>{skill.rank}</Column>
              <Column>{skill.level}</Column>
              <Column>{skill.xp}</Column>
            </Row>
          );
        })}
      </ExpandedContent>
    </Box>
  );
}

function ExpandedContent({ children, heading }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "md",
        backgroundColor: "darkslategrey",
        cursor: "pointer",
      }}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <Text sx={{ color: "gold", fontWeight: "bold", fontSize: "lg" }}>
        {heading}
      </Text>
      {expanded && children}
    </motion.div>
  );
}

function Row({ children }) {
  return <Flex sx={{ marginY: "sm" }}>{children}</Flex>;
}
function Column({ children }) {
  return (
    <Box
      sx={{
        padding: "sm",
        backgroundColor: "gray",
        borderRadius: "lg",
        boxShadow: "2px 2px 0px #000",
      }}
    >
      {children}
    </Box>
  );
}
