import React from "react";

const Header = props => {
  return (
    <header class="row center-xs">
      <h1 class="col-xs-6">{props.title}</h1>
      {props.children}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Categories</a>
            <ul>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">Graphic design</a>
              </li>
              <li>
                <a href="#">Development tools</a>
              </li>
              <li>
                <a href="#">Web design</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Work</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
