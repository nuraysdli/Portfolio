import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dropdown() {
  let baseUrl = "http://localhost:3000/users";
  const [existUser, setExistUser] = useState("");

  const getUsers = async () => {
    let { data } = await axios(baseUrl);
    let isLoginedUser = data.find((user) => user.isLogined == true);
    setExistUser(isLoginedUser);
  };

  const logOut = async () => {
    if (existUser) {
      await axios.put(`${baseUrl}/${existUser.id}`, {
        ...existUser,
        isLogined: false,
      });
    }
    setExistUser(null);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="outlined"
            {...bindTrigger(popupState)}
            startIcon={<PersonIcon />}
            style={{
              textTransform: "capitalize",
              color: "black",
              borderColor: "black",
            }}
          >
            {existUser?.username ?? "Profile"}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {existUser ? (
              <MenuItem
                onClick={() => {
                  popupState.close();
                  logOut();
                }}
              >
                <Link>Logout</Link>
              </MenuItem>
            ) : (
              <div>
                <MenuItem onClick={popupState.close}>
                  <Link to={"/register"}>Register</Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link to={"/login"}>Login</Link>
                </MenuItem>
              </div>
            )}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
