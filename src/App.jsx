import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import './global.css'
import { List } from "./components/List/List"

function App() {

  return (
    <>
      <Header />
        <main>
          <List />
        </main>
      <Footer />
    </>
  )
}

export default App
