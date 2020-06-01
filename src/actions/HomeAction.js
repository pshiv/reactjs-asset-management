import { API_DATA } from '../Api/rootApi'
import { GET_ASSET_LIST, ADD_NEW_ASSET } from "../actionsTypes/HomeActionType";

export const getAssetList = () => {
  const aseetList = API_DATA.items
  const cartItm = localStorage.getItem("assetData") == null ? '[]' : localStorage.getItem("assetData")
  const cartArr = JSON.parse(cartItm)

  const newData = [...aseetList, ...cartArr]

  return {
    type: GET_ASSET_LIST,
    payload: newData
  }
}

export const addNewAsset = (param) => {

  debugger;
  const aseetList = API_DATA.items;

  const cartItm = localStorage.getItem("assetData") == null ? '[]' : localStorage.getItem("assetData")
  const cartArr = JSON.parse(cartItm)
  cartArr.push(param)
  localStorage.setItem("assetData", JSON.stringify(cartArr))
  
  const newData = [...aseetList, ...cartArr]

  return {
    type: ADD_NEW_ASSET,
    payload: newData
  }
}