import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import Render from '../utils/RenderProps';
import { giveIsSearching, giveIsQuerying, giveAuth, giveMenuOn } from '../state/selectors/App';
import { MenuOpen, MenuOff } from '../state/actions/App';
import { AuthRequest, RequestSignOut } from '../state/actions/AuthRequest';
import { CancelMovieById, CancelMoviesByTitle } from '../state/actions/ApiRequest';
const mapStateToProps = (state) => {
    const authStatus =  giveAuth();
    const isMenuOn = giveMenuOn();
    const isSearching = giveIsSearching();
    const isQuerying = giveIsQuerying();
    return {
        auth: authStatus(state),
        isMenuOn: isMenuOn(state),
        isSearching: isSearching(state),
        isQuerying: isQuerying(state),
    }
  }
export const enhancer = lifecycle({
    componentDidMount() {
    },
});
export default connect(mapStateToProps, {
    AuthRequest,
    MenuOn: MenuOpen,
    MenuOff: MenuOff,
    CancelMovieById,
    CancelMoviesByTitle,
    SignOut: RequestSignOut
})(enhancer(Render));
