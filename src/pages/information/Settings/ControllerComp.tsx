interface Props {}

function ControllerComp(props: Props) {
  const {} = props;

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={process.env.PUBLIC_URL + "./controller.png"}
        alt="controller"
        width="80%"
      />
    </div>
  );
}

export default ControllerComp;
