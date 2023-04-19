import Promo from "./components/Promo/Promo";
import Card from "./components/Card";
import {Header, Footer} from "./components/General";
import cardsData from "./assets/data";

const sizes = ["sm", "lg", "md"];
const adds = [];

let text = "Полёты собак в космос — серия, включавших проведение исследований по возможности полётов на геофизических и космических ракетах живых существ, наблюдение за поведением животных в условиях таких полётов, а также, изучение сложных явлений в пространстве"
text = text.match(/[^\s,.]+/g);

let rand = (n) => Math.floor(Math.random() * n);

let n = 8;
while (n--) {
    adds.push({
        text: `${text[rand(text.length)].slice(0, 8)} ${text[rand(text.length)].slice(0, 8)} ${text[rand(text.length)].slice(0, 8)}`,
        pic: !Math.round(Math.random()), //!!0 => false, !!1 => true
        type: sizes[rand(sizes.length)]
    })
}

const App = () => {
    const user = localStorage.getItem("rockUser");
    return (
        <div>
            <Header user = {user} />
            <div className="conteiner">
                {/* <Promo text="My promo1" type="lg"/>
                <Promo text="My promo2"/>
                <Promo text="My promo3" pic={true}/>
                <Promo text="My promo4" type="sm"/>
                <Promo text="My promo5" type="sm"/> */}
                {/* <Card img={cardsData[0].pictures}
                    name={cardsData[0].name}
                    price={cardsData[0].price}
                /> */}
                {adds.map((el, i) => <Promo key={i} {...el} />)}
                {cardsData.map((el, i) => <Card
                    key={i}
                    img={el.pictures}
                    name={el.name}
                    price={el.price}
                />)}
                <Footer/>
            </div>
        </div>
    )
}

export default App;