import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; 
import { GlobalStyles } from "./styles/theme/globalStyles";
import { SignIn } from './features/auth/SignIn';
import { Dashboard } from './pages/Dashboard';
import { SignUp } from './features/auth/SignUp';
import { Users } from './pages/Users';
import { Projects } from './pages/Projects';
import { Tasks } from './pages/Tasks';
import { Layout } from './components/layout/Layout';
import { useTheme } from './contenxt/useTheme';
import { useEffect } from 'react';

function App() {
  const {state} = useTheme();
  const theme = state.theme;

  useEffect(() => {
    document.body.className = `${theme}-theme`
  }, [theme] );
  return (
      <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Navigate to="/signup" />} />
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/signin' element={<SignIn/>} ></Route>
        <Route path='/' element={<Layout/>} >
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/tasks' element={<Tasks/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
