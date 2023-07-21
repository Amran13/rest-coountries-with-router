import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Countries from './components/Countries/Countries'
import CountryDetail from './components/CountryDetail/CountryDetail'

function App() {
  const router = createBrowserRouter([
    {path : '/', element : <div> Default Page </div>},
    {path : '/home', element : <div> Home Page </div>},
    {
      path : '/countries', 
      loader : async () => {
        return fetch('https://restcountries.com/v3.1/all')
      },
      element : <Countries/>
    },
    {
      path : '/country/:countryId',
      loader : async ({params}) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`)
      },
      element : <CountryDetail/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
