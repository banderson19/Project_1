const url = 'https://api.nasa.gov/planetary/apod?api_key=PIVaIlILgmCB8PEO5zQtDdXPVVStukX0cygl7jp9'
// const api_key = config.NASA_API_KEY
const fetchNASAData = async () => {
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      console.log('NASA APOD data', data)
      document.getElementById('title').textContent = data.title
      document.getElementById('date').textContent = data.date
      document.getElementById('picture').src = data.hdurl
      document.getElementById('explanation').textContent = data.explanation
    } catch (error) {
      console.log(error)
    }

  }
  fetchNASAData()