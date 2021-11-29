import React from "react";
import Name from "../card/Name"
import { useSelector } from "react-redux";

const NameList = () => {
    const { result } = useSelector(root => root.common);

    return <div>{
        result && result.map(item => <Name name={item} />)
    }</div>
}


export default NameList;