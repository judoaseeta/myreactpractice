import React from 'react';
import queryString from 'query-string';
import { mount } from 'enzyme';
import { Tester as MovieList } from '../MovieList';
import mockMovies from '../../testing/mockMovies';
describe('<MovieList /> when without Lists',() => {
    let wrapper;
    const mockLocation = {
        search: "?title=king"
    };
    const mockHistory = {};
    const mockMoviesByTitle = jest.fn();
    const mockIsSearching = false;
    beforeEach(() => {
        wrapper = mount(
            <MovieList
                location={mockLocation}
                history={mockHistory}
                isSearching={mockIsSearching}
                Movies={null}
                TotalNum={null}
                MoviesByTitle={mockMoviesByTitle}
            >
                {({activeIndex, calcTranslateX, title, setIndex})=> 
                    <div>
                        <p>{title}</p>
                        <button
                            onClick={() =>setIndex(10)}
                        >{activeIndex}
                        </button>  
                        <button
                            onClick={() => calcTranslateX()}
                        >{activeIndex}
                        </button>  
                    </div>
                }
            </MovieList>
        )
    });
    afterEach(() => {
        mockMoviesByTitle.mockClear();
    })
    it('should parse location.search as title', () => {
        const title = wrapper.find('p').first().text();
        const expected = queryString.parse(mockLocation.search);
        expect(title).toEqual(expected.title);
    });
    it('should call MoviesByTitle in componentDidMount because List is empty', () => {
        expect(mockMoviesByTitle).toHaveBeenCalled();
        expect(mockMoviesByTitle).toHaveBeenCalledWith('king');
    });
});
describe('<MovieList /> with Lists',() => {
    let wrapper;
    const mockLocation = {
        search: "?title=king"
    };
    const mockHistory = {};
    const mockList = {
        movies: mockMovies,
        totalNum: 131
    }
    const mockMoviesByTitle = jest.fn();
    const mockIsSearching = false;
    beforeEach(() => {
        wrapper = mount(
            <MovieList
                location={mockLocation}
                history={mockHistory}
                isSearching={mockIsSearching}
                Movies={mockList.movies}
                TotalNum={mockList.TotalNum}
                MoviesByTitle={mockMoviesByTitle}
            >
                {({activeIndex, calcTranslateX, keyword, title, setIndex, setKeyword, submitKeyword})=> 
                    <div>
                        <p>{title}</p>
                        <button
                            onClick={() =>setIndex(9)}
                        >{activeIndex}
                        </button>  
                        <button
                            onClick={() => calcTranslateX()}
                        >{activeIndex}
                        </button>
                        <input 
                            value={keyword}
                            onChange={setKeyword}
                            onKeyPress={submitKeyword}
                        />
                    </div>
                }
            </MovieList>
        )
    });
    afterEach(() => {
        mockMoviesByTitle.mockClear();
    })
    it('should call MoviesByTitle when activeIndex === List.movies.length', () => {
        const button = wrapper.find('button').first();
        button.simulate('click');
        expect(mockMoviesByTitle).toBeCalled();
        expect(mockMoviesByTitle).toBeCalledWith('king', 2);
    });
    it('should render keyword as same as title and be able to modify', () => {
        const keyword =  wrapper.find('input').first();
        expect(keyword.props().value).toEqual('king');
        keyword.simulate('change', {
            target: {
                value: 'jane'
            }
        });
        const keyword2 =  wrapper.find('input').first()
        expect(keyword2.props().value).toEqual('jane');
        keyword2.simulate('keypress',{ keyCode: 13} );
        expect(mockMoviesByTitle).toBeCalled();
        expect(mockMoviesByTitle).toBeCalledWith('jane');
    })
});