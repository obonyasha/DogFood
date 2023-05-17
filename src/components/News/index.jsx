import { useState, useEffect, useContext } from "react";
import Ctx from "../../context";
import "./style.css"

const News = () => {
    const { news } = useContext(Ctx);
    const [data, setData] = useState(news || []);
    useEffect(() => {
        // if (data.length) {
            const id = setTimeout(() => {
                let updArr = [...data];
                let firstNew = updArr.shift();
                updArr.push(firstNew);
                setData(updArr);
            }, 2000)
            return () => clearTimeout(id);
        // } else {
        //     setData(news.slice(0, 4))
        // }
    }, [data])

    useEffect(() => {
        setData(news)
    }, [news])

    return (

        <div>
            <h2>Новости Lenta.ru</h2>
            <div className="news__block">
                {data.slice(0, 5).map((el, i) => <img
                    key={i}
                    src={el.urlToImage}
                    alt="el.title" />)}
            </div>
        </div>
    )
}

export default News;