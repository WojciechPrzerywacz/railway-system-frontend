import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TrainIcon from "@material-ui/icons/Train";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    width: "800px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function TrainsListItem(props) {
  const classes = useStyles();
  const { id, name, max_load, current_load } = props;
  if (id === -2) {
    return <ListItem />;
  } else {
    return (
      <ListItem button className={classes.item} key={id}>
        <TrainIcon />
        {/* <Typography variant="body2" component="p">
        Id: {id} {name} Maximum load: {max_load}t Current load: {current_load}t
      </Typography> */}
        <ListItemText primary={`Id: ${id}  `} />
        <ListItemText primary={`Locomotive type: '${name}'`} />
        <ListItemText primary={`Maximum load: ${max_load}t`} />
        <ListItemText primary={`Current load: ${current_load}t`} />
      </ListItem>
    );
  }
}
