import { ListGif } from "../../components/ListGif"
import { useState, useEffect } from "react"
import { getGifs } from "../../services/gifs"

export const SearchResults = ({ params }) => {
  const { keyword } = params
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])

  return (
    <>
      <ListGif gifs={gifs} />
    </>
  )
}
