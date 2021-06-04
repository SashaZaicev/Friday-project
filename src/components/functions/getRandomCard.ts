import {CardType} from "../../api/api";

export const getRandomCard = (cards: Array<CardType>): CardType => {
    let cardsCopy = [...cards]
    let totalSum = cardsCopy.reduce((acc, card) => acc + ((6 - card.grade) ** 2), 0)
    let random = Math.random() * totalSum
    let i = 0
    let sum = 0
    while (sum < random) {
        sum += (6 - cardsCopy[i].grade) ** 2
        i++
    }
    return cardsCopy[i - 1]
}