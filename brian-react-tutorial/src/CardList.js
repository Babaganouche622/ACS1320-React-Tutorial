// CardList.js
// POPOSSpaceList
import Card from "./Card";

function CardList() {
  return (
    <div className="CardList">
      <Card
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
        />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardList;
