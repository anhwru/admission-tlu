import React from 'react';
import { useParams } from "react-router-dom";
import Info from "./Info";

export default function Child() {
    let { id } = useParams();

    return (
        <Info id={id}/>
    )
}