import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { LapyPage3, LapyPage1, LapyPage2 } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        <li>
          <NavLink to="lazy1">Lazy1 </NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy2 </NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy3 </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='lazy1' element={<LapyPage1/>} />
        <Route path='lazy2' element={<LapyPage2/>} />
        <Route path='lazy3' element={<LapyPage3/>} />
        <Route path='*' element={<Navigate replace to="lazy1"  />} />
      </Routes>
    </div>
  )
}

export default LazyLayout;