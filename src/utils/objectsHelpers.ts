import {itemType} from "../redux/usersReducer";

export const updateObjectInArray = <D>(items: Array<itemType>, itemId: number, objPropName: keyof itemType, newObjProps: D) => {
    return items.map(el => el[objPropName] === itemId ? {...el, ...newObjProps} : el)
}