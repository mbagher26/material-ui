// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import SearchIcon from '@mui/icons-material/Search';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { green, brown } from '@mui/material/colors';

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: brown[50],
//       dark: brown[700],
//       darker: brown[900],
//       main: green[400],
//     },
//   },
// });

// const NavigationItem = ({ item, handleCloseNavMenu, handleClick, anchorEl }) => {
//   const hasChildren = item.children && item.children.length > 0;

//   return (
//     <div key={item.title}>
//       {hasChildren ? (
//         <div>
//           <Button
//             id={`basic-button-${item.title}`}
//             aria-controls={`basic-menu-${item.title}`}
//             aria-haspopup="true"
//             aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
//             onClick={handleClick}
//             sx={{ my: 2, color: 'black', display: 'block' }}
//           >
//             {item.title}
//           </Button>

//           <Menu
//             id={`basic-menu-${item.title}`}
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleCloseNavMenu}
//             MenuListProps={{
//               'aria-labelledby': `basic-button-${item.title}`,
//             }}
//           >
//             {item.children.map((child) => (
//               <div key={child.title}>
//                 <MenuItem onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{child.title}</Typography>
//                 </MenuItem>
//               </div>
//             ))}
//           </Menu>
//         </div>
//       ) : (
//         <Button
//           key={item.title}
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: 'black', display: 'block' }}
//         >
//           {item.title}
//         </Button>
//       )}
//     </div>
//   );
// };

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <AppBar position="fixed">
//         <Container maxWidth="xl" sx={{ bgcolor: 'white' }}>
//           <Toolbar disableGutters>
//             {/* ... */}
//             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 // ... other Menu props
//               >
//                 {pages.map((page) => (
//                   <NavigationItem
//                     key={page.title}
//                     item={page}
//                     handleCloseNavMenu={handleCloseNavMenu}
//                     handleClick={handleOpenNavMenu}
//                     anchorEl={anchorElNav}
//                   />
//                 ))}
//               </Menu>
//             </Box>
//             {/* ... */}
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </ThemeProvider>
//   );
// };

// export default ResponsiveAppBar;
