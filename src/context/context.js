import React, { createContext, useEffect, useState,useContext } from 'react';

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart,updateCart] = useState([])
  useEffect(() => {
    async function fetchData() {
        await fetch('https://fakestoreapi.com/products')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProducts(data);
    })
}
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        products,
        cart,
        updateCart
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}