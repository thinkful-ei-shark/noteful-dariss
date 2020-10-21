import React from 'react'
import ReactDOM from 'react-dom'
import FolderNavs from './FolderNavs'

test('renders without errors', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <FolderNavs />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});