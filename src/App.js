import { Provider } from 'react-redux';
import './App.css'
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import Watchcontainer from './components/Watchcontainer';


function App() {

  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
        {
          path:"/",
          element:<Maincontainer/>
        },
        {
          path:"/watch",
          element:<Watchcontainer/>
        }
    ] }])
  return (
    <div>
     <Provider store={appStore}>
   <Head/>
   <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  )
}
export default App