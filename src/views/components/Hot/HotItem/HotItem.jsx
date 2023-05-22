

import './HotItem.scss';

const HotItem = ({title, img, alt, discont, desc}) => {
  return (
    <>
      <div className="hot-item">
        <div className="hot-item__img">
          <img src={img} alt={alt} />
        </div>
        <div className="hot-item__info">
          <div className="hot-item__title">{title}</div>
          <div className="hot-item__discont">{discont}</div>
          <div className="hot-item__desc">{desc}</div>
        </div>
      </div>
    </>
  );
};

export default HotItem;
