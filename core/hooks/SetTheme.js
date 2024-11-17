import { useState } from 'react';

function useTheme() {
    const [isDark, setIsDark] = useState(false);
  
    const handleThemeToggle = () => {
      setIsDark(!isDark);
    };
    return [isDark, handleThemeToggle]
}
export default useTheme;

