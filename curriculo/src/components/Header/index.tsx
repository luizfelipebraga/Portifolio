import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="home">
                    <img
                        alt=""
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Home
                </Navbar.Brand>

                <Navbar.Brand href="quem-sou-eu">
                    <img
                        alt=""
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Quem Sou Eu
                </Navbar.Brand>

                <Navbar.Brand href="curriculo">
                    <img
                        alt=""
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Curriculo
                </Navbar.Brand>

                <Navbar.Brand href="contato">
                    <img
                        alt=""
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Contato
                </Navbar.Brand>
            </Navbar>

        </div>
    );
}

export default Header;