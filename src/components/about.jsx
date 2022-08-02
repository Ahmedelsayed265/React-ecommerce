import React, { Component } from "react";
import { Link } from "react-router-dom";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <aside className="col-4">
          <ul>
            <li>
              <Link to="/about/team">Our Team</Link>
            </li>
            <li>
              <Link to="/about/company">Our Company</Link>
            </li>
          </ul>
        </aside>
        <div className="col-8">
        
        </div>
      </div>
    );
  }
}

export default About;
