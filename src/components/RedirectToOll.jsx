import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RedirectToOll() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/oll', { replace: true });
    }
  }, [location, navigate]);

  return null;
}

export default RedirectToOll;
