import { compose, flattenProp, lifecycle, } from 'recompose';
import Render from '../utils/RenderProps';
import { connect } from 'react-redux';
import { giveIsToastOn, giveToast } from '../state/selectors/Toast';
import { toastOff} from '../state/actions/Toast';
const mapStateToProps = (state) => {
    const isToastOn = giveIsToastOn();
    const Toast = giveToast();
    return {
        isToastOn: isToastOn(state),
        Toast: Toast(state)
    }
}
const enhance = compose(
    flattenProp('Toast'),
    lifecycle({
        componentDidMount() {
            this.timer = setTimeout(() => {
                this.props.toastOff();
                clearTimeout(this.timer);
            }, 4000);
        }
    })
)
export const ToastHoc = enhance(Render);
export default connect(mapStateToProps, {
    toastOff
})(ToastHoc);