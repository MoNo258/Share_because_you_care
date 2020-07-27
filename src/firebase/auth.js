import {auth} from './firebase.config';

export const register = (email, password) => {
    return auth().createUserWithEmailAndPassword(email, password);
};

export const login = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password)
};