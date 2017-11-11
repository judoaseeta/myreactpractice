import React from 'react';
import { Tester as MovieDetail } from '../MovieDetail';
import { mount } from 'enzyme';
import Rater from 'react-rater-plus';
import mockMovieDetail from '../../components/__test__/mockMovieDetail';
import mockMovieReviews from '../../components/__test__/mockMovieReviews';
describe('<MovieDetail /> container test', () => {
    let Wrapper;
    const mockUid = 'roy'
    const mockmatch = {
        params: {
            id: 'tt12345'
        }
    };
    const mockMovieById =  jest.fn();
    const mockAddReview =  jest.fn();
    const mockUpdateReview = jest.fn();
    const mockDeleteReview = jest.fn();
    beforeEach(()=> {
        Wrapper = mount(
            <MovieDetail
                AddMovieReview={mockAddReview}
                match={mockmatch}
                userUid={mockUid}
                MovieById={mockMovieById}
                movieDetail={mockMovieDetail}
                movieReviews={mockMovieReviews}
                UpdateMovieReview={mockUpdateReview}
                RemoveMovieReview={mockDeleteReview}
            >
                {({
                    content, 
                    id, 
                    isShowingImage, 
                    movieDetail, 
                    movieReviews, 
                    rating,
                    setRate,
                    setContent, 
                    submit,
                    toggleEdit,
                    toggleImage,
                    userUid, 
                    userReviewId
                }) =>
                    <div>
                        <form
                            onSubmit={submit}
                        >
                            <Rater 
                                rating={rating}
                                onRate={setRate}
                                total={5}
                            />
                            <input 
                                value={content}
                                onChange={setContent}
                            />
                        </form>
                        <p className="reviewId">{userReviewId}</p>
                    </div>
                }
            </MovieDetail>
        )
    });
    it('should be able to modify Rating && content and submit', () => {
        const reviewId = Wrapper.find('p').first();
        const reviewForm = Wrapper.find('form');
        const contentInput = Wrapper.find('input')
        const stars = Wrapper.find('a');
        const activeStars = stars.findWhere((star) => star.hasClass('active'));
        expect(contentInput.props().value).toEqual('');
        expect(activeStars.length).toEqual(0);
        expect(reviewId.text()).toEqual(mockMovieReviews[0].reviewId);
        const fifthStar = stars.last();
        contentInput.simulate('change', {
            target: {
                value: 'it will be updated'
            }
        });
        fifthStar.simulate('click');
        // values after simulating events;
        const contentInput2 = Wrapper.find('input');
        const stars2 = Wrapper.find('a');
        const activeStars2 = stars2.findWhere((star) => star.hasClass('active'));
        expect(contentInput2.props().value).toEqual('it will be updated');
        expect(activeStars2.length).toEqual(5);
        reviewForm.simulate('submit');
        console.log(mockUpdateReview.mock.calls);
        expect(mockUpdateReview).toHaveBeenCalled();
    });
});