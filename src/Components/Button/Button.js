import React from "react";
import Button from "@mui/material/Button";
import "./Button.css";

const CustomButton = ({ text, icon, downloadLink, downloadCV }) => {
  const handleClick = () => {
    if (downloadLink) {
      window.open(downloadLink, "_blank");
    }
    if (downloadCV) {
      const cvDownloadLink =
        process.env.PUBLIC_URL + "/resume_cv/Shawn_Byrne_1Page.pdf";
      window.open(cvDownloadLink, "_blank");
    }
  };

  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container"> {icon} </div> : null}
      onClick={handleClick}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
