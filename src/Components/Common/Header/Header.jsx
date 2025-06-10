import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./Header.css";
import MediaQuery from "react-responsive";
import MenuIcon from '@mui/icons-material/Menu'; 

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <section className="header shadow flex">
        <section className="header-logo flex">
          <img
            src="src/assets/imgs/logo.png"
            className="header-logo-img text-shadow-md hover:scale-110 transition-all duration-300 max-h-9/12"
            alt="Juno Studios Logo" 
          /> 
          <div className="header-logo-text">
            <span className="block text-shadow-xl text-3xl md:text-4xl font-extrabold leading-none hover:scale-105 hover:brightness-95 transition-all duration-300">
              Juno
            </span>
            <span className="block text-shadow-xl text-3xl md:text-4xl font-extrabold leading-none hover:scale-105 hover:brightness-95 transition-all duration-300">
              Studios
            </span>
          </div>
        </section>

        {/*Desktop*/}
        <MediaQuery minWidth={768}>
            <section className="header-navbar">
              <nav>
                <ul>
                  <li>
                    <a
                      className="text-2xl hover:scale-105 transition-all duration-300 hover:brightness-95"
                      href="#WhoAmI" 
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-2xl hover:scale-105 transition-all duration-300 hover:brightness-95"
                      href="#GameShow" 
                    >
                      Games
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-2xl hover:scale-105 transition-all duration-300 hover:brightness-95"
                      href="#DevLog" 
                    >
                      Devlog
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
        </MediaQuery>

        {/* Menu Mobile*/}
        <MediaQuery maxWidth={767}>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ color: 'var(--melon)' }}
            >
              <MenuIcon /> 
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem component="a" href="#WhoAmI" onClick={handleClose}>
                About
              </MenuItem>
              <MenuItem component="a" href="#GameShow" onClick={handleClose}>
                Games
              </MenuItem>
              <MenuItem component="a" href="#DevLog" onClick={handleClose}>
                Devlog
              </MenuItem>
            </Menu>
          </div>
        </MediaQuery>
      </section>
    </>
  );
}