interface Props {}

function KeyboardAndMouseComp(props: Props) {
  const {} = props;

  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "./keyboard-mouse.png"}
        alt="controller"
        width="80%"
      />
    </div>
  );
}

export default KeyboardAndMouseComp;
