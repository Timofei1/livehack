import LiveHackCatalogEnum from "../Enums/LiveHackCatalogEnum";
import LiveHackType from "./LiveHackType";

type CatalogType = {
    id: string; //dataTo
    type: LiveHackCatalogEnum //Тип каталога, нужно для отсева
    name: string; // Название каталога
    icon: any; //Отображаемая иконка
    liveHacks: LiveHackType[]; //тут все лайфхаки для этого каталога
};

export default CatalogType;