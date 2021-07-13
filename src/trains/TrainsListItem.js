import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TrainIcon from "@material-ui/icons/Train";

export default function TrainsListItem(props) {
  const { id, name, max_load, current_load, style } = props;

  return (
    <ListItem button style={style} key={id}>
      <TrainIcon />
      <ListItemText primary={`${name}`} />
      <ListItemText primary={`Maximum load: ${max_load}t`} />
      <ListItemText primary={`Current load: ${current_load}t`} />
    </ListItem>
  );
}
