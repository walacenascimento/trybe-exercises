<script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>

const nextColor = 'nextColor';
const previousColor= 'previousColor';

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const nextColor = () => {
  return ( { type: nextColor} )
}

const previousColor = () => {
  return( { type: previousColor } )
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {

    default:
      return state;
  }
}

const store = Redux.reateStore(reducer);