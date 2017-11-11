import { fb } from '../fb';
export const signInWithEmail = async (email, password) => {
    try {
        const res =  await fb.auth().signInWithEmailAndPassword(email,password);
        return res;
    } catch(e) {
        throw new Error(e);
    }
}
export const signUpWithEmail = async (email, password) => {
    try {
        const res =  await fb.auth().createUserWithEmailAndPassword(email, password);
        return res;
    } catch(e) {
        throw new Error(e);
    }
}
export const signOut = async () => {
    try{
        await fb.auth().signOut()
    } catch(e) {
        throw new Error(e);
    }
}