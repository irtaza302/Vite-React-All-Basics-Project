import React, { createContext, useContext, useState } from 'react'

// Create a context for the theme
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | undefined>(undefined)

const ThemedButton: React.FC = () => {
  // Use the context in a child component
  const themeContext = useContext(ThemeContext)
  if (!themeContext) throw new Error("ThemeContext must be used within a ThemeProvider")

  return (
    <button
      className={`px-4 py-2 rounded ${themeContext.theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'}`}
      onClick={themeContext.toggleTheme}
    >
      Toggle Theme
    </button>
  )
}

const UseContextExample: React.FC = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">useContext Example</h2>
        <p className="mb-2">Current theme: {theme}</p>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  )
}

export default UseContextExample