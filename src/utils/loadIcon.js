//------------------------------------------
// UTILIDAD: Carga un SVG como HTML inline
//------------------------------------------

import bellSvg from '../assets/icons/bell.svg?raw';
import messageSvg from '../assets/icons/message.svg?raw';
import pinterestSvg from '../assets/icons/pinterest.svg?raw';
import searchSvg from '../assets/icons/search.svg?raw';
import menuSvg from '../assets/icons/menu.svg?raw';
import closeSvg from '../assets/icons/close.svg?raw';

const icons = {
  bell: bellSvg,
  message: messageSvg,
  pinterest: pinterestSvg,
  search: searchSvg,
  menu: menuSvg,
  close: closeSvg,
};

export function loadIcon(iconName) {
  return icons[iconName] ?? '';
}
