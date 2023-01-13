import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import sadCat from "../images/cat.png";
import okCat from "../images/okcat.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#bbc8bd",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
};

export default function BasicModal({ open, onClose, modalMessage, modalType }) {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalType === "error" ? "Oopsie!" : "Hurray!"}
          </Typography>
          <img
            className="error_cat"
            src={modalType === "error" ? sadCat : okCat}
            alt={`${modalType} cat`}
          ></img>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalMessage}
          </Typography>
          <Button onClick={() => onClose(false)}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
