// CardList.js
// POPOSSpaceList
import Card from "./Card";
import './CardList.css'
import data from './sfpopos-data.json'

function CardList() {
  const cards = data.map(( { title, address, images, hours  } ) => {
    return (
      <div className="CardList">
        <Card
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
