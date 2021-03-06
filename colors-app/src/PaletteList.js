import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./MiniPalette";
import bg from "./bg.svg";

const styles = {
  root: {
    // Background by SVG backgrounds
    backgroundColor: "#bafff7",
    backgroundImage: `url(${bg})`,
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "#fff",
  },

  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1.5rem  ",
  },
};

class PaletteList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;

    const miniPalettes = palettes.map((palette) => {
      return (
        <MiniPalette
          {...palette}
          handleClick={() => this.goToPalette(palette.id)}
        />
      );
    });

    console.log(this.props);
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 style={{ color: "black" }}>React Colors</h1>
          </nav>
          <div className={classes.palettes}>{miniPalettes}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
