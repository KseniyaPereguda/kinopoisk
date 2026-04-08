import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"


export const ViewMoreButton = styled(Button)(() => ({
    minWidth: "80px",
    fontWeight: "600",
    borderRadius: "20px",
    textTransform: "none",
    margin: "0 10px",
    padding: "8px 16px",
    color: "#676767",
    border: "1px solid gray",

    '&:hover': {
        backgroundColor: "#cccccc",
    },
}))