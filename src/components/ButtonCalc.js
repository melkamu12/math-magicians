import PropTypes from 'prop-types';

const ButtonCalculator = ({ ButtonClick }) => {
  return (
    <div className="keyButtons">
      <button
        data="AC"
        className="btn"
        type="button"
        onClick={() => ButtonClick('AC')}
      >
        AC
      </button>
      <button
        data="+/-"
        className="btn"
        type="button"
        onClick={() => ButtonClick('+/-')}
      >
        +/-
      </button>
      <button
        data="%"
        className="btn"
        type="button"
        onClick={() => ButtonClick('%')}
      >
        %
      </button>
      <button
        data="/"
        className="btn-operator"
        type="button"
        onClick={() => ButtonClick('/')}
      >
        &divide;
      </button>
      <button
        data="7"
        className="btn"
        type="button"
        onClick={() => ButtonClick('7')}
      >
        7
      </button>
      <button
        data="8"
        className="btn"
        type="button"
        onClick={() => ButtonClick('8')}
      >
        8
      </button>
      <button
        data="9"
        className="btn"
        type="button"
        onClick={() => ButtonClick('9')}
      >
        9
      </button>
      <button
        data="*"
        className="btn-operator"
        type="button"
        onClick={() => ButtonClick('*')}
      >
        &times;
      </button>
      <button
        data="4"
        className="btn"
        type="button"
        onClick={() => ButtonClick('4')}
      >
        4
      </button>
      <button
        data="5"
        className="btn"
        type="button"
        onClick={() => ButtonClick('5')}
      >
        5
      </button>
      <button
        data="6"
        className="btn"
        type="button"
        onClick={() => ButtonClick('6')}
      >
        6
      </button>
      <button
        data="-"
        className="btn-operator"
        type="button"
        onClick={() => ButtonClick('1')}
      >
        &ndash;
      </button>
      <button
        data="1"
        className="btn"
        type="button"
        onClick={() => ButtonClick('1')}
      >
        1
      </button>
      <button
        data="2"
        className="btn"
        type="button"
        onClick={() => ButtonClick('2')}
      >
        2
      </button>
      <button
        data="3"
        className="btn"
        type="button"
        onClick={() => ButtonClick('3')}
      >
        3
      </button>
      <button
        data="+"
        className="btn-operator"
        type="button"
        onClick={() => ButtonClick('+')}
      >
        +
      </button>
      <button
        data="0"
        className="btn btn-key"
        type="button"
        onClick={() => ButtonClick('0')}
      >
        0
      </button>
      <button
        data="."
        className="btn"
        type="button"
        onClick={() => ButtonClick('.')}
      >
        .
      </button>
      <button
        data="="
        className="btn-operator"
        type="button"
        onClick={() => ButtonClick('=')}
      >
        =
      </button>
    </div>
  );
};
ButtonCalculator.propTypes = {
  ButtonClick: PropTypes.func.isRequired,
};
export default ButtonCalculator;
