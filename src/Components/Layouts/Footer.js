import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
// import Tab from "@material-ui/core/Tab";

const Footer = ({ category, muscles, onSelect }) => {
  let index = 0;

  for (let i = 0; i < muscles.length; i++) {
    if (muscles[i] === category) {
      index = i + 1;
      break;
    }
  }

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={(e, index) => {
          onSelect(index === 0 ? "all" : muscles[index - 1]);
        }}
        indicatorColor="primary"
        textColor="primary"
        scrollButtons="on"
        variant="scrollable"
      >
        <Tab label="All" />
        {muscles.map((muscle, index) => {
          return <Tab key={index} label={muscle} />;
        })}
      </Tabs>
    </Paper>
  );
};

export default Footer;
