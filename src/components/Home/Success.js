import React, { useState } from "react";
import { Box, Button, Card, CardContent, CardActionArea, CardMedia, Grid, Typography, Container } from "@mui/material";
import "../../styles/Home/Success.scss";
import UiDesigner from "../../images/Ui_designer.svg";
import WebDeveloper from "../../images/web_developer.svg";
import Motion from "../../images/motion.svg";
import Designer from "../../images/designer.svg";

const Success = () => {
    const [show, setshow] = useState(false);
    return (
        <Box className="success">
            <Container className="container">
                <Grid container>
                    <Grid xs={12} lg={6}>
                        <Typography className="poppins" variant="h3">
                            Meet Our Successfull Students
                        </Typography>
                        <Typography className="poppins" variant="h6">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ display: "flex", pt: { xs: 4, sm: 6 } }}>
                    <Grid className="mobile_hide" item xs={12} sm={6} lg={3}>
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia component="img" src={UiDesigner} alt="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_name poppins" variant="h5" component="div">
                                        Awlad Hossain
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_p poppins" color="text.secondary">
                                        UIUX Designer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid className="mobile_hide" sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "column" } }} item xs={12} sm={6} lg={3}>
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia component="img" src={Motion} alt="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_name poppins" variant="h5" component="div">
                                        Jannatul Islam
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_p poppins" color="text.secondary">
                                        Motion Design
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "column" } }} item xs={12} sm={6} lg={3}>
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia component="img" src={Designer} alt="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_name poppins" variant="h5" component="div">
                                        Imran Hossain
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_p poppins" color="text.secondary">
                                        Graphic Designer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "column" } }} item xs={12} sm={6} lg={3}>
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia component="img" src={WebDeveloper} alt="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_name poppins" variant="h5" component="div">
                                        Nishi Akter
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_p poppins" color="text.secondary">
                                        Web Developer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid className="alter" sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "column" } }} item xs={12} sm={6} lg={3}>
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia component="img" src={Motion} alt="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_name poppins" variant="h5" component="div">
                                        Jannatul Islam
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_p poppins" color="text.secondary">
                                        Motion Design
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                {show && (
                    <Grid container spacing={2} sx={{ display: "flex", pt: 2 }}>
                        <Grid sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "column" } }} item xs={12} sm={6} lg={3}>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia component="img" src={UiDesigner} alt="green iguana" />
                                    <CardContent>
                                        <Typography gutterBottom sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_name poppins" variant="h5" component="div">
                                            Awlad Hossain
                                        </Typography>
                                        <Typography variant="body2" sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_p poppins" color="text.secondary">
                                            UIUX Designer
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "column" } }} item xs={12} sm={6} lg={3}>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia component="img" src={Motion} alt="green iguana" />
                                    <CardContent>
                                        <Typography gutterBottom sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_name poppins" variant="h5" component="div">
                                            Jannatul Islam
                                        </Typography>
                                        <Typography variant="body2" sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_p poppins" color="text.secondary">
                                            Motion Design
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "column" } }} item xs={12} sm={6} lg={3}>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia component="img" src={Designer} alt="green iguana" />
                                    <CardContent>
                                        <Typography gutterBottom sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_name poppins" variant="h5" component="div">
                                            Imran Hossain
                                        </Typography>
                                        <Typography variant="body2" sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_p poppins" color="text.secondary">
                                            Graphic Designer
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "column" } }} item xs={12} sm={6} lg={3}>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia component="img" src={WebDeveloper} alt="green iguana" />
                                    <CardContent>
                                        <Typography gutterBottom sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_name poppins" variant="h5" component="div">
                                            Nishi Akter
                                        </Typography>
                                        <Typography variant="body2" sx={{ textAlign: { xs: "center", sm: "left" } }} className="card_p poppins" color="text.secondary">
                                            Web Developer
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                )}
                <Box align="center">
                    <Button onClick={() => setshow(!show)} className="success_btn poppins" sx={{ px: 3, py: 1, mt: { xs: 5, sm: 6 } }} variant="contained">
                        {show === true ? "View Less" : "View More"}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Success;
