import React from "react";

interface TestPro2{
  title: string;
  children: React.ReactNode;
  styleCss?: React.CSSProperties;
  styleTitle?: React.CSSProperties;
}

const TestProps2: React.FC<TestPro2 > = (props) => {
  const {title,  children, styleCss, styleTitle} = props;

  return(

      <div style={styleCss}>
        <h2 style={styleTitle}>{title}</h2>
        <p>{children}</p>
      </div>
    );
}

export default TestProps2;