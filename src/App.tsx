import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';

import GlobalStyles from './styles/GlobalStyles';

import Registered from './pages/Registered';
import Card from './pages/StayUpdated';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={'app'} />} />
            <Route path={'app'} element={<Card />} />
            <Route path={'registered'} element={<Registered />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
