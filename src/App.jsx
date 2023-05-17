import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Ctx from "./context";
// компоненты
import Searh from "./components/Search";
import { Header, Footer } from "./components/General";
import Modal from "./components/Modal";
// страницы
import Draft from "./pages/Draft";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";

const App = () => {
    // let key = "01471ec10f214525b0f0e73744a3adbf"
    const [user, setUser] = useState(localStorage.getItem("rockUser"));
    const [token, setToken] = useState(localStorage.getItem("rockToken"));
    const [userId, setUserId] = useState(localStorage.getItem("rockId"));
    const [serverGoods, setServerGoods] = useState([]); // товары из базы данных сервера
    const [goods, setGoods] = useState(serverGoods); //товары для поиска и фильтрации
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=животные&sources=lenta&apiKey=01471ec10f214525b0f0e73744a3adbf")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setNews(data.articles)
        })
    }, [])
    const [modalActive, setModalActive] = useState(false);

    // useEffect срабатывает каждый раз, когда компонент создался или перерисовался
    useEffect(() => {
        if (token) {
            fetch("https://api.react-learning.ru/products", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setServerGoods(data.products);
                    setServerGoods(data.products.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
                })
        }
    }, [token])

    useEffect(() => {
        if (!goods.length) {
            console.log("setGoods загружен")
            setGoods(serverGoods);
        }
    }, [serverGoods])

    // useEffect(() => {
    //     console.log("Modal edit");
    // }, [modalActive])

    useEffect(() => {
        console.log("Change user");
        if (user) {
            setToken(localStorage.getItem("rockToken"));
            setUserId(localStorage.getItem("rockId"))
        } else {
            setToken("");
            setUserId("")
        }
        console.log("u", user);
    }, [user])

    return (
        <Ctx.Provider value={{
            goods,
            setGoods,
            news
        }}>
            <Header
                user={user}
                setModalActive={setModalActive}
                serverGoods={serverGoods}
                userId={userId}
            />
            <main>
                <Searh arr={serverGoods} />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/catalog" element={<Catalog
                        //когда ставим лайк на товар - его нужно обновить в общем массиве с товарами (иначе лайк поставиться только в карточк, но после изменния в странице (переходе между страницами), его больше видно не будет)
                        setServerGoods={setServerGoods} />} />
                    <Route path="/draft" element={<Draft />} />
                    <Route path="/profile" element={
                        <Profile user={user} setUser={setUser} color="yellow" />
                    } />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/favorites" element={<Favorites
                        goods={goods}
                        userId={userId}
                        setServerGoods={setServerGoods} />} />
                </Routes>
            </main>
            <Footer />
            <Modal
                active={modalActive}
                setActive={setModalActive}
                setUser={setUser} />
        </Ctx.Provider>
    )
}

export default App;