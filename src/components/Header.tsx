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

// const pages = ['تماس با ما', 'کلاس خصوصی زبان انگایسی', 'مقالات', 'دوره های آموزشی', 'صفحه اصلی'];
// const settings = ['درباره ما ', 'مسولیت اجتماعی', 'خدمات ما', 'نتایج زبان آموزان'];
// const articles = ['مهارت', 'برچسب ها', 'آموزش گرامر انگلیسی', 'آموزش لغات انگلیسی ', 'الفبا و تلفظ انکلیسی', 'مکالمات', 'آموزش انگلیسی به کودکان', 'آیلتس', 'مهاجرت']

const pages = [
  {
    title: "تماس با ما",
    children: [
      {
        title: 'درباره ما '
      },
      {
        title: 'مسولیت اجتماعی'
      },
      {
        title: 'خدمات ما'
      },
      {
        title: 'نتایج زبان آموزان'
      }

    ]
  },
  {
    title: 'کلاس خصوصی زبان انگایسی'
  },
  {
    title: 'مقالات',
    children: [
      {
        title: 'مهارت'
      },
      {
        title: 'برچسب ها'
      },
      {
        title: 'آموزش گرامر انگلیسی'
      },
      {
        title: 'آموزش لغات انگلیسی '
      },
      {
        title: 'الفبا و تلفظ انکلیسی'
      },
      {
        title: 'مکالمات'
      },
      {
        title: 'آموزش انگلیسی به کودکان'
      },
      {
        title: 'آیلتس'
      },
      {
        title: 'مهاجرت'
      }
    ]
  },
  {
    title: 'دوره های آموزشی'
  },
  {
    title: 'صفحه اصلی'
  }
]

const NavigationItem = ({ item, handleCloseNavMenu, handleClick, anchorEl }: { item: any, handleCloseNavMenu: any, handleClick: any, anchorEl: any }) => {

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div key={item.title}>
      {
        hasChildren ? (
          <div >
            <Button
              id={`basic-button-${item.title}`}
              aria-controls={`basic-menu-${item.title}`}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
              onClick={handleClick}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              {item.title}
            </Button>

            <Menu
              id={`basic-menu-${item.title}`}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseNavMenu}
              MenuListProps={{
                'aria-labelledby': `basic-button-${item.title}`,
              }}
            >
              {(item.children.map((child: any) => (
                <div key={child.title}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{child.title}</Typography>
                  </MenuItem>
                </div>
              )))
              }
            </Menu>
          </div>
        ) : (
          <Button
            key={item.title}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {item.title}
          </Button>
        )
      }
    </div>
  )
}

function ResponsiveAppBar() {



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
            <Button variant="contained" sx={{ color: 'black', backgroundColor: '#11B9CD', margin: 0.5, width: 100, height: 45 }} >پنل کاربری</Button>
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  <div>
                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>

                  </div>
                ))}
              </Menu>
            </Box> */}

            <Button>
              <Box sx={{width:1100, marginLeft: 40, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {/* {pages.map((page, indexChild) => (

                  <div key={indexChild}>
                    {
                      indexChild === 1 || indexChild === 3 || indexChild === 4 ? (

                        <Button
                          key={page.title}
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                          {page.title}
                        </Button>
                      ) :
                        (
                          <div key={indexChild}>
                            <Button
                              id="basic-button"
                              aria-controls={open ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              onClick={handleClick}
                              sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                              {page.title}
                            </Button>

                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                'aria-labelledby': `basic-button-${indexChild}`,
                              }}
                            >
                              {indexChild === 2 ? (articles.map((article) => (
                                <div key={article}>
                                  <MenuItem onClick={handleClose}>
                                    <Typography textAlign="center">{article}</Typography>
                                  </MenuItem>
                                </div>
                              ))) :

                                indexChild === 0 && (settings.map((setting) => (
                                  <div key={setting}>
                                    <MenuItem onClick={handleClose}>
                                      <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                  </div>
                                )))
                              }
                            </Menu>
                          </div>
                        )}
                  </div>
                ))} */}
                {
                  pages.map((page) => (
                    <NavigationItem
                    item={page}
                    handleCloseNavMenu={handleCloseNavMenu}
                    handleClick={handleOpenNavMenu}
                    anchorEl={anchorElNav}
                    />
                  ))
                }
              </Box>
              <img src="https://www.ravaan.co/wp-content/uploads/2023/05/Full_Farsi_White-copy.webp" alt="logo" width='80' height='50' />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;