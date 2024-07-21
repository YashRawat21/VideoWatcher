
import './App.css';
import Body from './components/Body';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar';
import Watch from './components/Watch';
import Feed from './components/Feed';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Body />,
    children:[
      {
      path:"/",
      element:<Feed />
      },
      {
      path:"/watch",
      element:<Watch />
      }
    ]
  }
])
function App() {
  return ( 
    <div className="App">
    <Navbar/>
    <RouterProvider router={appRouter} /> 
    </div>

  );
}

export default App;
