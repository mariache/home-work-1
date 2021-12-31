import { getFirstName, getFormattedDate } from "../../utils";
import PropTypes from "prop-types";

const ProfileGreetings = ({ name, registeredAt }) => {
  return (
    <div>
      <p>
        Привет,&nbsp;
        <span style={{ fontWeight: "bold" }}>{getFirstName(name)}!</span>
      </p>
      <p>
        Дата регистрации:&nbsp;
        {getFormattedDate(registeredAt)}
      </p>
    </div>
  );
};

ProfileGreetings.propTypes = {
  name: PropTypes.string,
  registeredAt: PropTypes.instanceOf(Date),
};

export default ProfileGreetings;
