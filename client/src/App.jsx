import { useRoutes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
require('dotenv').config();

function App() {
  const routes = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/creator/:id', element: <ViewCreator /> },
    { path: '/add', element: <AddCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
  ]);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add New Creator</Link>
      </nav>
      {routes}
    </div>
  );
}

export default App;