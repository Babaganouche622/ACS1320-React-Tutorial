// CardList.js
// POPOSSpaceList
import Card from "../Card/Card";
import './CardList.css'
import data from '../../sfpopos-data.json'

function CardList() {
  const cards = data.map(( { title, address, images, hours  }, id) => {
    return (
      <div className="CardList">
        <Card
          id={id}
          key={title}
          name={title}
          address={address}
          image={images[0]}
          hours={hours}
          />
      </div>
  )})
  return (
    <div className="CardList">
      { cards }
    </div>
  )
}

export default CardList;
