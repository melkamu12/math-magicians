import classes from '../Root.module.css';

const Homepage = () => {
  return (
    <>
      <h1>Welcome to our page!</h1>
      <p className={classes.paragraph}>
        Math Magician is a dynamic and engaging website that combines the magic
        of mathematics with insightful quotes to inspire and educate users. The
        website features a plethora of mathematical quotes from renowned
        thinkers and scholars, offering a delightful blend of wisdom and
        mathematical concepts. These quotes serve as a source of inspiration,
        sparking curiosity and promoting a positive mindset towards mathematics.
      </p>

      <p className={classes.paragraph}>
        Additionally, Math Magician provides a user-friendly and intuitive basic
        calculator application. This calculator allows users to perform simple
        arithmetic operations with ease. Whether it&apos;s addition,
        subtraction, multiplication, or division, the calculator efficiently
        computes the desired results, making it a valuable tool for quick
        calculations. With its straightforward interface and reliable
        functionality, the calculator on Math Magician ensures users have a
        handy and accessible tool for their day-to-day mathematical needs.
        Whether you&apos;re a student looking for a quick calculation solution
        or someone seeking mathematical inspiration, Math Magician is your go-to
        website that combines quotes and a basic calculator to make mathematics
        both enjoyable and practical.
      </p>
    </>
  );
};
export default Homepage;
