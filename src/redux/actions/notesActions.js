import axios from "axios";
import { NOTES_LIST_FAIL, NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS } from "../constants/notesConstants";


export const allNotes = () => async (dispatch, getState) => {
    try {
        dispatch({ type: NOTES_LIST_REQUEST });


        // For getting user info from state
        const { userLogin: { userInfo } } = getState();


        // Sending this to api - important
        const config = {
            headers: {
                // "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };


        // Calling api
        const { data } = await axios.get(
            "http://localhost:8000/api/notes",
            config
        );

        dispatch({ type: NOTES_LIST_SUCCESS, payload: data });

    } catch (error) {
        // const message = error.response && error.response.data.message ? error.response.data.message : error.message

        dispatch({
            type: NOTES_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};