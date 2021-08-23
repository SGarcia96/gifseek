import { Link } from "wouter"
import { FilterGif } from "../../components/FilterGif/FilterGif"

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia"]

export function Home() {
  return (
    <>
      <h3 className="App-title">Most popular gifs</h3>
      <FilterGif />
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
