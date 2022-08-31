import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import "../../styles/Home/Courses.scss";
import UI from "../../images/UI.svg";
import Code from "../../images/code.svg";
import Web from "../../images/web.svg";
import Mixture from "../../images/mixture.svg";
import Photography from "../../images/photography.png";
import Graphics from "../../images/graphics.svg";
import CardImgOne from "../../images/card_small_1.svg";
import CardImgTwo from "../../images/card_small_2.svg";
import CardImgThree from "../../images/card_small_3.svg";

const Courses = () => {
    const [show, setshow] = useState(false);
    return (
        <Box className="course">
            <Container className="container">
                <Box align="center" sx={{ pt: { xs: 4, sm: 5, md: 7 } }}>
                    <Typography className="course_heading poppins" variant="h2">
                        Discover Our Popular Courses
                    </Typography>
                </Box>

                <Box align="center" sx={{ pt: { xs: 2, sm: 3 } }}>
                    <Typography className="course_paragraph poppins">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
                </Box>
                <Grid container spacing={3} sx={{ display: "flex", pt: { xs: 4, sm: 5 } }}>
                    <Grid item xs={12} lg={6} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center" }}>
                        <Box className="course_card_img">
                            <img src={UI} className="desktop" alt="Ui_image" />
                            <img src={CardImgOne} className="mobile" alt="Ui_image" />
                        </Box>
                        <Box className="course_card_text">
                            <Box sx={{ pl: 2, pt: { xs: 3, md: 4 } }}>
                                <Typography className="poppins" variant="h2">
                                    Fundamental Of UI/UX Design
                                </Typography>
                                <Typography className="course_card_p poppins">Some quick example text to build on the card title and make up the bulk of the card.</Typography>
                                <Typography className="poppins" variant="h5">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" } }}>
                        <Box className="course_card_img">
                            <img src={Code} className="desktop" alt="Ui_image" />
                            <img src={CardImgTwo} className="mobile" alt="Ui_image" />
                        </Box>
                        <Box className="course_card_text">
                            <Box sx={{ pl: 2, pt: { xs: 3, md: 4 } }}>
                                <Typography className="poppins" variant="h2">
                                    Javascript Basic to advanced
                                </Typography>
                                <Typography className="course_card_p poppins">Some quick example text to build on the card title and make up the bulk of the card.</Typography>
                                <Typography className="poppins" variant="h5">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" } }}>
                        <Box className="course_card_img">
                            <img src={Web} className="desktop" alt="Ui_image" />
                            <img src={CardImgThree} className="mobile" alt="Ui_image" />
                        </Box>
                        <Box className="course_card_text">
                            <Box sx={{ pl: 2, pt: { xs: 3, md: 4 } }}>
                                <Typography className="poppins" variant="h2">
                                    Fullstack Web Development
                                </Typography>
                                <Typography className="course_card_p poppins">Some quick example text to build on the card title and make up the bulk of the card.</Typography>
                                <Typography className="poppins" variant="h5">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className="course_hide" item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" } }}>
                        <Box className="course_card_img">
                            <img src={Mixture} className="desktop" alt="Ui_image" />
                            <img src={CardImgOne} className="mobile" alt="Ui_image" />
                        </Box>
                        <Box className="course_card_text">
                            <Box sx={{ pl: 2, pt: { xs: 3, md: 4 } }}>
                                <Typography className="course_card_p course_special poppins">Some quick example text to build on the card title and make up the bulk of the card.</Typography>
                                <Typography className="poppins" variant="h5">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className="course_hide" item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" } }}>
                        <Box className="course_card_img">
                            <img src={Photography} className="desktop" alt="Ui_image" />
                            <img src={CardImgTwo} className="mobile" alt="Ui_image" />
                        </Box>
                        <Box className="course_card_text">
                            <Box sx={{ pl: 2, pt: { xs: 3, md: 4 } }}>
                                <Typography className="poppins" variant="h2">
                                    Photography Basic Rules
                                </Typography>
                                <Typography className="course_card_p poppins">Some quick example text to build on the card title and make up the bulk of the card.</Typography>
                                <Typography className="poppins" variant="h5">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className="course_hide" item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" } }}>
                        <Box className="course_card_img">
                            <img src={Graphics} className="desktop" alt="Ui_image" />
                            <img src={CardImgThree} className="mobile" alt="Ui_image" />
                        </Box>
                        <Box className="course_card_text">
                            <Box sx={{ pl: 2, pt: { xs: 3, md: 4 } }}>
                                <Typography className="course_card_p course_special poppins">Some quick example text to build on the card title and make up the bulk of the card.</Typography>
                                <Typography className="poppins" variant="h5">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                {show && (
                    <Grid container>
                        <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, pt: { xs: 3, md: 3 } }}>
                            <Box className="course_card_img">
                                <img src={Mixture} className="desktop" alt="Ui_image" />
                                <img src={CardImgOne} className="mobile" alt="Ui_image" />
                            </Box>
                            <Box className="course_card_text">
                                <Box sx={{ pl: 2, pt: { xs: 6, md: 4 } }}>
                                    <Typography className="course_card_p course_special poppins">Some quick example text to build on the card title and make up the bulk of the card.</Typography>
                                    <Typography className="poppins" variant="h5">
                                        Price : 20$
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, pt: { xs: 3, md: 3 } }}>
                            <Box className="course_card_img">
                                <img src={Photography} className="desktop" alt="Ui_image" />
                                <img src={CardImgTwo} className="mobile" alt="Ui_image" />
                            </Box>
                            <Box className="course_card_text">
                                <Box sx={{ pl: 2, pt: { xs: 3, md: 4 } }}>
                                    <Typography className="poppins" variant="h2">
                                        Photography Basic Rules
                                    </Typography>
                                    <Typography className="course_card_p poppins">Some quick example text to build on the card title and make up the bulk of the card.</Typography>
                                    <Typography className="poppins" variant="h5">
                                        Price : 20$
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, pt: { xs: 3, md: 3 } }}>
                            <Box className="course_card_img">
                                <img src={Graphics} className="desktop" alt="Ui_image" />
                                <img src={CardImgThree} className="mobile" alt="Ui_image" />
                            </Box>
                            <Box className="course_card_text">
                                <Box sx={{ pl: 2, pt: { xs: 6, md: 4 } }}>
                                    <Typography className="course_card_p course_special poppins">Some quick example text to build on the card title and make up the bulk of the card.</Typography>
                                    <Typography className="poppins" variant="h5">
                                        Price : 20$
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, pt: { xs: 3, md: 3 } }}>
                            <Box className="course_card_img">
                                <img src={Mixture} className="desktop" alt="Ui_image" />
                                <img src={CardImgOne} className="mobile" alt="Ui_image" />
                            </Box>
                            <Box className="course_card_text">
                                <Box sx={{ pl: 2, pt: { xs: 6, md: 4 } }}>
                                    <Typography className="course_card_p course_special poppins">Some quick example text to build on the card title and make up the bulk of the card.</Typography>
                                    <Typography className="poppins" variant="h5">
                                        Price : 20$
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                )}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button onClick={() => setshow(!show)} className="course_btn_1 poppins" sx={{ px: 3, py: 1.5, mt: 5, display: { xs: "none", lg: "block" } }} variant="contained">
                        {show === true ? "See Less" : "See More Courses"}
                    </Button>
                    <Button onClick={() => setshow(!show)} className="course_btn_2 poppins" sx={{ px: 3, py: 1.5, mt: 4, display: { xs: "block", lg: "none" } }} variant="contained">
                        {show === true ? "View Less" : "View All"}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Courses;
