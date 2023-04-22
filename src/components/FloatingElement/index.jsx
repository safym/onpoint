import corpuscule1 from '../../assets/images/corpuscule1.png'
import corpuscule2 from '../../assets/images/corpuscule2.png'
import corpuscule3 from '../../assets/images/corpuscule3.png'
import corpuscule4 from '../../assets/images/corpuscule4.png'
import corpusculeBlur from '../../assets/images/corpusculeBlur.png'
import pinksperm from '../../assets/images/pinksperm.png'
import blueBubble1 from '../../assets/images/blueBubble1.png'
import blueBubble2 from '../../assets/images/blueBubble2.png'
import pinkBubble1 from '../../assets/images/pinkBubble1.png'
import pinkBubble2 from '../../assets/images/pinkBubble2.png'

const imageMap = {
  corpuscule1: corpuscule1,
  corpuscule2: corpuscule2,
  corpuscule3: corpuscule3,
  corpuscule4: corpuscule4,
  corpusculeBlur: corpusculeBlur,
  pinksperm: pinksperm,
  blueBubble1: blueBubble1,
  blueBubble2: blueBubble2,
  pinkBubble1: pinkBubble1,
  pinkBubble2: pinkBubble2,
}

const FloatingElement = ({ imageName, className }) => {
  const image = imageMap[imageName]

  return (
    <div
      className={`floating-element ${className}`}>
      <img src={image} alt={imageName} />
    </div>
  )
}

export default FloatingElement
