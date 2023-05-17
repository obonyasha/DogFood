import { useState, useEffect, useContext } from "react";
import Ctx from "../../context";
import "./style.css";

const Searh = ({ arr }) => {
    const {setGoods} = useContext(Ctx);
    // let text = "Corn";
    const [text, setText] = useState("");
    const [quantity, setQuantity] = useState(arr.length);

    const [count, updateCount] = useState(0);
    useEffect(() => {
        if (text) {
            let result = arr.filter(el => new RegExp(text, "i").test(el.name));
            setGoods(result);
            setQuantity(result.length);
        } else {
            setGoods(arr)
            setQuantity(arr.length);
        }
    }, [arr]);

    let n = 1;
    const click = () => {
        console.log(n++);
        updateCount(count + 1); //новое состояние
    }
    const searchByText = (event) => {
        let val = event.target.value;
        setText(val);
        // let result = arr.filter(el => el.name.toLowerCase().includes(val.toLowerCase()));
        let result = arr.filter(el => new RegExp(val, "i").test(el.name));
        setGoods(result);
        setQuantity(result.length);
        console.log(result);
    }
    return (
        <div className="search-block">
            <input type="search" className="search" value={text} onChange={searchByText} placeholder="Ищу тебя..." />
            <button onClick={click}>Тык</button>
            <hr />
            {/* <div>{text}, {n}, {count}</div> */}
            <div>По Вашему запросу «{text}» найдено {quantity} подходящих товаров</div>
        </div>
    )
}

export default Searh;