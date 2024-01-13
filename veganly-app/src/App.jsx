import './App.css'
import Search from './components/Search'
import CardList from './components/CardList'

function App() {

  return (
    <>
      <h1 className="text-3xl text-blue-500 mb-4">Veganly</h1>
      <Search></Search>
      <CardList></CardList>
    </>
  )
}

export default App
