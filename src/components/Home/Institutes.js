import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import "../../styles/Home/Institutes.scss";
import InstitutePic from "../../images/institute.svg";
import InstituteFull from "../../images/institute_man.svg";

const Institutes = () => {
    return (
        <Box className="institute">
            <Container className="container">
                <Grid container sx={{ display: "flex", alignItems: "center", backgroundColor: "#F4FAFD", borderRadius: "5px" }}>
                    <Grid item xs={12} lg={5}>
                        <Box className="institute_image">
                            <img src={InstitutePic} className="image_one" alt="person_image" />
                            <img src={InstituteFull} className="image_two" alt="person_image" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={7} sx={{ pt: { xs: 5, sm: 6, lg: 0 } }}>
                        <Box className="institute_text">
                            <Typography className="poppins" variant="h1">
                                Explore The elearning Institute
                            </Typography>
                            <Typography className="intstitute_p1 poppins" sx={{ pt: { xs: 2, sm: 3 } }}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If
                                you are going to use a passage of Lorem Ipsum, you need to be sure.
                            </Typography>
                            <Typography className="intstitute_p2 poppins" sx={{ display: { xs: "none", lg: "block" }, pt: 5 }}>
                                Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.
                            </Typography>
                            <Grid container className="institute_counter">
                                <Grid xs={6} sm={4} md={3} lg={4}>
                                    <Typography variant="h3">3.2k+</Typography>
                                    <Typography variant="h6">Online Course</Typography>
                                </Grid>
                                <Grid xs={6} sm={5} md={3} lg={4}>
                                    <Typography className="poppins" variant="h3">
                                        600+
                                    </Typography>
                                    <Typography className="poppins" variant="h6">
                                        Expert member
                                    </Typography>
                                </Grid>
                                <Grid xs={6} sm={5} md={3} lg={4} sx={{ pt: { xs: 3, md: 0 } }}>
                                    <Typography className="poppins" variant="h3">
                                        1k+
                                    </Typography>
                                    <Typography className="poppins" variant="h6">
                                        Rating & Review
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button className="institute_btn poppins" sx={{ px: 3, py: 1.5, mt: { xs: 4, md: 6 } }} variant="contained">
                                Read More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Institutes;
