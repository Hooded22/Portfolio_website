import React, { useEffect, useState, useContext } from "react"
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { MyContext } from "./contexts"

import "../css/notificationBox.scss";

const NotificationBox = (props) => {
    const [display, setDisplay] = useState("none");
    const [opacity, setOpacity] = useState(0);
    const [notificationConfig, setNotificationConfig] = useContext(MyContext).notificationBox;

    useEffect(() => {
        const visible = notificationConfig.visible;
        if (visible) {
            setDisplay("flex");
            setTimeout(() => {
                setOpacity(1);
            }, 340);
        }
        else {
            setOpacity(0);
            setTimeout(() => {
                setDisplay("none");
            }, 340);
        }
    }, [notificationConfig])

    const ICON = props.success ? <AiFillCheckCircle size={34} color="green" /> : <AiFillCloseCircle size={34} color="red" />

    return (
        <div className="notifiBox" style={{ display, opacity }}>
            {ICON}
            <p>{props.message}</p>
        </div>
    )
}

export default NotificationBox;