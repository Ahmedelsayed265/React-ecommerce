import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Team from "./team";
import Company from "./company";
class About extends Component {
  render() {
    return (
      <div className="row">
        <aside className="col-4">
          <ul>
            <li>
              <Link to="/about">Our Company</Link>
            </li>
            <li>
              <Link to="/about/team">Our Team</Link>
            </li>
          </ul>
        </aside>
        <div className="col-8">
          <Switch>
            <Route path="/about/team" component={Team} />
            <Route path="/about" exact component={Company} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default About;
