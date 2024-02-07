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

  const handleClick = (event: any, item: any, index: any) => {
    setAnchorEl(event.currentTarget);
    if (item.children) {
      setShowItem(index);
    } else {
      console.log("Change Route To", item.url);
    }
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu by resetting the anchor element
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
                
                  {page.children ? (
                    <>
                      <Button
                        sx={{ my: 2, color: 'black', display: 'block' }}
                        key={index}
                        id={`basic-menu-${index}`}
                        aria-controls={open ? `basic-menu-${index}` : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(event) => handleClick(event, page, index)}
                        aria-haspopup="true"
                      >
                        <span>{page.title}</span>
                      </Button>
                      {page.children && showItem === index && (
                        <Menu
                          id={`basic-menu-${index}`}
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl) && open} // Open the menu only if anchorEl is not null
                          onClose={handleClose} // Close the menu when clicking outside of it or when an item is clicked
                          MenuListProps={{
                            'aria-labelledby': `basic-menu-${index}`,
                          }}
                        >
                          {page.children.map((child: any) => (
                            <MenuItem onClick={handleClose}>{child.title}</MenuItem>
                          ))}
                        </Menu>
                      )}
                    </>
                  ) : (
                    <Button
                      disableFocusRipple
                      key={page.id}
                      onClick={handleClose}
                      sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                      {page.title}
                    </Button>
                  )}
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