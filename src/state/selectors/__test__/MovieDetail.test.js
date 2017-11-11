import { giveMovieDetail, giveMovieReviews } from '../MovieDetail';
import mockMovieDetail from '../../../components/__test__/mockMovieDetail';
const mockState = {
    movieDetail:{
        isQuerying: false,
        isReviewUpdating: false,
        Movies: {
            tt0076759: mockMovieDetail
        },
        Reviews: {}
    }
}
test('it should return MovieDetail', () => {
    const mockDetail = mockMovieDetail;
    const MovieDetail = giveMovieDetail();
    expect(MovieDetail(mockState, 'tt0076759')).toEqual(mockDetail);
})