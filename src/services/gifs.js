const api_key = "sNpjEfjBdKxmWxO8bu81zmgShBclk5KR"

export const getGifs = ({ keyword = "panda" } = {}) => {
  const base_url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

  return fetch(base_url)
    .then((response) => response.json())
    .then((response) => {
      const { data } = response
      const gifs = data.map((image) => {
        const { id, title } = image
        const { url } = image.images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
}
