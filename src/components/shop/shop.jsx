import React from "react";
import { products } from "../products";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllitems } from "../products";
export default function Shop() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllPlayers() {
      const APIResponse = await fetchAllitems();
      console.log(APIResponse);
      setPlayers(APIResponse);
      console.log(players);
    }
    getAllPlayers();
  }, []);

  return (
    <div>
      {players.map((item) => {
        return (
          <div key={item.id}>
            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
