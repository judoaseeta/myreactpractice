import React from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById('modalRoot');
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(
        this.props.children,
      this.el,
    );
  }
}
/*
const MovieListModal = ({
    CancelMovieById, 
    CancelMoviesByTitle,
    isSearching
}) => (
    <div
        className={styles.container}
    >
        <div>
            <div
                className={styles.progress}
            >
                <div
                    className={styles.inline}
                ></div>
            </div>
        </div>
        <Button
            isRed
            onClick={
                () => isSearching ? CancelMoviesByTitle(): CancelMovieById()}
        >Cancel</Button>
    </div>
);
*/
export default Modal;