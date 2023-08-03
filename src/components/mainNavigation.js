import { NavLink } from 'react-router-dom';
import classes from '../Root.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1>Math Magicians</h1>
      <nav>
        <ul className={classes.List}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              Home |
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MathCalculator"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              Calculator |
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Quote"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
            >
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
