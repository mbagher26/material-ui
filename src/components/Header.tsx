import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';




const pages = [
  {
    id: 1,
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
    id: 2,
    title: 'کلاس خصوصی زبان انگلیسی'
  },
  {
    id: 3,
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
    id: 4,
    title: 'دوره های آموزشی'
  },
  {
    id: 5,
    title: 'صفحه اصلی'
  }
]






function ResponsiveAppBar() {
  const [showItem, setShowItem] = React.useState<any>(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (item: any, index: any) => {
    // setAnchorEl(event.currentTarget);
    item.children ? (
      setShowItem(index)
    ) : (
      console.log("Change Route To item.url")
    )
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



  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" sx={{ bgcolor: 'white' }}>
        <Toolbar disableGutters >
          <SearchIcon />
          <Button variant="contained" sx={{ color: 'black', backgroundColor: '#11B9CD', marginLeft: 5, width: 110, height: 45 }} >پنل کاربری</Button>

          <Box sx={{ width: 1000, marginLeft: 40, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              pages.map((page: any, index: any) => (
                <>
                  <Button
                    key={index}
                    id={`basic-menu-${index}` }
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    onClick={() => handleClick(page, index)}
                    aria-haspopup="true"
                  >


                    {
                      page.children && showItem === index && (
                        page.children.map((child: any, ii: any) => (
                          // <div key={ii}>{child.title}</div>
                          <Menu
                            key={ii}
                            id={`basic-menu-${index}`}
                            anchorEl={anchorEl}
                            open={open}

                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                          >
                            {child.title}
                          </Menu>
                        ))
                      )
                    }
                  </Button>
                  {/* {page.children ?
                      (
                        <div key={index}>
                          <Button
                            key={page.title}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                          >
                            {page.title}
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
                            {page.children.map(child =>

                              <MenuItem key={child.title} onClick={handleClose}>
                                <Typography key={child.title} textAlign="center">{child.title}</Typography>
                              </MenuItem>

                            )}
                          </Menu>
                        </div>
                      ) : (
                        <Button
                          disableFocusRipple
                          key={page.id}
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                          {page.title}
                        </Button>
                      )
                    } */}
                </>
              ))
            }
          </Box>
          <img src="https://www.ravaan.co/wp-content/uploads/2023/05/Full_Farsi_White-copy.webp" alt="logo" width='80' height='50' />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;