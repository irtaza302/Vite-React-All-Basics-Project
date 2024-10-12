import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const CustomHookExample: React.FC = () => {
  const [name, setName] = useLocalStorage<string>('name', '')

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Custom Hook Example</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <p>Hello, {name ? name : 'Anonymous'}!</p>
      <p className="text-sm text-gray-500 mt-2">
        (Your name is saved in localStorage)
      </p>
    </div>
  )
}

export default CustomHookExample
