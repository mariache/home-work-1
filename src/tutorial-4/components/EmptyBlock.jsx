import React from "react";

const emptyListImg = {
  src: "https://res.cloudinary.com/dfnhxiq6j/image/upload/v1640354646/ghost_lztiyl.png",
  alt: "Ghost",
};

export const EmptyBlock = ({
  heading = "Список фраз пустой",
  secondaryText = "Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку `Сгенерировать`",
}) => {
  return (
    <div className="block empty-block">
      <img
        src={emptyListImg.src}
        width="32px"
        height="32px"
        alt={emptyListImg.alt}
      />
      <h2>{heading}</h2>
      <p>{secondaryText}</p>
    </div>
  );
};
