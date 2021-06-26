import React from "react";

const App = (props:any) => {
  const {title} = props;
   return (
    <div className="heading">
    <h2>{title}</h2>
</div>);
};
export default App;
