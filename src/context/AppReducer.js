export const totalItem = (cart) => {
    const count = cart.reduce(
        (total, product) => total + product.quantity, 0
    );
    return count;
};

export const sumTotal = (cart) => {
    return cart
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};

export const appReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            /*let product = {...action.payload.product, id: state.products.length+1 }
            console.log(product)
            return {
                ...state, products: [ ...state.products, product ]
            }*/
            if(!state.cart.find((productName) => productName.id === action.payload.id)) {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                });
            }
            let rtn = {
                ...state,
                totalItem: totalItem(state.cart),
                total: sumTotal(state.cart),
                cart: [...state.cart]
            };
            return rtn;
        case "REMOVE_ITEM":
            const newCart = state.cart.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                totalItem: totalItem(newCart),
                total: sumTotal(newCart),
                cart: [
                    ...state.cart.filter((item) => item.id !== action.payload.id)
                ]
            };
        case "INCREASE":
            const newStateCart = {
                ...state,
                cart: state.cart.map((item) => {
                    if(item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1};
                    }
                    else {
                        return item;
                    }
                })
            };
            const newState = {
                ...newStateCart,
                totalItem: totalItem(newStateCart.cart),
                total: sumTotal(newStateCart.cart)
            };
            return newState;
        case "DECREASE":
            const newCartInDecrease = {
                ...state,
                cart: state.cart.map((item) => {
                    if(item.id === action.payload.id) {
                        return{ ...item, quantity: item.quantity - 1};
                    }
                    else {
                        return item;
                    }
                })
            };
            return {
                ...newCartInDecrease,
                totalItem: totalItem(newCartInDecrease.cart),
                total: sumTotal(newCartInDecrease.cart)
            };
        case "CHECKOUT":
            return {
                cart: [],
                checkout: true,
                totalItem: 0,
                total: 0.0
            };
        case "CLEAR":
            return {
                cart: [],
                checkout: false,
                totalItem: 0,
                total: 0.0
            };
        default:
            return state;
    }
};

