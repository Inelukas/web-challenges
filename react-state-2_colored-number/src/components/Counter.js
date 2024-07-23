import ColoredNumber from "./ColoredNumber";

export default function Counter({count, addCount, subtractCount}) {
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber count={count} />
      <div className="counter__buttons-container">
        <button
          onClick={addCount}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
        onClick={subtractCount}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
