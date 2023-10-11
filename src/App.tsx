import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';

import GlobalStyles from './styles/GlobalStyles';

import Registered from './pages/Registered';
import StayUpdated from './pages/StayUpdated';

import { EmailProvider } from './contexts/EmailContext';

export default function App() {
  return (
    <EmailProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={'app'} />} />
            <Route path={'app'} element={<StayUpdated />} />
            <Route path={'registered'} element={<Registered />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EmailProvider>
  );
}
