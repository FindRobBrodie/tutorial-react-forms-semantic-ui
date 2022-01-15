import { Routes, Route, Outlet } from 'react-router-dom'

import HomeRoute from 'src/routes/_home/HomeRoute'
import DebounceHookRoute from 'src/routes/debounce-hook/DebounceHookRoute'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div><Outlet /></div>} >
          <Route index element={<HomeRoute />} />
          <Route path='debounce-hook' element={<DebounceHookRoute />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes