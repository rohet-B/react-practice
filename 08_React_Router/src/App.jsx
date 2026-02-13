import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import User from './components/User'
import Product from './components/Product_using_QueryStrings';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <><Navbar/><Home/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:'/contact',
      element: <><Navbar/><Contact/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar/><User/></>
    },
    {
      path:"/product/:name",
      element:<><Navbar/><Product/></>
    }
  ])
  return (
    <>
      <h2 className='text-3xl font-bold'>React Router</h2>
        React Router is a library for routing in React.<br/>
        Routing means navigation between different views/pages.<br/>
        It helps create multiple pages inside a Single Page Application (SPA).<br/>
        Without a router, React apps would stay on only one view.<br/>
        To use react router install it like this: <span style={{color:"green"}}>npm i react-router-dom</span><br/>
        Now import these: <span style={{color:"yellowgreen"}}>createBrowserRouter</span> - Defines routes & <span style={{color:"yellowgreen"}}>RouterProvider</span> - Provides routes to the app.
      
      <h2 className='text-3xl font-bold'>&lt;a&gt; vs &lt;Link&gt;</h2>
      &lt;a&gt; tag reloads the entire page when clicked (used in normal HTML websites).<br/>
      React apps are Single Page Applications (SPA), so page reload is not needed.<br/>
      &lt;Link&gt; (from react-router-dom) changes the URL without reloading the page.<br/>
      &lt;Link&gt; only injects new components into DOM without reloading page, making navigation faster and smoother.
      <br/><br/>
      
      <RouterProvider router={router}/>

      <br/><br/>
      <h4 className=''>Visit here to test Querry Strings:</h4>
      <h4>/product/iphone?price=anyValue&launch=anyDate</h4>
    </>
  )
}

export default App
