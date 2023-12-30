import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, brown } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

const pages = ['تماس با ما', 'کلاس خصوصی زبان انگایسی', 'مقالات', 'دوره های آموزشی', 'صفحه اصلی'];
const settings = ['درباره ما ', 'مسولیت اجتماعی', 'خدمات ما', 'نتایج زبان آموزان'];

function ResponsiveAppBar() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        light: brown[50],

        dark: brown[700],
        darker: brown[900],
        main: green[400],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Container maxWidth="xl" sx={{ bgcolor: 'white' }}>
          <Toolbar disableGutters >
            <SearchIcon />
            <Button variant="contained" sx={{ color: 'black', bgcolor: 'lime', margin: 0.5, width: 100, height: 50 }} >پنل کاربری</Button>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{marginLeft: 40, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, indexChild) => (
              
              <div>
                {indexChild === 1 || indexChild === 4 ? (

                     <Button
                     key={page}
                     onClick={handleCloseNavMenu}
                     sx={{ my: 2, color: 'black', display: 'block' }}
                   >
                     {page}
                   </Button>
                ) : (
                  <div>
                      <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ my: 2, color: 'black', display: 'block' }}
                      >
                        {page}
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
                        {settings.map((setting) => (
                          <div key={setting}>
                            <MenuItem onClick={handleClose}>
                              <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                          </div>
                        ))}
                      </Menu>
                    </div>
                )
                }
              </div>
            ))}
            </Box>
            <Button>
              <img src="https://www.ravaan.co/wp-content/uploads/2023/05/Full_Farsi_White-copy.webp" alt="logo" width='80' height='50' />
            </Button>
           
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;