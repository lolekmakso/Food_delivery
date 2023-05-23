import pizza from "/src/assets/icons/pizza.png";
import burger from "/src/assets/icons/burger.png";
import meat from "/src/assets/icons/meat.png";
import sushi from "/src/assets/icons/sushi.png";
import broccoli from "/src/assets/icons/broccoli.png";
import cake from "/src/assets/icons/cake.png";
import "./LabelList.scss";
import LabelItem from "../LabelItem/LabelItem";
const LabelList = () => {
  return (
    <div className="label">
      <div className="col-6 label__list">
        <LabelItem title="Pizza" img={pizza} alt="pizza" />
        <LabelItem title="Burger" img={burger} alt="burger" />
        <LabelItem title="BBQ" img={meat} alt="meat" />
        <LabelItem title="Sushi" img={sushi} alt="sushi" />
        <LabelItem title="Vegan" img={broccoli} alt="broccoli" />
        <LabelItem title="Desserts" img={cake} alt="cake" />
      </div>
    </div>
  );
};

export default LabelList;

