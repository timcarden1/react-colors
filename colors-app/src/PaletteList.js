import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class PaletteList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { palettes } = this.props;

    console.log(this.props.palettes);

    const miniPalettes = palettes.map((palette) => {
      return (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>;
        </p>
      );
    });
    return <div>{miniPalettes}</div>;
  }
}
