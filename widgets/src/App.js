import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

const items = [
  {
    title: 'What is React',
    content: 'React is a front end JS Frameword',
  },
  {
    title: 'Why use React',
    content: 'React is a famous JS library',
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color of Red',
    value: 'red',
  },
  {
    label: 'The Color of Green',
    value: 'green',
  },
  {
    label: 'A shade of blue',
    value: 'blue',
  },
];

const showAccordian = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
};

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <h1> App </h1>
      {showAccordian()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> */}
      {/* <Translate /> */}
    </div>
  );
};
export default App;
