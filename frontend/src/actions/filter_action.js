export const CLICK_MESSAGE = "CLICK_MESSAGE";
export const OPENED_MESSAGE = "OPENED_MESSAGE";
export const CLICK_POST = "CLICK_POST";
export const REMOVE_SHOW = "REMOVE_SHOW";

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

export const clickPost = postId => {
    return {
        type: CLICK_POST,
        postId
    }
}

export const removeShow = () => {
    return {
        type: REMOVE_SHOW
    }
}