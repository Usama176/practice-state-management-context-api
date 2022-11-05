import React, { createContext, useState } from "react";

// create cart context
export const Cart = createContext;

// create main context function
// take app as a childeren prop
const Context = ({ children }) => {

    // defined our state
    const [cart, setCart] = useState([]);

    return(
        // create context provider
        // pass all our states as a value prop
        <Cart.Provider value={{ cart, setCart }}>
            {/* now child meanse our app has access to the value prop which contains all the states  */}
            {children}
        </Cart.Provider>
    );
};

export default Context;