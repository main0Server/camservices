import Typical from "react-typical";

export default function TypicalCom(props) {
  return (
    <div>
    <Typical
      loop={Infinity}
      steps={props.steps}
    />
    </div>
  )
}
