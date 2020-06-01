import { GET_ASSET_LIST, ADD_NEW_ASSET} from "../actionsTypes/HomeActionType";

const initState = {
    assetList: []
}

const HomeReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ASSET_LIST:
            return {
                ...state,
                assetList: action.payload
            }

        case ADD_NEW_ASSET:
            return {
                ...state,
                assetList: action.payload,
            }
        
        default:
            return state
    }
}

export default HomeReducer;