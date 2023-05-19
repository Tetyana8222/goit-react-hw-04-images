import errorImage from './error.png';

function ErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
}

export default ErrorView;
