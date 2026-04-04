import React from "react";
import { supabase } from "../supabaseclient";

function Settings(props) {

    return (
        <>
        Hello, {props.name}
        </>
    )
}

export default Settings;