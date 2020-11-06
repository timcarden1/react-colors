import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default class PaletteList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { palettes } = this.props;

    console.log(this.props.palettes);

    const miniPalettes = palettes.map((palette) => {
      return <MiniPalette {...palette} />;
    });
    return <div>{miniPalettes}</div>;
  }
}
