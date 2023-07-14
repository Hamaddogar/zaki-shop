'use client'
export const MUIDesign = {
    textField: {
        // boxShadow: `0px 1px 0px 0px rgba(0, 0, 0, 0.02), 0px 1px 3px 0px rgba(50, 50, 93, 0.15)`,
        borderRadius: '4px',
        '& .MuiOutlinedInput-root': {
            border: '2px solid #0F1546',
            height: '50px',
            borderRadius: '100px',
            paddingRight : '3px !important',
            '&:focus': {
                boxShadow: 'none !important',
                border: '2px solid #0F1546 !important',
                outline: 'none !important',
            },
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: 'none !important',
            outline: 'none !important',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: 0,
        },
        '& .MuiInputLabel-root': {

        },
        '& input': {
            color: '#8898AA',
            paddingLeft: '20px',
            fontSize: '14px',
            // padding: '14px !important'
        }
    },
};