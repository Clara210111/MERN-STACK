

import { makeStyles, Box , Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image: {
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width: '100%',
        height: '50vh',
        display: 'flex', //centered
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child' : {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child' : {
            fontSize: 20,
            background: '#FFFFFF'
        }
    }
})

const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
            <Typography>Code for Interview</Typography>
        </Box>
    )
}

export default Banner; 