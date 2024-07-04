const JobsItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work-icons-container">
        <a href={item.url} className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <span>
          <img
            src={`https://skillicons.dev/icons?i=${item.tools}`}
            alt="skill-icon"
          />
        </span>
      </div>
    </div>
  );
};

export default JobsItems;
