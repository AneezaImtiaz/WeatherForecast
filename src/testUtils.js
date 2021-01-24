
import React from 'react';
import PropTypes from 'prop-types';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function render(
  ui,
  {
    initialState,
    reducer,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    const store = createStore(reducer, initialState);

    return <Provider store={store}>{children}</Provider>;
  }
  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}


// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
