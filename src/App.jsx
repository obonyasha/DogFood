import Promo from "./components/Promo/Promo";
import Card from "./components/Card";
import cardsData from "./assets/data";

const sizes = ["sm", "lg", "md"];
const adds = [];

let text = "Полёты собак в космос — серия биологических экспериментов, включавших проведение исследований по возможности полётов на геофизических и космических ракетах живых существ, наблюдение за поведением высокоорганизованных животных в условиях таких полётов, а также, изучение сложных явлений в околоземном пространстве"
text = text.match(/[^\s,.]+/g);

let rand = (n) => Math.floor(Math.random() * n);

let n = 8;
while (n--) {
    adds.push({
        text: `${text[rand(text.length)]} ${text[rand(text.length)]} ${text[rand(text.length)]}`,
        pic: !Math.round(Math.random()), //!!0 => false, !!1 => true
        type: sizes[rand(sizes.length)]
    })
}

const App = () => {
    return (
        <div>
            <div className="conteiner">
                {/* <Promo text="My promo1" type="lg"/>
                <Promo text="My promo2"/>
                <Promo text="My promo3" pic={true}/>
                <Promo text="My promo4" type="sm"/>
                <Promo text="My promo5" type="sm"/> */}
                {adds.map(el => <Promo {...el} />)}
                <Card img={cardsData[0].pictures}
                    name={cardsData[0].name}
                    price={cardsData[0].price}
                />
            </div>
        </div>
    )
}

export default App;