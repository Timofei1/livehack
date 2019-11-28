import React from 'react';
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import CatalogType from "../../../Types/CatalogType";
import Catalogs from "../../../Data/Catalogs";
import PanelEnum from "../../../Enums/PanelEnum";

type MyProps = {
    go: any;
}

function CatalogRender(props: MyProps) {
    console.log("CatalogRender",Catalogs);
    return  Catalogs.map((catalog: CatalogType) => {
        return (
            <Button size="xl" level="2" onClick={props.go} data-to={PanelEnum.ListLiveHacks} before={<catalog.icon/>}>
                {catalog.name}
            </Button>
        );
    });
}

export default CatalogRender;
