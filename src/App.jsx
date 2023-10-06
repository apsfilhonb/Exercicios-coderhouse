import './index.css'
import CardItem from './components/CardItem'
import NavBar from './components/NavBar'
import ItemList from './components/items/ItemList'

function App() {

  return (
    <>
      <div>
        <NavBar />
      </div>
      {/* <div>
        <CardItem />
      </div> */}
      <div>
        <ItemList />
      </div>

    </>
  )
}

export default App
