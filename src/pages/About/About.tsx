import "./index.scss";

const About = () => {
  return (
    <div>
      <h1 className="title">О приложении</h1>
      <p>
        Сайт отображает фотографии и информацию о них. Сайт построен с помощью
        фреймворка React. При клике на карточку пользватель попадает на страницу
        с полной информацией о фотограции. Реализованна фильтрация по категориям
        и простая пагинация.
      </p>
    </div>
  );
};

export default About;
