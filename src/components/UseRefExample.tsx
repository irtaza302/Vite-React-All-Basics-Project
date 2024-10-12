import React, { useRef, useEffect, useState } from 'react'

const UseRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')

  // useEffect to focus the input on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputRef.current) {
      setInputValue(inputRef.current.value)
      inputRef.current.value = ''
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">useRef Example</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          ref={inputRef}
          type="text"
          className="border p-2 mr-2"
          placeholder="Enter text"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      <p>Last submitted value: {inputValue}</p>
    </div>
  )
}

export default UseRefExample