// Dependencies
import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import { Route } from 'react-router-dom';
// Logic
import MovieList from './containers/MovieList';
import MovieDetail from './containers/MovieDetail';
import AuthFormComp from './components/AuthFormComp';
import Home from './components/Home';
import Modal from './components/Modal';
import MovieDetailCompo from './components/MovieDetail';
import MovieListCompo from './components/MovieListCompo';
import MovieListModal from './components/MovieListModal';
import NavButton from './components/NavButton';
import Search from './components/Search';
import Menu from './components/Menu';
import ToastCompo from './components/ToastComponent';
import AppContainer from './containers/App';
import { AuthForm } from './containers/AuthForm';
import Toast from './containers/Toast';
//
import styles from './styles/App.scss';
const App = (props) => (
  <AppContainer>
    {(props) =>
      <div className={styles.App}>
      <Modal
        switcher={props.isSearching || props.isQuerying}
      >
        <MovieListModal 
          CancelMovieById={props.CancelMovieById}
          CancelMoviesByTitle={props.CancelMoviesByTitle}
          isSearching={props.isSearching}
          isQuerying={props.isQuerying}
        />
      </Modal>
      <NavButton 
          isMenuOn={props.isMenuOn}
          MenuOn={props.MenuOn}
      />
      <Menu 
        isMenuOn={props.isMenuOn}
        isSignedIn={props.auth.isSignedIn}
        MenuOff={props.MenuOff}
        SignOut={props.SignOut}
      />
      <Toast>
        {({From, isToastOn , message, toastOff}) => 
          <ToastCompo 
            From={From}
            isToastOn={isToastOn}
            message={message}
            toastOff={toastOff}
          />
        }
      </Toast>
        <div className={styles.container}>
          <Route 
            exact
            path="/"
            component={Home}
          />
          <Route 
            path="/auth/:type"
            render={({location, history, match}) =>
              <AuthForm
                AuthRequest={props.AuthRequest}
                location={location}
                history={history}
                match={match}
              >
                {({email, location, history, match, password, values, onChange,onSubmit, type}) =>
                  <AuthFormComp 
                    type={type}
                    values={values}
                    onChange={onChange}
                    onSubmit={onSubmit}
                  /> 
                }
              </AuthForm>
            }
          />
          <Route 
            path="/detail/:id"
            render={({location, match, history}) => 
                <MovieDetail 
                  location={location}
                  match={match}
                  history={history}
                >
                  {(
                    {
                      content, 
                      deleteReview,
                      rating , 
                      isEditing,
                      isShowingImage,
                      history,
                      movieDetail, 
                      movieReviews, 
                      toggleEdit,
                      toggleImage,
                      userUid,
                      setRate,
                      setContent,
                      submit,
                      userReviewId
                    }
                  ) => 
                      <MovieDetailCompo 
                        content={content}
                        detail={movieDetail}
                        deleteReview={deleteReview}
                        isEditing={isEditing}
                        isShowingImage={isShowingImage}
                        history={history}
                        rating={rating}
                        reviews={movieReviews}
                        setContent={setContent}
                        setRate={setRate}
                        submit={submit}
                        toggleEdit={toggleEdit}
                        toggleImage={toggleImage}
                        userUid={userUid}
                        userReviewId={userReviewId}
                      />
                  }
                </MovieDetail>
            }
          />
          <Route 
            path="/movies"
            render={({location, history})=>
              <MovieList
                location={location}
                history={history}
              >
                {({
                  activeIndex, 
                  CancelMovieById,
                  CancelMoviesByTitle,
                  calcTranslateX, 
                  MovieById,
                  Movies,
                  TotalNum, 
                  keyword, 
                  title, 
                  setIndex, 
                  setKeyword, 
                  submitKeyword
                })=> {
                  if(!title) {
                    return <Search 
                      setKeyword={setKeyword}
                      submitKeyword={submitKeyword}
                    />
                  }
                  return <MovieListCompo 
                      activeIndex={activeIndex}
                      calcTranslateX={calcTranslateX}
                      CancelMovieById={CancelMovieById}
                      CancelMoviesByTitle={CancelMoviesByTitle}
                      MovieById={MovieById}
                      Movies={Movies}
                      TotalNum={TotalNum}
                      keyword={keyword}
                      title={title}
                      setIndex={setIndex}
                      setKeyword={setKeyword}
                      submitKeyword={submitKeyword}
                  />
                }}
              </MovieList>
            }
          />
        </div>
    </div>
    }
  </AppContainer>
)

export default App;
