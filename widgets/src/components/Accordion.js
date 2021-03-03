import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    //console.log('Item clicked', index);
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(index)} className={`${active} title`}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`${active} content`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
