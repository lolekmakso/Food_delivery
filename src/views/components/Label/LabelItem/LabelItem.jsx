

import './LabelItem.scss';

const LabelItem = ({title, img, alt,}) => {
  return (
    <>
      <div className="label-item">
        <div className="label-item__img">
          <img src={img} alt={alt} />
        </div>
       
          <div className="label-item__title">{title}</div>
          
      </div>
    </>
  );
};

export default LabelItem;
