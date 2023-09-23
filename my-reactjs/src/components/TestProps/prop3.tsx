import React, {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

}

const TestProps3: React.FC<ButtonProps> = (props) => {
  const {title="Click", ...rest} = props;

  return <button title={title} {...rest}>Click Me</button>
}

export default TestProps3;