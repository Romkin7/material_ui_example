import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Button, Radio, RadioGroup, 
    FormControlLabel, FormControl, List, ListItem, ListItemAvatar, Avatar, ListItemText, FormLabel } from "@material-ui/core";

const useStyles = makeStyles({
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80%"
    },
    input: {
        marginBottom: "1rem"
    },
    footer: {
        padding: "2rem"
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Grid container>
                <Grid item xs={6}>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                              
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="github" secondary="My github" />
                        
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <form className={classes.form}>
                        <FormControl className={classes.form}>
                            <TextField className={classes.input} fullWidth label="Firstname" />
                            <TextField className={classes.input} fullWidth label="Lastname" />
                            <TextField className={classes.input} fullWidth label="Email" type="email" />
                            <TextField className={classes.input} fullWidth label="Phone" type="tel" />
                            <TextField className={classes.input} fullWidth variant="outlined" label="Password" type="password" />
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                            <FormLabel component="label" ></FormLabel>
                            <Button variant="outlined" color="primary">Sign up</Button>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;