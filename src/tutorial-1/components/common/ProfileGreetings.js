import { getFirstName } from "../../utils";
import PropTypes from "prop-types";

const ProfileGreetings = ({ name, registeredAt }) => {
  const getFormattedDate = (dateToFormat) => {
    const copiedDate = new Date(dateToFormat);
    return copiedDate
      .toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      .slice(0, -2);
  };

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
