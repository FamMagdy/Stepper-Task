import React from 'react'

const StepOne = React.lazy(() => import('./Stepper/StepOne'))
const StepTwo = React.lazy(() => import('./Stepper/StepTwo'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/step/1', name: 'stepOne', element: StepOne, exact: true },
  { path: '/step/2', name: 'stepTwo', element: StepTwo },
]

export default routes
