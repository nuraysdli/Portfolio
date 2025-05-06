import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Person2Icon from "@mui/icons-material/Person2";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dropdown() {
  let baseUrl = "http://localhost:3000/users";

  const [existUser, setExistUser] = React.useState([]);

  const getUsers = async () => {
    let { data } = await axios.get(baseUrl);
    let isLoginedUser = data.find((user) => user.isLogined == true);
    setExistUser(isLoginedUser);
  };

  const logOut = async () => {
    if (existUser) {
      await axios.put(`${baseUrl}/${existUser.id}`, {
        ...existUser,
        isLogined: false,
      });

      setExistUser(null);
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="outlined"
            {...bindTrigger(popupState)}
            startIcon={<Person2Icon />}
            style={{ textTransform: "capitalize" }}
            size="small"
          >
            {existUser ? existUser.username : "Profile"}
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
                  <Link to={"/Register"}>Register</Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link to={"/Login"}>Login</Link>
                </MenuItem>
              </div>
            )}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
