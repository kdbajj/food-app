import React, { useEffect } from "react";

const Tag = ({tag}) => {
       
    const [colorTag, setColorTag] = React.useState("");

useEffect(() => {
  if (tag === "Vegetarian") setColorTag("#20ACA5")
  else if (tag === "Soup") setColorTag("#E15151")
    else if (tag === "Vegan") setColorTag("#03B55C")
    else if (tag === "Meat") setColorTag("#5B618A")
    else if (tag === "Salad") setColorTag("#FAC748")
    }, [tag]);

    return(
        <div className="tag" >
            <h3 style={{backgroundColor: `${colorTag}`}}>{tag}</h3>
        </div>

        
    )
};

export default Tag;