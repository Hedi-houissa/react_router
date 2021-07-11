import { Rate } from "antd";
import React , {useState} from "react";



const Rater = ({rating}) => {

  console.log({rating});
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = useState(1)
  

  const handleChange = (value) => {
    setValue(value );
    rating(value);
    console.log('ratejs  :  ',value);
  };

  
    return (
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={value} />
      </span>
    );
  
}

export default Rater;
