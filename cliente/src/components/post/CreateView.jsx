import { useState } from 'react'; 
import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    container:{
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding: 0
        }

    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form:{
        display:'flex',
        flexDirection: 'row',
        marginTop:'10'
    },
    textField:{
        flex: 1,
        margin: '0 30px',
        fontSize: 25,
        marginTop: 10
    },
    textarea:{
        width: '100%',
        marginTop: 50,
        border: 'none',
        fontSize: 18,
        '&: focus-visible': {
            outline: 'none',
        }
    },
    addbutton:{
        marginTop: 10
    }
}));

const initialValues = {
    title: '',
    description: '',
    picture: '',
    username:'',
    categories:'All',
    createDate: new Date()
}

const CreateView = () => {
    const classes= useStyle();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const history = useHistory();
    
    const [post, setPost] = useState(initialValues);

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value })
    }

    const savePost = async () => {
        await createPost(post);
        history.push('/')
    }
 
    return(
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt="banner"/>
            <FormControl className={classes.form}>
                <AddCircle className={classes.addbutton} fontSize="large" color="action"/> 

                <InputBase
                    onChange= {(e) => handleChange(e)} 
                    placeholder= "Title" 
                    className={classes.textField}
                    name='title'
                />
                <Button onClick={() => savePost()} variant="contained" color= "primary">Publish</Button>
            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story...."
                className={classes.textarea}
                onChange= {(e) => handleChange(e)}
                name='description'
            />
        </Box>
    )
}

export default CreateView;