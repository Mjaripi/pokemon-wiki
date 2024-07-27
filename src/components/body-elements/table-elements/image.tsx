import { ImageData } from '../../../entities/details.types';

const PokeImage = ({ url, name }: ImageData) => {
  return (
    url
    ? <img src={url} alt={`${name}_pk_image`} width="100"/>
    : <svg width="100" height="100">
        <rect x="0" y="0" width="100" height="100" fill="grey"></rect>
        <text fill="#ffffff" fontSize="10" fontFamily="Verdana" x="50%" y="50%" textAnchor="middle">CARGANDO...</text>
      </svg>
  )
}

export default PokeImage;