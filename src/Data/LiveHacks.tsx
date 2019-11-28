import React from "react";
import LiveHackCatalogEnum from "../Enums/LiveHackCatalogEnum";
import LiveHackType from "../Types/LiveHackType";

let idCount = 0;
function getId() {
    idCount++;
    return `LiveHack${idCount}`;
}

function getLiveHacks(type: LiveHackCatalogEnum, name: string, title: string, description = "Примечания отсутствуют", progress: any, commentsLink: string | undefined): LiveHackType {
    return {
        id: getId(),
        type,
        name,
        title,
        description,
        progress,
        commentsLink
    };
}

const LiveHacks: LiveHackType[] = [
    getLiveHacks(
        LiveHackCatalogEnum.ЛайфхакиДляСна,
        "Мелкие советы 1",
        "Советы.",
        undefined,
        (
            <div>
                1. Не можете заснуть? Не ворочайтесь с бока на бок, словно юла. Лучше встаньте с постели и займитесь
                какой-нибудь спокойной деятельностью. Например, почитайте или послушайте лаунж.
                <br/>
                <br/>
                2. Многие любят спать вместе с любимым котиком или собачкой. Но, с точки зрения здорового сна,
                это плохая идея. Можете засыпать в обнимку с Барсиком, но потом его лучше прогнать на свое
                место.
                <br/>
                <br/>
                3. Короткий послеобеденный сон – очень полезен для здоровья. Но только короткий – не более 30
                минут. Если дремать дольше, организм впадет в глубокие стадии сна – будет трудно проснуться и
                вернуться к делам.
                <br/>
                <br/>
                4. Многие держат будильник на прикроватной тумбочке (а если его роль выполняет телефон, то прямо
                под подушкой), что на самом деле является ошибкой. Постоянно следить за временем, значит быть на
                взводе. А стресс, как вы помните, равно плохой сон.
                <br/>
            </div>
        ),
        "https://vk.com/topic-189105798_40599476"
    ),
    getLiveHacks(
        LiveHackCatalogEnum.ЛайфхакиДляСна,
        "Мелкие советы 2",
        "Советы 2.",
        "Какахи",
        "Еххххххххххххххххххххх",
        "https://vk.com/topic-189105798_40599476"
    )
];

export default LiveHacks;