export const CLICK_MESSAGE = "CLICK_MESSAGE";
export const OPENED_MESSAGE = "OPENED_MESSAGE";

export const clickMessage = userId => {
    return{
        type: CLICK_MESSAGE,
        userId
    }
}

export const openedMessage = () => {
    return {
        type: OPENED_MESSAGE
    }
}