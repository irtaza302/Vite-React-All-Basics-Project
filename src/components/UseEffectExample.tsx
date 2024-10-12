import React, { useState, useEffect } from 'react'

const UseEffectExample: React.FC = () => {
  const [data, setData] = useState<string | null>(null)

  // useEffect hook for fetching data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/github')
      const result = await response.json()
      setData(result.name)
    }

    fetchData()
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">useEffect Example</h2>
      <p>{data ? `GitHub user: ${data}` : 'Loading...'}</p>
    </div>
  )
}

export default UseEffectExample