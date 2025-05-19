import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<AuthProvider>
<AppRouter />
</AuthProvider>
</BrowserRouter>
</React.StrictMode>
);

function CardProducto({ nombre, precio }) {
  return (
  <div className="card">
  <div className="card-body">
  <h5 className="card-title">{nombre}</h5>
  <p className="card-text">Precio: {precio}</p>
  <i className="fas fa-apple-alt"></i>
  </div>
  </div>
  );
  }
  export default CardProducto;