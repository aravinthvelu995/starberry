import React, { useState, useEffect } from 'react';

const ProductContext = React.createContext({
    items: [],
    isLoading: false,
    error: '',
});

export const ProductContextProvider = (props) => {
    const [items, setItems] = useState([]);
    const [error, SetError] = useState("");
    const [isLoading, SetIsLoading] = useState(false);


    useEffect(() => {
        const FetchHandler = async () => {
            SetIsLoading(true);
            try {
                const result = await fetch("https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=12", {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGIzOGQ2NDg0MmRhMDcwMjUzMjE5YyIsImlhdCI6MTYyNDk3OTcyNiwiZXhwIjoxOTQwNTU1NzI2fQ.caIkogsW9HsuTRwbO27kYOE9VYE4o8Dsi7O4PN_g1Ws`
                    }
                })
                if (!result.ok) {
                    throw new Error("Something Went Wrong!!!");
                }
                const response = await result.json();
                const transformedResponse = response.map((item) => {
                    return {
                        id: item._id,
                        urls: item.Images,
                        name: item.Area.Name,
                        bedrooms: item.Bedrooms,
                        buildingType: item.Building_Type,
                        propertyType: item.Property_Type,
                        price: item.Price,
                        description: item.Description,
                        floorArea: item.Floor_Area,
                        floorplans: item.Floor_Plans,
                        negotiator: item.Negotiator,
                        ppsqm: item.Price_Per_Sqm,
                        brochure: item.Brochure,
                    };
                });
                setItems(transformedResponse);
                SetIsLoading(false);
            } catch (error) {
                SetError(error.message);
            }
        }
        FetchHandler();
    }, []);

    const contextValue = {
        items: items,
        error: error,
        isLoading: isLoading,
    };
    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContext;