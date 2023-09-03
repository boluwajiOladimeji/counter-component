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

  const handleOperation = (type, num) => {
    if (!type) {
      setCount(0);
      return;
    }
    if (type === 'plus') {
      setCount((count) => count + num);
    }
    if (type === 'minus') {
      setCount((count) => count - num);
    }
    if (type === 'random') {
      setCount(Math.floor(Math.random() * 100) + 1);
    }
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
          <Button type='plus' num={1} onPerformOperation={handleOperation}>
            <ChevronUp size={20} />
          </Button>
          <Button type='plus' num={10} onPerformOperation={handleOperation}>
            <ChevronsUp size={20} />
          </Button>
          <Button onPerformOperation={handleOperation}>
            <RotateCcw size={20} />
          </Button>
          <Button type='random' onPerformOperation={handleOperation}>
            <Hash size={20} />
          </Button>
          <Button type='minus' num={10} onPerformOperation={handleOperation}>
            <ChevronsDown size={20} />
          </Button>
          <Button type='minus' num={1} onPerformOperation={handleOperation}>
            <ChevronDown size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;

function Button({ children, num, type, onPerformOperation }) {
  return (
    <button className='btn-bg' onClick={() => onPerformOperation(type, num)}>
      {children}
    </button>
  );
}
