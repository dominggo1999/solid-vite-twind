import { tw } from 'twind';

const testStyle = tw`
  h-screen
  flex
  items-center
  justify-center
  bg-red-500
`;

const App = () => {
  return (
    <div class={testStyle}>App</div>
  );
};

export default App;
