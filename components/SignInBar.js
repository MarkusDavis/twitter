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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <div className="css-1dbjc4n r-18u37iz r-1777fci r-usiww2">
  <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-33ulu8">
    <div className="css-1dbjc4n">
      <div
        dir="auto"
        className="css-901oao r-jwli3a r-1qd0xha r-1blvdjr r-b88u0q r-vrz42v r-bcqeeo r-qvutc0"
      >
        <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
          Don’t miss what’s happening
        </span>
      </div>
      <div
        dir="auto"
        className="css-901oao r-jwli3a r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0"
      >
        <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
          People on Twitter are the first to know.
        </span>
      </div>
    </div>
    <div className="css-1dbjc4n r-1ydw1k6">
      <div className="css-1dbjc4n r-1awozwy r-1pz39u2 r-18u37iz r-16y2uox">
        <div className="css-1dbjc4n r-1awozwy r-1pz39u2 r-18u37iz r-16y2uox">
          <div className="css-1dbjc4n r-16y2uox">
            <a
              href="/login"
              role="link"
              className="css-4rbku5 css-18t94o4 css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"
              data-testid="login"
              style={{ borderColor: "rgba(255, 255, 255, 0.35)" }}
            >
              <div
                dir="auto"
                className="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"
                style={{}}
              >
                <span className="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0">
                  <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
                    Log in
                  </span>
                </span>
              </div>
            </a>
          </div>
          <div className="css-1dbjc4n r-16y2uox r-19u6a5r" style={{}}>
            <a
              href="/i/flow/signup"
              role="link"
              className="css-4rbku5 css-18t94o4 css-1dbjc4n r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"
              data-testid="signup"
              style={{ backgroundColor: "rgb(239, 243, 244)" }}
            >
              <div
                dir="auto"
                className="css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"
                style={{ color: "rgb(15, 20, 25)" }}
              >
                <span className="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0">
                  <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
                    Sign up
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
