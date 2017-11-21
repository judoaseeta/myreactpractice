import { fb, fs } from '../fb';
export const addReview = async (review, imdbId) => {
    const { content, rating } = review;
        try {
            await fs.collection('reviews')
                .doc(imdbId)
                .collection('reviews_id')
                .add({
                    content: content,
                    createdAt: new Date().getTime(),
                    email: fb.auth().currentUser.email,
                    lastModified: null,
                    uid: fb.auth().currentUser.uid,
                    rating: rating
                });
            return;
        }catch(e) {
            console.log(e);
            throw new Error(e);
        }
}
export const deleteReview =  async (imdbId, reviewId) => {
    try {
        await fs.collection('reviews')
            .doc(imdbId)
            .collection('reviews_id')
            .doc(reviewId)
            .delete()
        return 'Success!';
    }catch(e) {
        throw new Error(e);   
    }
}
export const updateReview = async (updater, imdbId, reviewId) => {
    try {
        await fs.collection('reviews')
            .doc(imdbId)
            .collection('reviews_id')
            .doc(reviewId)
            .update({
                ...updater,
                lastModified: new Date().getTime()
            })
        return 'Success!';
    } catch(e) {
        throw new Error(e);   
    } 
}