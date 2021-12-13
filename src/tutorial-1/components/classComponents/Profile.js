import { Component } from "react";
import ProfileGreetings from "../common/ProfileGreetings";

export default class Profile extends Component {
  render() {
    return (
      <ProfileGreetings
        name={this.props.name}
        registeredAt={this.props.registeredAt}
      />
    );
  }
}
