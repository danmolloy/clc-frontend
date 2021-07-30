import { useParams } from 'react-router-dom'

export const SingleArtist = ({ match }) => {
  const { artist } = match.params

  return (
    <div className="main">
      <h1>{artist}</h1>
    </div>
  )
}
