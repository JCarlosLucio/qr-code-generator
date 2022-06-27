import { ChangeEvent, useContext } from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { ColorModeContext } from 'utils/ColorModeContext';

export const ColorModeToggle = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColorMode(event.target.checked ? 'dark' : 'light');
  };

  const isDark = colorMode === 'dark';

  return (
    <label className="swap swap-rotate print:hidden">
      <input type="checkbox" onChange={handleChange} checked={isDark} />
      <FaRegMoon className="swap-on h-6 w-6 fill-current sm:h-6 sm:w-6" />
      <FaRegSun className="swap-off h-6 w-6 fill-current sm:h-6 sm:w-6" />
    </label>
  );
};
