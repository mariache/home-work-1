import React from "react";

const emptyListImg = {
  src: "https://res.cloudinary.com/dfnhxiq6j/image/upload/v1640354646/ghost_lztiyl.png",
  alt: "Ghost",
};

export const EmptyBlock = () => {
  return (
    <div className="block empty-block">
      <img
        src={emptyListImg.src}
        width="32px"
        height="32px"
        alt={emptyListImg.alt}
      />
      <h2>Список фраз пустой</h2>
      <p>
        Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку
        “Сгенерировать”
      </p>
    </div>
  );
};
