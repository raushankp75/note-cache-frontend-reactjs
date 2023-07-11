import axios from "axios";
import { NOTES_CREATE_FAIL, NOTES_CREATE_REQUEST, NOTES_CREATE_SUCCESS, NOTES_DELETE_FAIL, NOTES_DELETE_REQUEST, NOTES_DELETE_SUCCESS, NOTES_LIST_FAIL, NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS, NOTES_UPDATE_FAIL, NOTES_UPDATE_REQUEST, NOTES_UPDATE_SUCCESS } from "../constants/notesConstants";


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





export const createNoteAction = (createNotesData) => async (dispatch, getState) => {
    try {
        dispatch({ type: NOTES_CREATE_REQUEST });


        // For getting user info from state
        const { userLogin: { userInfo } } = getState();


        // Sending this to api - important
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };


        // Calling api
        const { data } = await axios.post(
            "http://localhost:8000/api/notes/create",
            createNotesData,
            config
        );

        dispatch({ type: NOTES_CREATE_SUCCESS, payload: data });

    } catch (error) {
        // const message = error.response && error.response.data.message ? error.response.data.message : error.message

        dispatch({
            type: NOTES_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};





export const updateNoteAction = (id, editNotesData) => async (dispatch, getState) => {
    try {
        dispatch({ type: NOTES_UPDATE_REQUEST });


        // For getting user info from state
        const { userLogin: { userInfo } } = getState();


        // Sending this to api - important
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };


        // Calling api
        const { data } = await axios.put(
            `http://localhost:8000/api/notes/${id}`,
            editNotesData,
            config
        );

        dispatch({ type: NOTES_UPDATE_SUCCESS, payload: data });

    } catch (error) {
        // const message = error.response && error.response.data.message ? error.response.data.message : error.message

        dispatch({
            type: NOTES_UPDATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};




export const deleteNoteAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: NOTES_DELETE_REQUEST });


        // For getting user info from state
        const { userLogin: { userInfo } } = getState();


        // Sending this to api - important
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };


        // Calling api
        const { data } = await axios.delete(
            `http://localhost:8000/api/notes/${id}`,
            config
        );

        dispatch({ type: NOTES_DELETE_SUCCESS, payload: data });

    } catch (error) {
        // const message = error.response && error.response.data.message ? error.response.data.message : error.message

        dispatch({
            type: NOTES_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};