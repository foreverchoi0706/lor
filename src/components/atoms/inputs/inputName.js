import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { inputName } from "../../../../reducers/common";

const Search = () => {

    const [name, setName] = useState("");

    useEffect(() => {
        if (name) dispatch(inputName(name));
    }, [name])

    const dispatch = useDispatch();

    const hadnleChange = ({ target: { value } }) => {
        setName(value);
    }

    return <input value={name} onChange={hadnleChange} />
}

export default Search;