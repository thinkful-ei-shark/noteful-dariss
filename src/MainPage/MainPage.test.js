import React from 'react'
import ReactDOM from 'react-dom'
import MainPage from './MainPage'


test('render without error', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MainPage />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});