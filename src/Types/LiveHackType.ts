import LiveHackCatalogEnum from "../Enums/LiveHackCatalogEnum";

type LiveHackType = {
    type: LiveHackCatalogEnum,
    id: string, //Название панели
    commentsLink?: string, //Ссылка на комментарии
    name: string, //Название на кнопке
    title: string, //Описание лайфхака
    description: string, //Примечание
    progress: any, //Ход выполнения
};

export default LiveHackType;