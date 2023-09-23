import React from "react";

interface TestPro{
  h1Descrition : string;
}

const TestProps: React.FC<TestPro> = (props) => {
  return (
    <div>
        <h1 title="Hello">{props.h1Descrition}</h1>
    </div>
  );
}

export default TestProps;