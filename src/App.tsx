import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Category from './component/category';
import NotFound from './component/NotFound';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Dashboard />} />
        <Route path='/createAccount' element={<Login />} />
        <Route path='/category' element={<Category />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
