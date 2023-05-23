import BoxIcon from "../../../../components/icons/BoxIcon";
import TimeIcon from "../../../../components/icons/TimeIcon";

import "./PointerItem.scss";

const PointerItem = ({ title, img, alt, sum, min, view, surname }) => {
  return (
    <>
      <div className="pointer-item">
        <div className="pointer-item__img">
          <img src={img} alt={alt} />
        </div>
        <div className="pointer-item__info">
          <div className="pointer-item__text">
            <div className="pointer-item__title">{title}</div>
            <div className="pointer-item__desc">
              <div className="pointer-item__min">
                <TimeIcon />
                {min}
              </div>
              <div className="pointer-item__sum">{sum}</div>
            </div>
            <div className="pointer-item__food">
              <div className="pointer-item__view"><img src={view} alt="view" /></div>
              <div className="pointer-item__surname">{surname}</div>
            </div>
          </div>
          <div className="box-icon">
            <BoxIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default PointerItem;
