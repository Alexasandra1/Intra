import React, { createContext, useState } from 'react';

export const OrderCardContext = createContext();

export const OrderCardProvider = ({ children }) => {
    const [isOrderCardVisible, setIsOrderCardVisible] = useState(false);

    return (
        <OrderCardContext.Provider value={{ isOrderCardVisible, setIsOrderCardVisible }}>
            {children}
        </OrderCardContext.Provider>
    );
};
