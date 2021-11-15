import { useEffect } from 'react';

export default function useScript (url, { async = true, onLoad = () => {} } = {}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = async;
    script.addEventListener('load', onLoad);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
}
