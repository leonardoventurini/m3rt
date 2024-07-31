import React, { useState } from 'react';

export function Hello({}) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p className="py-4 font-semibold">You've pressed the button {counter} times</p>
      <button
        onClick={increment}
        className="rounded bg-orange-700 font-bold px-2 py-1 text-sm text-white"
      >
        Click Me
      </button>
    </div>
  );
}
