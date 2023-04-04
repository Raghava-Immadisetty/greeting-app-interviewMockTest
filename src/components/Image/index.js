import './index.css'

const Image = props => {
  const {details} = props

  const {imageUrl, imageAltText} = details

  const result = imageAltText === 'tamil' ? `tamil` : 'img'

  return <img src={imageUrl} alt={imageAltText} className={result} />
}
export default Image
