import avatar from "./assets/img/avatar.png";
import location from "./assets/img/location.svg";
import link from "./assets/img/link.svg";

export const UserCard = (props) => {
  const url = props.user?.blog;

  const getUserInfo = (user) => {
    if (user) {
      return (
        <div className="app-user">
          <div className="app-user_info">
            <div className="app-user_image">
              <img
                style={{ height: 75, borderRadius: "50%" }}
                src={user.avatar_url ?? avatar}
                alt=""
              />
            </div>

            <div className="app-user_data">
              <h1 className="app-user_name">
                {user.name}
                <span>@{user.login}</span>
              </h1>
              <p className="app-user_about">{user.bio}</p>
            </div>
          </div>

          <ul className="app-user_stats">
            <li className="app-user_stats-item">
              Репозитории
              <span>{user.public_repos ?? 0}</span>
            </li>
            <li className="app-user_stats-item">
              Подписчиков
              <span>{user.followers ?? 0}</span>
            </li>
            <li className="app-user_stats-item">
              Звёзд
              <span>{user.following ?? 0}</span>
            </li>
          </ul>
          <ul className="app-user_location">
            <li
              className="app-user_location-item"
              style={{ backgroundImage: `url(${location})` }}
            >
              {user.location}
            </li>
            <li
              className="app-user_location-item"
              style={{ backgroundImage: `url(${link})` }}
            >
              <a href={url}>{user.blog}</a>
            </li>
          </ul>
        </div>
      );
    }
    return <></>;
  };

  return (
    <>
      {props.loading && <div>Загрузка...</div>}
      {props.user && getUserInfo(props.user)}
    </>
  );
};
