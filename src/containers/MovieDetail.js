import { compose, flattenProp, lifecycle, withProps, withHandlers, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import Render from '../utils/RenderProps';
import { giveMovieDetail, giveMovieReviews, giveUid } from '../state/selectors/MovieDetail';
import { AddMovieReview, MovieById, UpdateMovieReview, RemoveMovieReview} from '../state/actions/ApiRequest';

const mapStateToProps = (state, props) => {
    const { id } = props.match.params;
    const movieDetail = giveMovieDetail();
    const reviewInfo = giveMovieReviews();
    const userUid = giveUid();
    return {
        movieDetail: movieDetail(state, id),
        reviewInfo: reviewInfo(state, id),
        userUid: userUid(state),
    }
};
export const enhancer = compose(
    flattenProp('reviewInfo'),
    withProps(({match}) => {
        return {
            id: match.params.id
        }
    }),
    withStateHandlers(({movieReviews, userUid}) => {
        return {
            rating: 0,
            content: '',
            isEditing: false,
            isShowingImage: false,
        }
    },
    {
        setRate: ({rating}) => value => ({ rating: value }),
        setContent: ({content}) => e => ({ content : e.target.value }),
        setEditFalse: ({isEditing}) => () => ({ isEditing: false}),
        toggleEdit: ({isEditing, rating, content}) => (id, userReviewContent, userReviewRating) => {
            return { 
                isEditing: !isEditing,
                content: userReviewContent ? userReviewContent : content,
                rating: userReviewRating ? userReviewRating : rating,
                
            }
        },
        toggleImage: ({isShowingImage}) => () => ({ isShowingImage: !isShowingImage }),
    }
    ),
    withHandlers({
        deleteReview: ({RemoveMovieReview, id}) => (reviewId) => {
            RemoveMovieReview(id, reviewId);
        },
        submit: ({AddMovieReview, rating, content, id, userReviewId, UpdateMovieReview, setEditFalse}) => (e)  => {
            e.preventDefault();
            if( userReviewId && rating && content) {
                UpdateMovieReview({rating, content}, id, userReviewId);
                setEditFalse();
            } else if (!userReviewId && rating && content){
                AddMovieReview({rating, content}, id);
                setEditFalse();
            }
            //console.log(rating, content);
        }
    }),
    lifecycle({
        componentDidMount() {
            const { id, movieDetail, MovieById } = this.props;
            if(id && !movieDetail) {
               MovieById(id);
            }
        },
        componentWillReceiveProps() {
            console.log(this.props);
        }
    }),
);
export const Tester = enhancer(Render);
export default connect(mapStateToProps, {
    AddMovieReview,
    MovieById,
    UpdateMovieReview,
    RemoveMovieReview
})(enhancer(Render));




