import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

const LazyUseStateExample = lazy(() => import('./components/UseStateExample'))
const LazyUseEffectExample = lazy(() => import('./components/UseEffectExample'))
const LazyUseContextExample = lazy(() => import('./components/UseContextExample'))
const LazyUseRefExample = lazy(() => import('./components/UseRefExample'))
const LazyUseReducerExample = lazy(() => import('./components/UseReducerExample'))
const LazyUseCallbackExample = lazy(() => import('./components/UseCallbackExample'))
const LazyUseMemoExample = lazy(() => import('./components/UseMemoExample'))
const LazyCustomHookExample = lazy(() => import('./components/CustomHookExample'))
const LazyCounterContainer = lazy(() => import('./components/CounterContainer'))

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">React Hooks Examples</h1>
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/" element={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <LazyUseStateExample />
                <LazyUseEffectExample />
                <LazyUseContextExample />
                <LazyUseRefExample />
                <LazyUseReducerExample />
                <LazyUseCallbackExample />
                <LazyUseMemoExample />
                <LazyCustomHookExample />
                <LazyCounterContainer />
              </div>
            } />
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}

export default App
