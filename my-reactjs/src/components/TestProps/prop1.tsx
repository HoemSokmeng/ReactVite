import React from "react";

interface TestPro1{
  source?: string;
}

const TestProps1: React.FC<TestPro1> = (props) => {
  const { source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbSx_RKqSWf_qwuJzsf3z0WlDRSw_BCqfcA&usqp=CAU" } = props;
  return(
    <img src={source} alt="" />
  );
}

export default TestProps1;