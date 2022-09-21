import "./hometitle.css";

const HomeTitle = (props) => {
  return (
    <section>
      <h1>{props.title}</h1>
      <h3 className={props.feedback.rating <= 3.5 ? 'red' : 'green'}>
        {props.feedback.rating} from {props.feedback.reviews} reviews
      </h3>
    </section>
  );
}

export default HomeTitle;