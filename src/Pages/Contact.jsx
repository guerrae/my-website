import React, {useState} from "react";
import Nav from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import {Helmet} from "react-helmet";
import "./contact.scss"
import {makeStyles} from "@material-ui/core/styles"
import {Grid, TextField, Paper, Button} from "@material-ui/core"
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import sentImg from '../logos/greenCheckMark.webp'
import notSentImg from '../logos/red-x.webp'
import emailjs from "emailjs-com"
import Modal from "react-modal"
import envelopeImg from "../logos/envelope.svg";

Modal.setAppElement('#root');

const useStyles = makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root':{
            width: '100%',
            margin: theme.spacing(1),
        }
    },

    paper:{
        width: '50%',
        margin: 'auto',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(1),
        paddingRight: theme.spacing(3),
        backgroundColor: '#f5f8ff'
    },

    button: {
        margin: theme.spacing(1),
        color: theme.palette.primary.main = "white",
        backgroundColor: theme.palette.primary.main = "#000000",

        "&:hover":{
            color: theme.palette.primary.main = "#000000",
            backgroundColor: theme.palette.primary.main = "#FFD700",
        }
    },
}))

export default function Contact() {
    //Variable Initialazers
    const initialValues = {
        fullName: '',
        email: '',
        subject: '',
        message: '',
    }
    
    //modify variables
    const classes = useStyles();
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTwoOpen, setModalTwoOpen] = useState(false);

    //handle textbox input
    const handleChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        validate({ [name]: value })
    }

    //Validate Text Fields
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues){//check name field
            temp.fullName = fieldValues.fullName ? "" : "Required Field"
            temp.fullNameErr = fieldValues.fullName ? false : true
        }
        if ('email' in fieldValues){//check email field
            if(fieldValues.email !== ""){//check if valid email
                temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
                temp.emailErr = (/$^|.+@.+..+/).test(fieldValues.email) ? false : true
            }
            else{//check if field is empty
                temp.email = fieldValues.email ? "" : "Required Field"
                temp.emailErr = fieldValues.email ? false : true
            }
        }
        if ('subject' in fieldValues){//check subject field
            temp.subject = fieldValues.subject ? "" : "Required Field"
            temp.subjectErr = fieldValues.subject ? false : true
        }
        if ('message' in fieldValues){//check message field
            temp.message = fieldValues.message ? "" : "Required Field"
            temp.messageErr = fieldValues.message ? false : true
        }
        setErrors({//store error messages and validations
            ...temp
        })
    }

    //send email using emailjs
    function sendEmail(e) {
        if(!errors.fullNameErr && !errors.emailErr && !errors.subjectErr && !errors.messageErr && values.fullName && values.email && values.subject && values.message){
            e.preventDefault();

            emailjs.sendForm('service_bdh7208', 'portfolio_contact', e.target, 'user_M4KKvmjTA3L1SEAJGv45v')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
            });

            setValues(initialValues);//clearForm
            setErrors({});//clearErrors
            setModalOpen(true)//opens success modal
        }
        else{
            e.preventDefault();
            setModalTwoOpen(true)//opens unsuccess modal
        }
    }

    return(
        <div className="Contact">
            <Helmet><title>Efrain Guerra | Contact</title></Helmet>
            <div className="Contact-Header">
                <Nav/>
            </div>
            <div className="Contact-Body">
                <form className={classes.root} onSubmit={sendEmail}>
                    <Paper className={classes.paper} elevation={9}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <img className="contact-envelope" src={envelopeImg} alt="envelope"/>
                                <h1 className="contact-body-title">Contact Me</h1>
                                <TextField 
                                    variant="outlined" 
                                    label="Full Name" 
                                    name="fullName" 
                                    value={values.fullName} 
                                    onChange={handleChange} 
                                    error={errors.fullNameErr} 
                                    helperText={errors.fullName}
                                />
                                <TextField 
                                    variant="outlined" 
                                    label="Email" 
                                    name="email" 
                                    value={values.email} 
                                    onChange={handleChange}
                                    error={errors.emailErr} 
                                    helperText={errors.email}
                                />
                                <TextField 
                                    variant="outlined" 
                                    label="Subject" 
                                    name="subject" 
                                    value={values.subject} 
                                    onChange={handleChange}
                                    error={errors.subjectErr} 
                                    helperText={errors.subject}
                                />
                                <TextField 
                                    multiline rows={3} 
                                    variant="outlined" 
                                    label="message" 
                                    name="message" 
                                    value={values.message} 
                                    onChange={handleChange}
                                    error={errors.messageErr} 
                                    helperText={errors.message}
                                />
                                <Button 
                                    variant="contained" 
                                    className={classes.button} 
                                    endIcon={<SendRoundedIcon/>} 
                                    type="submit" 
                                    value="Send">
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
               </form>
               <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}
                    style={{
                    overlay: {backgroundColor: 'rgba(48, 48, 48, 0.75)', zIndex: '1'},
                    content: {
                        width: '30%',
                        height: '40%',
                        margin: 'auto',
                        border: '1px solid #ccc',
                        background: '#f5f8ff',
                        overflow: 'auto',
                        //WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '30px'
                    }
                    }}>
                    <div style={{textAlign: 'center'}}>
                        <img style={{width: '20%', height: '20%'}} src={sentImg} alt="Green Checkmark"/>
                    </div>
                    <h2 className="modalHeader" style={{textAlign: 'center'}}>THANK YOU</h2>
                        <p className="modalBodyA" style={{textAlign: 'center'}}>
                            your message has been sent
                        </p>
                    <div style={{textAlign: 'center'}}>
                        <Button variant="contained" className={classes.button} endIcon={<CloseRoundedIcon/>} onClick={() => setModalOpen(false)}>Close</Button>
                    </div>
                </Modal>
                <Modal isOpen={modalTwoOpen} onRequestClose={() => setModalTwoOpen(false)}
                    style={{
                    overlay: {backgroundColor: 'rgba(48, 48, 48, 0.75)', zIndex: '1'},
                    content: {
                        width: '30%',
                        height: '40%',
                        margin: 'auto',
                        border: '1px solid #ccc',
                        background: '#f5f8ff',
                        overflow: 'auto',
                        //WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '30px'
                    }
                    }}>
                    <div style={{textAlign: 'center'}}>
                        <img style={{width: '20%', height: '20%'}} src={notSentImg} alt="Red Cross"/>
                    </div>
                    <h2 className="modalHeader" style={{textAlign: 'center'}}>SORRY</h2>
                        <p className="modalBodyA" style={{textAlign: 'center'}}>
                            something went wrong, make sure all fields are filled correctly.
                        </p>
                    <div style={{textAlign: 'center'}}>
                        <Button variant="contained" className={classes.button} endIcon={<CloseRoundedIcon/>} onClick={() => setModalTwoOpen(false)}>Close</Button>
                    </div>
                </Modal>
            </div>
            <div className="Contact-Footer">
                <Footer/>
            </div>
        </div>
    )
}