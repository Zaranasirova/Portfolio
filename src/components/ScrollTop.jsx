import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Səhifənin başına qayıdır
  }, [pathname]); // URL dəyişdiyində tetiklenir

  return null;
};

export default ScrollTop;
