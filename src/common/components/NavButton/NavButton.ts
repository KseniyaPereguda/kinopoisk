import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"


export const NavButton = styled(Button)(() => ({
    minWidth: "80px",
    fontWeight: "600",
    borderRadius: "30px",
    textTransform: "none",
    margin: "0 10px",
    padding: "8px 16px",
    color: "white",
    backgroundColor: "#589df4",

    '&:hover': {
backgroundColor: "#3a7bc8",
},

'&:disabled': {
    backgroundColor: "#cccccc",
        color: "#666666",
        cursor: "not-allowed",
        pointerEvents: "auto",
        opacity: 0.7,
},
}))