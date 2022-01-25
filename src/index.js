import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// react içindeki index.js, aşağıda da yazdığı gibi html dom'unu manüpüle etmek için bir element id ile bağlıdır.
// public içindeki index.html de id'si root olan bir element görebilirsiniz. İsmi değişebilir, önemli olan oraya bağlı olmasıdır.

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);