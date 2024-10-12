import React, { useState, useCallback } from 'react'

const ExpensiveComponent: React.FC<{ onClick: () => void }> = React.memo(({ onClick }) => {
  console.log('ExpensiveComponent rendered')
  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded"
      onClick={onClick}
    >
      Click me
    </button>
  )
})

const UseCallbackExample: React.FC = () => {
  const [count, setCount] = useState(0)

  // useCallback memoizes this function, preventing unnecessary re-renders of ExpensiveComponent
  const handleClick = useCallback(() => {
    console.log('Button clicked')
  }, [])

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">useCallback Example</h2>
      <p className="mb-2">Count: {count}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => setCount(c => c + 1)}
      >
        Increment
      </button>
      <ExpensiveComponent onClick={handleClick} />
    </div>
  )
}

export default UseCallbackExample