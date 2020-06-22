import React from 'react';
import { useParams } from "react-router-dom";
import ProfilePage from "..//ProfilePage";

export default function Child() {
    let { id } = useParams();

    return (
        <ProfilePage id={id}/>
    )
}