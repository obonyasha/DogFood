import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Folder2, Star, Cart4, PersonCircle, BoxArrowInRight } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

const Header = ({ user, setModalActive, serverGoods, userId }) => {
    const [likeCnt, setLikeCnt] = useState(0);
    const [cardCnt, setCardCnt] = useState(0);

    useEffect(() => {
        setLikeCnt(serverGoods.filter(el => el.likes.includes(userId)).length)
    }, [serverGoods])

    const logIn = (e) => {
        e.preventDefault();
        // setUser("lk-band");
        localStorage.setItem("rockUser", "lk-band");
        // setUser("lk-band");
        // localStorage.setItem("rockUser", "lk-band");
        setModalActive(true);
    }
    return <header>
        <Logo />
        <div className="search"></div>
        <nav className="header__menu">
            {/* Если пользователь === true */}
            {user && <>
                <Link to="/catalog" title="Каталог">
                    <Folder2 />
                </Link>
                <Link to="/favorites" title="Избранное" className="badge__el">
                    <Star />
                    <span className="badge__item">{likeCnt}</span>
                </Link>
                <Link to="/" title="Корзина" className="badge__el">
                    <Cart4 />
                    <span className="badge__item">{cardCnt}</span>
                </Link>
                <Link to="/profile" title="Профиль">
                    <PersonCircle />
                </Link>
            </>}
            {!user && <a href="" onClick={logIn} title="Войти">
                <BoxArrowInRight />
            </a>}
        </nav>
    </header>
}


export default Header;