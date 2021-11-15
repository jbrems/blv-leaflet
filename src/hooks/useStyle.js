import { useEffect } from 'react';

export default function useScript (url, { async = true } = {}) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    link.async = async;

    document.body.appendChild(link);

    return () => {
      document.body.removeChild(link);
    };
  }, [url]);
}
