import { compose,  withHandlers, withProps, withState, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Render from '../utils/RenderProps';
import { giveTotalNum, giveMovies } from '../state/selectors/MovieList';
import { MovieById, MoviesByTitle } from '../state/actions/ApiRequest';
const mapStateToProps = (state, props) => {
    const { title } = queryString.parse(props.location.search);
    const Movies = giveMovies();
    const TotalNum = giveTotalNum();
    return {
        Movies : Movies(state, title),
        TotalNum : TotalNum(state, title)
    }
};
// Reason why i didn't compose connect() is 
// for making a test easier. 
//withState('activeIndex', 'setActiveIndex', 0),
// excepting connect we can mock our props more easily.
export const enhancer = compose(
    withProps(props => {
        const { title } = queryString.parse(props.location.search);
        return {
            title
        }
    }),
    withState('activeIndex', 'setActiveIndex', 1),
    withStateHandlers(
        ({title}) => ({ keyword: title || ''}),
        {
            setKeyword: ({keyword}) => (e) => ({
                keyword: e.target.value
            })
        }
    ),
    lifecycle({
        componentDidMount() {
            const { Movies, MoviesByTitle, title} = this.props;
            if(title && !Movies) {
                MoviesByTitle(title);
            }
        },
    }),
    withHandlers({
        // for calculating how long should component be moved.
        calcTranslateX:({activeIndex}) => () => { 
            const fixedIndex = window.innerWidth < 1000 ? 1 : 2;
            const accountWidth = () => {
                if(window.innerWidth < 1000)  {
                    return 150;
                } 
                return 180;
            }
            const accountGutter = window.innerWidth < 1000 ? 10 : 20;
            const diff = fixedIndex - activeIndex;
        
            return diff * (accountWidth() + accountGutter);
        },
        setIndex: ({activeIndex, Movies, MoviesByTitle, setActiveIndex, title, TotalNum}) => value => {
            const currentPage = (Movies.length / 10);
            const totalPage = Math.floor(TotalNum / 10) + 1;
            if(Movies && (Movies.length - 1 === value) && currentPage !== totalPage) {
                MoviesByTitle(title, currentPage + 1);
            }
            setActiveIndex(value);
        },
        submitKeyword: ({List, MoviesByTitle, keyword}) => (e) => {
            if(e.keyCode === 13) {
                MoviesByTitle(keyword);
            }
            return
        }
    }),
);
export const Tester = enhancer(Render);
export default connect(mapStateToProps, {
    MovieById,
    MoviesByTitle
})(enhancer(Render)); 

