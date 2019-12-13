import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';


  test('it returns all buttons', () => {
   const { findAllByText } = render(<App />);
   findAllByText("button");
    });

    test('it returns all h4', () => {
      const { findAllByText } = render(<App />);
      findAllByText("h1");
       });
      
       it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });


