import { useEffect, useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ChevronsDown,
  ChevronsUp,
  Hash,
  RotateCcw,
} from 'react-feather';
function App() {
  const [count, setCount] = useState(0);

  const handlePlusOne = () => {
    setCount((count) => count + 1);
  };

  const handlePlusTen = () => {
    setCount((count) => count + 10);
  };

  const handleMinusOne = () => {
    setCount((count) => count - 1);
  };

  const handleMinusTen = () => {
    setCount((count) => count - 10);
  };

  const handleRandomNumber = () => {
    setCount(Math.floor(Math.random() * 100) + 1);
  };

  useEffect(
    function () {
      document.title = `Count : ${count}`;

      return () => (document.title = `Count`);
    },
    [count]
  );

  return (
    <div className='min-h-screen bg-pink-400 flex items-center justify-center'>
      <div className='bg-white shadow-lg p-6 w-4/6 mx-auto max-w-sm rounded-md flex flex-col items-center '>
        <p className='text-center text-sm mb-2'>Current Value</p>
        <h2
          className={`text-center text-5xl font-bold ${
            count < 0
              ? 'text-red-700'
              : count > 0
              ? 'text-green-700'
              : 'text-purple-700'
          } mb-10`}
        >
          {count}
        </h2>
        <div className='flex gap-2'>
          <button className='btn-bg' onClick={handlePlusOne}>
            <ChevronUp size={20} />
          </button>
          <button className='btn-bg' onClick={handlePlusTen}>
            <ChevronsUp size={20} />
          </button>
          <button className='btn-bg' onClick={() => setCount(0)}>
            <RotateCcw size={20} />
          </button>
          <button className='btn-bg' onClick={handleRandomNumber}>
            <Hash size={20} />
          </button>
          <button className='btn-bg'>
            <ChevronsDown size={20} onClick={handleMinusTen} />
          </button>
          <button className='btn-bg'>
            <ChevronDown size={20} onClick={handleMinusOne} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
