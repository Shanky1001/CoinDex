import React from "react";
import {Outlet} from "react-router-dom";
import BackToTopButton from "components/BackToTopButton";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

import {styled, Theme, CSSObject, createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import {Stack} from "@mui/material";

const LayoutWrapper = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="main_wrapper" style={{display: "flex"}}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <NavBar />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} sx={{position: "relative"}}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            sx={{position: "absolute", bottom: "80px"}}>
            <IconButton onClick={handleDrawer} sx={{backgroundColor: "#222", "&:hover": {backgroundColor: "#333"}}}>
              {!open ? <ChevronRightIcon color="primary" /> : <ChevronLeftIcon color="primary" />}
            </IconButton>
          </Stack>
          <Divider />
          <SideBar />
        </Drawer>
        <Box component="main" className="main_wrapper-right" sx={{flexGrow: 1, padding: 3}}>
          {/* <NavBar /> */}
          <div className="mx-4 mt-4">
            <Outlet />
            <BackToTopButton />
          </div>
          <Footer />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default LayoutWrapper;

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  top: "40px",
  backgroundColor: theme.palette.primary.light,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  top: "40px",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// const DrawerHeader = styled("div")(({theme}) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#DDD",
      light: "#EEE",
    },
  },
});
