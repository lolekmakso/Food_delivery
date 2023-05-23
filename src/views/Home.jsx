import HotList from "./components/Hot/HotList/HotList";
import LabelList from "./components/Label/LabelList/LabelList";


const Home = () => {
  return (
    <div className="container home">
      <HotList />
      <LabelList />
    </div>
  );
};

export default Home;
