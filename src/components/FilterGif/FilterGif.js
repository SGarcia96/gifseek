import { useState } from "react"
import { useLocation } from "wouter"

export const FilterGif = () => {
  const [keyword, setKeyword] = useState("")
  const [path, pushLocation] = useLocation()

  const handleSubmit = (event) => {
    event.preventDefault()
    // navigate to other route
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <form className="App-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a gif here ..."
        onChange={handleChange}
        value={keyword}
      />
    </form>
  )
}
