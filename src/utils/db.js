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