import HotList from "./components/Hot/HotList/HotList";
import LabelList from "./components/Label/LabelList/LabelList";
import PointerList from "./components/Pointer/PointerList/PointerList";


const Home = () => {
  return (
    <div className="container home">
      <HotList />
      <LabelList />
      <PointerList />
    </div>
  );
};

export default Home;
