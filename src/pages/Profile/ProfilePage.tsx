import './profilePage.css'
import { useEffect, useState } from "react";
import { FavoritesMovies } from '../../ui/FavoritesMovies/FavoritesMovies'
import { SettingsAccount } from '../../ui/SettingsAccount/SettingsAccount'
import { useSearchParams } from 'react-router-dom';
import { MoviesSearch } from '../../ui/MoviesSearch/MoviesSearch';

const Profile = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [searchParams] = useSearchParams();
  const searchMovie = searchParams.get("searchMovie") || "";
  const [isVisibleText, setIsVisibleText] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => setIsVisibleText(window.innerWidth < 650);
    const handleMediaChange = (e: MediaQueryListEvent) => setIsVisibleText(e.matches);
    const mediaQuery = window.matchMedia('(max-width: 650px)');
    mediaQuery.addEventListener('change', handleMediaChange);
    handleWindowResize();
    return () => { mediaQuery.removeEventListener('change', handleMediaChange) };
  })

  return (
    <>
      {searchMovie && <MoviesSearch />}
      <div className='profile-page'>
        <h2 className='profile-title'>Мой аккаунт</h2>
        <button
          className={`profile-button button-favorites ${isVisible ? 'active' : ''}`}
          onClick={() => setIsVisible(true)}>
            <svg width="24" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" fill="white"/>
            </svg>
          {isVisibleText ? 'Избранное' : 'Избранные фильмы'}
        </button>
        <button
          className={`profile-button button-settings ${!isVisible ? 'active' : ''}`}
          onClick={() => setIsVisible(false)}>
            <svg className='profile-icon' width="24" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="white"/>
            </svg>
          {isVisibleText ? 'Настройки' : 'Настройка аккаунта'}
        </button>

        {isVisible && <FavoritesMovies />}
        {!isVisible && <SettingsAccount />}
      </div>
    </>
  )
}

export default Profile