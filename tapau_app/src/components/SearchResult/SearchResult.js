import React, { useEffect, useState } from 'react';
import './SearchResult.css';
import { useParams, Link } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';
const baseUrl = "http://localhost:5050";

const SearchResult = () => {
    const [ foods, setFoods ] = useState([]);
    useEffect(() => {
		const loadFoods = async () => {
			let results = await fetch(`${baseUrl}/foods/`).then(resp => resp.json());
			setFoods(results);
		  }
	  
		  loadFoods();
	}, []);
    const { searchQuery } = useParams();
    const SearchResult = foods.filter(food => food.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <section className="food-area my-5">
            <div className="container">
                <h3 className="text-center search-res-title">Search Result</h3>
                <div className="row my-5">
                    {
                        SearchResult.map(food => <FoodItem key={food.id} food={food}></FoodItem>)
                    }
                    {
                        SearchResult.length === 0 && <h1 className="col-12 display-5 text-center">No food found!</h1>
                    }
                </div>

                <div className="text-center">
                    <Link to="/">
                        <button className="btn btn-danger">See Our All Foods</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SearchResult;