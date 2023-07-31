"use client"
import { Button, ButtonBase } from "@mui/material";
import { arrowForward, arrowForwardSecond, downIcon, languageIcon } from "./icons";


const handleNothing = () => { }

export const PrimaryBtn = ({ text, minWidth = "200px", minHeight = "62px", border = "4px solid #0F1546", onClick = handleNothing }) => {

    return <Button color='primary' endIcon={arrowForward}
        sx={{
            borderRadius: "100px",
            border: border,
            minWidth: minWidth,
            minHeight: minHeight,
            justifyContent: "space-around",
            textTransform: "capitalize",

        }}
        onClick={onClick}
    >
        {text}
    </Button>
};

export const SecondaryBtn = ({ text, minWidth = "200px", minHeight = "62px", border = "4px solid #36F9BD", onClick = handleNothing }) => {

    return <Button color='secondary' endIcon={arrowForwardSecond}
        sx={{
            borderRadius: "100px",
            border: border,
            minWidth: minWidth,
            minHeight: minHeight,
            alignItems:'center',
            justifyContent: "space-around",
            textTransform: "capitalize",
            // '& .MuiButton-endIcon': {
            //     display: 'inline-block',
            //     visibility:'visible',
            //     width:'28px',
            //     height:'28px',
            //     paddingTop:'3px',
            //     position:'relative',
            // },
            // '&:hover': {
            //     '& .MuiButton-endIcon': {
            //         '& svg':{
            //             display:'none'
            //         }
            //     },
            // }
        }}
        onClick={onClick}
    >
        {text}h
    </Button>
};

export const LoginBtn = ({ text }) => {

    return <ButtonBase color='secondary'
        sx={{
            width: { xs: '91px', lg: "123px" },
            height: { xs: '42px', lg: "56px" },
            flexShrink: "0",
            fontSize: { xs: '13px', lg: "18px" },
            borderRadius: "100px",
            background: "#1BFCB6",
            textTransform: "capitalize",
        }}
    // onClick={onClick}
    >
        {text}
    </ButtonBase>
};

export const LanguageBtn = ({ onClick = handleNothing, text }) => {

    return <Button
        startIcon={languageIcon}
        endIcon={downIcon}
        onClick={onClick}
        sx={{
            width: { xs: '115px', lg: "147px" },
            height: { xs: '42px', lg: "56px" },
            flexShrink: "0",
            borderRadius: "100px",
            // background: "#1BFCB6",
            border: '1px solid #FFF',
            borderRadius: '100px',
            '& span': {
                fontSize: { xs: '13px', lg: "18px" },
                textTransform: "capitalize",
                color: '#FFFFFF'
            }
        }}
    >
        <span>{text}</span>
    </Button>
};



export const ISOANDBTN = ({ icon, text }) => <ButtonBase disableRipple
    sx={{
        width: { xs: '145px', md: '180px' },
        height: { xs: '48px', md: '60px' },
        borderRadius: '30px',
        background: '#0F1546',
        color: '#FFFFFF',
    }}
>
    <span style={{ color: '#FFFFFF' }}>{icon}</span> &nbsp; &nbsp; {text}
</ButtonBase>

// INNER NAV
export const InnerLogin = ({ children }) => <ButtonBase disableRipple color='secondary'
    sx={{
        width: '158px',
        height: '56px',
        borderRadius: '100px',
        background: '#1BFCB6',
        color: '#0F1546',
    }}
>
    {children}
</ButtonBase >

export const InnerSignUp = ({ children }) => <ButtonBase disableRipple color='primary'
    sx={{
        width: '158px',
        height: '56px',
        borderRadius: '100px',
        background: '#0F1546',
        color: '#1BFCB6',
    }}
>
    {children}
</ButtonBase >

const normalStyle = {
    borderRadius: "100px",
    maxWidth: "340px",
    maxHeight: "82px",
    borderRadius: "100px",
    border: { xs: "2px solid #0F1546", md: "4px solid #0F1546" },
    justifyContent: "space-between",
    textTransform: "capitalize",
    paddingLeft: { xs: "32px", md: "40px" },
    paddingRight: { xs: "32px", md: "40px" },
    color: "#0F1546",
    fontSize: { xs: "19px", md: "23px" },
    fontWeight: "500",
}

const activeStyle = {
    borderRadius: "100px",
    maxWidth: "340px",
    maxHeight: "82px",
    borderRadius: "100px",
    border: { xs: "2px solid #0F1546", md: "4px solid #0F1546" },
    justifyContent: "space-between",
    textTransform: "capitalize",
    paddingLeft: { xs: "32px", md: "40px" },
    paddingRight: { xs: "32px", md: "40px" },
    fontSize: { xs: "19px", md: "23px" },
    fontWeight: "500",
    color: "#75F7BB",
    background: '#0F1546',
    // '& :hover': {
    //     background: '#0F1546'
    // }
}

export const PlanButton = ({ active, endIcon, color, children, ...rest }) => (
    <Button {...rest} color={color} fullWidth sx={active ? activeStyle : normalStyle} endIcon={endIcon} >
        {children}
    </Button>)


