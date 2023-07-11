import React, {useEffect, useRef, useState} from "react";
import {Outlet} from "react-router-dom";
import BackToTopButton from "components/BackToTopButton";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const LayoutWrapper = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 600) {
        setOpen(false);
      } else {
        setOpen(open);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [window]);

  const visibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setShow(true);
    } else if (scrolled <= 300) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", visibility);
    return () => {
      window.removeEventListener("scroll", visibility);
    };
  }, [window]);

  return (
    <ThemeProvider theme={theme}>
      <div className="main_wrapper">
        <Box className={"navbar_wrapper"}>
          <NavBar />
        </Box>
        <Box className={`drawer_wrapper ${open ? "drawer-open" : "drawer-closed"}`}>
          <div className="drawer">
            <SideBar open={open} />
            <Box className="drawer_button">
              <IconButton
                onClick={handleDrawer}
                sx={{
                  backgroundColor: "#222",
                  "&:hover": {backgroundColor: "#333"},
                }}>
                {!open ? <ChevronRightIcon color="primary" /> : <ChevronLeftIcon color="primary" />}
              </IconButton>
            </Box>
          </div>
        </Box>
        <Box component="main" className={`main_wrapper-right ${open ? "" : ""}`} sx={{flexGrow: 1, padding: 3}}>
          <div className="mx-4 mt-4">
            <Outlet />
            <BackToTopButton show={show} />
          </div>
          <Footer />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default LayoutWrapper;

const theme = createTheme({
  palette: {
    primary: {
      main: "#DDD",
      light: "#EEE",
    },
  },
});
