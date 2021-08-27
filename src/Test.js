import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeView } from '@progress/kendo-react-treeview';
const tree = [{
  text: 'Furniture',
  expanded: true,
  items: [{
    text: 'Tables & Chairs'
  }, {
    text: 'Sofas'
  }, {
    text: 'Occasional Furniture'
  }]
}, {
  text: 'Decor',
  items: [{
    text: 'Bed Linen'
  }, {
    text: 'Curtains & Blinds'
  }, {
    text: 'Carpets'
  }]
}];

const Test = () => {
  const onItemClick = event => {
    event.item.selected = !event.item.selected;
  };

  const onExpandChange = event => {
    event.item.expanded = !event.item.expanded;
  };

  return <TreeView data={tree} expandIcons={true} onExpandChange={onExpandChange} aria-multiselectable={true} onItemClick={onItemClick} />;
};

ReactDOM.render(<Test />, document.querySelector('sample'));