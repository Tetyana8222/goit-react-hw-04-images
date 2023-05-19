import { RotatingLines } from 'react-loader-spinner';
import { SpinnerContainer } from './Loader.styled';

function Spinner() {
  return (
    <SpinnerContainer>
      <RotatingLines
        strokeColor="#37b2d9"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </SpinnerContainer>
  );
}
export default Spinner;
