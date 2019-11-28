import React from 'react';
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import CatalogType from "../../../Types/CatalogType";
import Catalogs from "../../../Data/Catalogs";
import PanelEnum from "../../../Enums/PanelEnum";
import {connect} from "react-redux";
import {setCurrentLiveHack, setCurrentCatalog} from "../../../store/actions/app";
import LiveHackType from "../../../Types/LiveHackType";

type MyProps = {
    go: any;
}
function setCurrentCatalogAndGo(props: any, catalog: CatalogType, e: any) {
    console.log("Тута", props, e, catalog);
    props.setCurrentCatalog(catalog);
    props.go(e);
}

function CatalogRender(props: MyProps) {
    console.log("CatalogRender",Catalogs);
    return  Catalogs.map((catalog: CatalogType) => {
        return (
            <Button size="xl" level="2" onClick={(e) => setCurrentCatalogAndGo(props, catalog, e)} data-to={PanelEnum.ListLiveHacks} before={<catalog.icon/>}>
                {catalog.name}
            </Button>
        );
    });
}

function mapStateToProps(state: any) {
    return {
        currentLiveHack: state.app.currentLiveHack,
        currentCatalog: state.app.currentCatalog,
        go: state.app.go
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        setCurrentCatalog: (catalog: CatalogType) => dispatch(setCurrentCatalog(catalog)),
    }
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(CatalogRender);
