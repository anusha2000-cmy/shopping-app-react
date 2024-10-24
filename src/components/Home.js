import React from 'react';
import { useCallback, useEffect } from 'react';
import DisplayItems from './DisplayItems';

function Home({items, setItemsList,addItemToCart}){
    
    const fetchData=useCallback(() => {
        fetch('data.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(response => response.json())
        .then(data => {
            setItemsList(data)});
      },[])
    
      useEffect(()=>{
        fetchData();
      },[fetchData])
    
    return(
        <div className="Home">
            <main className="Home-main">
                <DisplayItems
                    items={items} addItemToCart={addItemToCart}
                />
            </main>
        </div>
    );
}

export default Home;