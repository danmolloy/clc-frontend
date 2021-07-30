import { useParams } from 'react-router-dom'

export const SingleArtist = () => {
  const { artistName } = useParams();

  return (
    <div className="main">
      <h2>{artistName}</h2>
    </div>
  )
}
