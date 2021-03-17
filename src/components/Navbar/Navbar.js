import React from 'react';
import { Header, Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {

  const History = useHistory();

  function linkClick(name) {
    History.push(`/${name}`)
  }

  return (
    <Header>
      <Menu widths='4' tabular>
        <Menu.Item 
          name='characters'
          onClick={() => linkClick('')}
        />
        <Menu.Item 
          name='locations'
          onClick={() => linkClick('locations')}
        />
        <Menu.Item 
          name='episodes'
          onClick={() => linkClick('episodes')}
        />
      </Menu>
    </Header>
  )
}