/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/EditOutlined";
import Info from "@material-ui/icons/Info";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import link from "dan-api/ui/link";
import styles from "./jss/cover-jss";
import { Link } from "react-router-dom";

const optionsOpt = [
  {
    label: "Редактировать",
    link: link.profile.edit,
  },
  {
    label: "Настройки",
    // TODO: Добавить ссылку на настройки
    link: "",
  },
];

const ITEM_HEIGHT = 48;

function Cover(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);
  const { classes, owner, avatar, name, desc, coverImg, buttonText, role } =
    props;

  const handleClickOpt = (event) => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  return (
    <div
      className={classes.cover}
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      <div className={classes.opt}>
        <IconButton className={classes.button} aria-label="Delete">
          <Info />
        </IconButton>

        {owner && (
          <>
            <IconButton
              aria-label="More"
              aria-owns={anchorElOpt ? "long-menu" : null}
              aria-haspopup="true"
              className={classes.button}
              onClick={handleClickOpt}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorElOpt}
              open={Boolean(anchorElOpt)}
              onClose={handleCloseOpt}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200,
                },
              }}
            >
              {optionsOpt.map((option) => (
                <MenuItem
                  key={option.label}
                  // selected={option. === 'Edit Profile'}
                  onClick={() => {
                    handleCloseOpt();
                    if (option.label == "Редактировать") {
                      window.location.href = option.link;
                    }
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </div>
      <div className={classes.content}>
        <Avatar alt={name} src={avatar} className={classes.avatar} />
        <Typography variant="h4" className={classes.name} gutterBottom>
          {name}
          {owner && (
            <EditIcon
              className={classes.verified}
              onClick={() => {
                window.location.href = "/profile/changeAvatar";
              }}
            />
          )}
        </Typography>
        <Typography
          className={
            role == "expert" && owner ? classes.blueText : classes.subheading
          }
          gutterBottom
        >
          {desc}
        </Typography>
        <Button
          className={classes.button}
          size="large"
          variant="contained"
          color="secondary"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

Cover.propTypes = {
  classes: PropTypes.object.isRequired,
  owner: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default withStyles(styles)(Cover);
