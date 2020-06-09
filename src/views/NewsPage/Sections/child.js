import React from 'react';
import { useParams } from "react-router-dom";
import Detail from "./Detail";

export default function Child() {
    let { id } = useParams();

    return (
        <Detail id={id} />
    )
}
