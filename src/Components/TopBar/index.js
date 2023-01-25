import React from "react";
import { Container, IconButton, Image } from "./style";
import { useHistory } from "react-router-dom";
import logo from '../../Assets//img/logoSTIcompleto_branco.png';
import LogoutIcon from '@mui/icons-material/Logout';
import http from "../../Services/APIhttp.js";
import { logout } from "../../Services/auth.js";

const TopBar = () => {

    const history = useHistory();

    const desloga = () => {
        logout();
        http.defaults.headers.Authorization = undefined;
        history.goBack("/");
        window.location.reload(true)
    }


    return (
        <Container>
            <Image src={logo}></Image>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', color: "black" }}>
                <IconButton onClick={desloga}>
                    <LogoutIcon name='magnify' size={28} color='#1c408a' />
                </IconButton>

            </div>

        </Container>
    )
}

export default TopBar;