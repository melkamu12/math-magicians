import { Outlet } from 'react-router-dom';
import MainNavigation from './mainNavigation';
import classes from '../Root.module.css';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <div className={classes.verticallyCentered}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
export default RootLayout;
