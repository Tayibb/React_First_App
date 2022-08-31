import React from "react";
import { Box, Grid, Button, Typography, Container } from "@mui/material";
import "../../styles/Home/Register.scss";
const Register = () => {
    return (
        <Box className="register">
            <Container className="container">
                <Grid container sx={{ display: "flex", py: { xs: 6, sm: 8 }, justifyContent: "space-around", mt: { xs: 6, md: 8 }, backgroundColor: "#289BDE", borderRadius: "5px" }}>
                    <Grid xs={12} lg={6}>
                        <Box>
                            <Typography className="poppins" sx={{ textAlign: { xs: "center", lg: "left" } }} variant="h3">
                                Ready to join?
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                            <Typography className="poppins" sx={{ textAlign: { xs: "center", lg: "left" } }} variant="h6">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} lg={3} sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-end" }, alignItems: "center", pt: { xs: 4, lg: 0 } }}>
                        <Button className="register_btn poppins" variant="contained">
                            Register Now
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;
