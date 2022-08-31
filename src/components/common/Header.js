import * as React from "react";
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Container, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/common/Header.scss";

const navItems = ["Home", "Courses", "Deals", "Success", "About", "Register"];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography className="header_logo" variant="h6" sx={{ my: 2 }}>
                Pro Edu
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Grid item xs={2} sx={{ display: { xs: "block", sm: "none" } }}>
                <Button className="header_btn poppins" variant="outlined">
                    Register
                </Button>
            </Grid>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="header">
            <AppBar className="appBar" component="nav">
                <Container className="container">
                    <Toolbar className="toolBar">
                        <Grid item xs={2}>
                            <Typography className="header_logo poppins" variant="h6" component="div" sx={{ flexGrow: 1, display: { sm: "block" } }}>
                                Pro Edu
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{ mx: "auto" }}>
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                {navItems.map((item) => (
                                    <Button className="header_items poppins" sx={{ px: { md: 2, lg: 3 } }} key={item}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={2} sx={{ display: { xs: "none", sm: "block" }, mr: { sm: 2, md: 0 } }}>
                            <Button className="header_btn poppins" variant="outlined">
                                Register
                            </Button>
                        </Grid>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    anchor="top"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "auto", height: "100vh" },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Header;
