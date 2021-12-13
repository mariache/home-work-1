import ProfileGreetings from "../common/ProfileGreetings";

const Profile = ({ name, registeredAt }) => {
  return <ProfileGreetings name={name} registeredAt={registeredAt} />;
};

export default Profile;
