"use client"
import { Button, ButtonBase } from "@mui/material";
import { arrowForward, arrowForwardSecond, downIcon, languageIcon } from "./icons";


const handleNothing = () => { }

export const PrimaryBtn = ({ minWidth = "200px", minHeight = "62px", border = "4px solid #0F1546", onClick = handleNothing }) => {

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
        Start Now
    </Button>
};

export const SecondaryBtn = ({ minWidth = "200px", minHeight = "62px", border = "4px solid #36F9BD", onClick = handleNothing }) => {

    return <Button color='secondary' endIcon={arrowForwardSecond}
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
        Start Now
    </Button>
};

export const LoginBtn = () => {

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
        Login
    </ButtonBase>
};

export const LanguageBtn = ({ onClick = handleNothing }) => {

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
        <span>English</span>
    </Button>
};

