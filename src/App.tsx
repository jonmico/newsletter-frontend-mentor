import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';

import GlobalStyles from './styles/GlobalStyles';

import Registered from './pages/Registered';
import StayUpdated from './pages/StayUpdated';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={'app'} />} />
            <Route
              path={'app'}
              element={<StayUpdated handleChangeEmail={handleChangeEmail} />}
            />
            <Route path={'registered'} element={<Registered />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
