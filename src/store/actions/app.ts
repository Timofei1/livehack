import ActionTypesEnum from "../enums/ActionTypesEnum";
import LiveHackType from "../../Types/LiveHackType";
import CatalogType from "../../Types/CatalogType";

export function setCurrentLiveHack(liveHack: LiveHackType) {
    return (dispatch: any) => {
        dispatch({
            type: ActionTypesEnum.SET_CURRENT_LIVE_HACK,
            liveHack
        });
    };
}

export function setCurrentCatalog(catalog: CatalogType) {
    return (dispatch: any) => {
        dispatch({
            type: ActionTypesEnum.SET_CURRENT_CATALOG,
            catalog: catalog
        });
    };
}

export function setGo(go: any) {
    return (dispatch: any) => {
        dispatch({
            type: ActionTypesEnum.SET_GO,
            go
        });
    };
}