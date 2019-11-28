import ActionTypesEnum from "../enums/ActionTypesEnum";
import CatalogType from "../../Types/CatalogType";
import LiveHackType from "../../Types/LiveHackType";
import Catalogs from "../../Data/Catalogs";
import LiveHack from "../../panels/components/Livehack/LiveHack";
import LiveHacks from "../../Data/LiveHacks";

type InitialStateType = {
    catalog: CatalogType;
    liveHack: LiveHackType;
    go: any;
}

const initialState: InitialStateType = {
    catalog: Catalogs[0],
    liveHack: LiveHacks[0],
    go: (e: any) => e,
};

export default function appReducer(state = initialState, action: any) {
    switch (action.type) {
        case ActionTypesEnum.SET_CURRENT_LIVE_HACK:
            return {
                ...state, liveHack: action.liveHack
            };
        case ActionTypesEnum.SET_CURRENT_CATALOG:
            return {
                ...state, catalog: action.catalog
            };
        case ActionTypesEnum.SET_GO:
            return {
                ...state, go: action.go
            };
        default:
            return state;
    }
}