import "./App.css"
import { ListGif } from "./components/ListGif"
import { Link, Route } from "wouter"
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <Link to="/">
          <img className="App-logo" alt="Gifseek logo" src="/logo.png" />
        </Link>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={ListGif} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  )
}

export default App
