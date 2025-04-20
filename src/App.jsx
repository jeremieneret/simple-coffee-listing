import React, { lazy, Suspense } from 'react';
import './style/CSS/style.css';

export default function App() {
  const CoffeeList = lazy(() => import('./components/CoffeeList'));

  const renderLoader = () => <p>Loading</p>;
  return (
    <Suspense fallback={renderLoader()}>
      <CoffeeList />
    </Suspense>
  )
}