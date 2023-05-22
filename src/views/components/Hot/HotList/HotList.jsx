import burger from "/src/assets/durger.png";
import desert from "/src/assets/desert.png";
import "./HotList.scss";
import HotItem from "../HotItem/HotItem";
const HotList = () => {
  return (
      <div className="hot">
        <div className="col-2 hot__list">
          <HotItem title="Big Burgers" discont='20% OFF' desc='Deserty' img={desert} alt='desert' />
          <HotItem title="All deserts" discont='50% OFF' desc='Fooddies' img={burger} alt='burger' />
        </div>
      </div>

      
  );
};

export default HotList;
