import React, { useReducer } from 'react'

type State = { count: number }
type Action = { type: 'increment' | 'decrement' | 'reset' }

const initialState: State = { count: 0 }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initialState
    default:
      return state
  }
}

const UseReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">useReducer Example</h2>
      <p className="mb-2">Count: {state.count}</p>
      <div className="space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch({ type: 'increment' })}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch({ type: 'decrement' })}
        >
          -
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default UseReducerExample