import { createRoot } from 'react-dom/client';
import _App from './App.jsx';
import './index.css';
import './styles/animations.css';
import { _BrowserRouter } from 'react-router-dom';
import _AuthContext from './context/AuthContext.jsx';
import _UserContext from './context/UserContext.jsx';
import _ShopContext from './context/ShopContext.jsx';
import _ThemeProvider from './context/ThemeContext.jsx'; // ⬅️ import

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      {' '}
      {/* ⬅️ wrap here */}
      <AuthContext>
        <UserContext>
          <ShopContext>
            <App />
          </ShopContext>
        </UserContext>
      </AuthContext>
    </ThemeProvider>
  </BrowserRouter>
);
