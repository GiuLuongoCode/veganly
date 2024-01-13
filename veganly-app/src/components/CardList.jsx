import { useState } from "react";
import Card from "./Card";

function CardList() {
    const [recipes, setRecipes] = useState([0, 1, 2]);
    return (
        <div className="grid gap-4 grid-cols-3 mt-8">
            {recipes.map((recipe) => <Card key={recipe}></Card>)}
        </div>
        );
}

export default CardList;