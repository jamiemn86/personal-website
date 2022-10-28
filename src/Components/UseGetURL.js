import { useLocation } from 'react-router-dom';

export function useGetPath() {
  const location = useLocation();
  return location.pathname;
}
