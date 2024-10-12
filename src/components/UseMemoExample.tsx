import React, { useState, useMemo } from 'react'

const UseMemoExample: React.FC = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // useMemo memoizes the result of this expensive calculation
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">useMemo Example</h2>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
        className="border p-2 mr-2"
      />
      <button
        onClick={() => setDark(prevDark => !prevDark)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Toggle theme
      </button>
      <div style={themeStyles} className="mt-4 p-4 rounded">
        The doubled number is {doubleNumber}
      </div>
    </div>
  )
}

// This function simulates an expensive calculation
function slowFunction(num: number) {
  console.log('Calling slow function')
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2
}

export default UseMemoExample