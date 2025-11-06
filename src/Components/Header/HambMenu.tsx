import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

import * as navigationIds from '@/Data/NavigationIds';

const menuOptions = [
  {
    name: 'Beneficios',
    url: navigationIds.benefitsID
  },
  {
    name: 'Nuestras Áreas',
    url: navigationIds.coursesID
  },

  {
    name: 'Testimonios',
    url: navigationIds.testimonialsID
  },
  {
    name: 'Precios',
    url: navigationIds.pricingID
  },
  { name: 'Preguntas Frecuentes', url: navigationIds.faqID }
];

const ITEM_HEIGHT = 48;

export const HambMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={'sm:hidden'}>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <DensityMediumIcon sx={{ width: 20, height: 'auto' }} />
      </IconButton>
      <Menu
        id='long-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '40ch'
            }
          },
          list: {
            'aria-labelledby': 'long-button'
          }
        }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option.url}_${i}`}
            selected={false}
            onClick={handleClose}
          >
            <a href={`#${option.url}`}>{option.name}</a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
