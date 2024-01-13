import { useState } from "react";
import Card from "./Card";

function CardList() {
    const [recipes, setRecipes] = useState([0, 1]);
    return (
        <div>
            <ul>
                {recipes.map((recipe) => <Card key={recipe}></Card>)}
            </ul>
        </div>
        );
}

export default CardList;