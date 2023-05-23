
import restaurants from "/src/assets/restaurants/restaurants1.png";
import restaurants2 from "/src/assets/restaurants/restaurants2.png";
import restaurants3 from "/src/assets/restaurants/restaurants3.png";

import sushi from "/src/assets/icons/sushi.png";
import burger from "/src/assets/icons/burger.png";
import "./PointerList.scss";

import PointerItem from "../PointerItem/PointerItem";
const PointerList = () => {
  return (
      <div className="pointer">
        <div className="col-3 pointer__list">
          <PointerItem title="Royal Sushi House"  img={restaurants} alt='restaurants' min="30-40 min" sum="$32 min sum" view={sushi} surname="Sushi" />
          <PointerItem title="Burgers & Pizza"  img={restaurants2} alt='restaurants2' min="40-60 min" sum="$24 min sum" view={burger} surname="Burger" />
          <PointerItem title="Ninja sushi"  img={restaurants3} alt='restaurants3' min="20-40 min" sum="$$40 min sum" view={sushi} surname="Sushi" />
          <PointerItem title="Royal Sushi House"  img={restaurants} alt='restaurants' min="30-40 min" sum="$32 min sum" view={sushi} surname="Sushi" />
          <PointerItem title="Burgers & Pizza"  img={restaurants2} alt='restaurants2' min="40-60 min" sum="$24 min sum" view={burger} surname="Burger" />
          <PointerItem title="Ninja sushi"  img={restaurants3} alt='restaurants3' min="20-40 min" sum="$$40 min sum" view={sushi} surname="Sushi" />
          
        </div>
      </div>

      
  );
};

export default PointerList;

