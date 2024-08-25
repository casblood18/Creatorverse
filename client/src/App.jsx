import { useRoutes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';

function App() {
  const routes = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/creator/:id', element: <ViewCreator /> },
    { path: '/add', element: <AddCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
  ]);

  return (
    <div>
      <div className='header'>
        <h1 className="headline">Creatorverse</h1>
        <nav>
          <Link to="/">Show all Creators</Link> 
          <Link to="/add">Add New Creator</Link>
        </nav>
      </div>
      <div>
        {routes}
      </div>
    </div>
  );
}

export default App;