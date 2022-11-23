import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = {
  appBar: {
    top: "auto",
    backgroundColor: "#1da1f2",
    bottom: 0,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: -12,
  },
  actionButtons: {
    marginLeft: "auto",
  },
};

function BottomAppBar({ classes }) {
  return (
    <React.Fragment>
      <AppBar position="fixed" >
        <Toolbar>
          <div class="flex justify-between">
            <div class="item w-32 h-32">1</div>
            <div class="item w-32 h-32">2</div>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar key="spacer" />
    </React.Fragment>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);
