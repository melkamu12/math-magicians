import Calculator from './Calculator';
import classes from '../Root.module.css';

const MathCalculator = () => {
  return (
    <>
      <div className={classes.mathpage}>
        <h2>Let&apos;s do Some math!</h2>
        <div className={classes.Calculator}>
          <Calculator />
        </div>
      </div>
    </>
  );
};
export default MathCalculator;
