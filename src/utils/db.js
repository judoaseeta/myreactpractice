import { fs } from '../fb';

export const requestReviews = async (id) => {
    let reviews = [];
    try {
        const shots = await fs.collection('reviews').doc(id).collection('reviews_id').get()
        shots.forEach(shot => {
            reviews.push({
                reviewId: shot.id,
                ...shot.data()
            });
        });
        return reviews;  
    } catch(e) {
        throw new Error(e);
    }
}
export const requestLikes = async (id) => {
    try {
        const [ counts, ] = await Promise.all([
            fs.collection('movieslikes').doc(id).get(),
            fs.collection('userlikes').doc()
        ])
        const likes = await fs.collection('likes').doc(id).get();
        if(likes.exists) {
            return {
                likeId: likes.id,
                counts: likes.data().counts
            }
        }
        return null;
    } catch(e) {
        throw new Error(e); 
    }
}