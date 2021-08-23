import { Gif } from "./Gif/Gif.js"
import { useState, useEffect } from "react"
import { getGifs } from "../services/gifs"

export const ListGif = ({ params }) => {
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

  if (loading) {
    return (
      <i>
        <strong>Loading ...</strong>
      </i>
    )
  }

  return gifs.map((gif) => (
    <Gif key={gif.id} id={gif.id} title={gif.title} url={gif.url} />
  ))
}
