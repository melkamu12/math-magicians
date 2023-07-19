import { Link } from 'react-router-dom';
import classes from '../Root.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1>Math Magicians</h1>
      <nav>
        <ul className={classes.List}>
          <li>
            <Link to="/">Home |</Link>
          </li>
          <li>
            <Link to="/MathCalculator">Calculator |</Link>
          </li>
          <li>
            <Link to="/Quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
