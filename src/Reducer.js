export const initialState = {
    basket: [],
    user: null,
    userInfo: null
}

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price+amount, 0);

function reducer(state, action){ 
    switch(action.type){
        case "SET_USER_INFO":
            return{
                ...state,
                userInfo: action.userinfo
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "ADD_TO_BASKET":
            //Logic to add items to basket
            return {
                ...state,
                basket: [ ...state.basket, action.item] 
            }
            case "LOAD_BASKET":
                //Logic to load items to basket
                return {
                    ...state,
                    basket: action.basketProductsList 
                }
            case "EMPTY_BASKET":
                //Logic to empty items to basket
                return {
                    ...state,
                    basket: action.basketProductsList 
                }
        case "REMOVE_FROM_BASKET":
            //Logic to removing items from basket

            //we clone the basket
            let newBasket = state.basket

            //search index of the item we are looking for
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            if(index >= 0){
                //item exist in basket, remove it
                newBasket.splice(index, 1);
            }else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as it is no longer in the basket`
                );
            }

            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }
}
export default  reducer;
