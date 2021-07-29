import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'

export const Artists = () => {
  const [artistName, setArtistName] = useState(null)
  const [albums, setAlbums] = useState(null)
  const [members, setMembers] = useState(null)

  useEffect(() => {
    getData()
  })

  const getData = () => {
    fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res => res.json())
    .then(myJson => {
      setArtistName(myJson["artist"])
      setAlbums(myJson['albums'])
      setMembers(myJson['members'])
    })
  }

  return (
    <div className="main">
      <h2>Artists</h2>
      <Link to={`/artists/${artistName}`}>{artistName}</Link>
    </div>
  )
}