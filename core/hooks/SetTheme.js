import { useState, useEffect } from 'react';

function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('isDark');
      setIsDark(savedTheme === 'true');
    }
  }, []);

  const handleThemeToggle = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;
      if (typeof window !== 'undefined') {
        localStorage.setItem('isDark', newIsDark);
      }
      return newIsDark;
    });
  };

  return [isDark, handleThemeToggle];
}

export default useTheme;
