import { eventChannel } from 'redux-saga';
import { fs } from '../../fb';
export function ReviewsChannel(id) {
    const channel = eventChannel(emit => {
        // it is needed to check whether it is initial load or not.
        let isInitial = false;
        let reviews = [];
        const unsubscribe = fs.collection('reviews')
                                .doc(id)
                                .collection('reviews_id')
                                .onSnapshot((shots, err )=> {
                                    // if it isn't called for initial loading..
                                    if(!isInitial) {
                                        shots.docChanges.forEach(change => {
                                            reviews.push({
                                                reviewId: change.doc.id,
                                                ...change.doc.data()
                                            });
                                        })
                                        emit({
                                            res: {
                                                type: 'initial',
                                                reviews: reviews 
                                            }
                                        });
                                        isInitial = true;
                                    } else if (isInitial) {
                                        shots.docChanges.forEach(change => {
                                            emit({
                                                res: {
                                                    type: change.type,
                                                    review: {
                                                        reviewId: change.doc.id,
                                                        ...change.doc.data()
                                                    }
                                                }
                                            })
                                        })
                                    } else if(shots.size < 1){
                                        emit({res: null, err: null})
                                    }
                                        else if(err) {
                                        emit({res: null, err: err})
                                    } 
                                })
                                return unsubscribe;
        });
    return channel
}