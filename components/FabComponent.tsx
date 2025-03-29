"use client";

import { useEffect, useState } from "react";
import { Facebook, Mail, MapPin, MessageSquare, MessageSquareText, Phone } from "lucide-react";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

const buttonStyles = { backgroundColor: "#2563EB" };

const FabComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openWindow = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  const navigateTo = (url: string) => {
    if (typeof window !== "undefined") {
      window.location.href = url;
    }
  };

  const actions = [
    { icon: <MapPin />, text: "Location", onClick: () => openWindow("https://maps.app.goo.gl/JrVAkoaiRVcfRfy2A") },
    { icon: <Facebook />, text: "Facebook", onClick: () => openWindow("https://www.facebook.com/AIRITCOOL/") },
    // { icon: <Mail />, text: "Email", onClick: () => navigateTo("mailto:example@example.com") },
    { icon: <Phone />, text: "Call", onClick: () => navigateTo("tel:+18136812477") },
    { icon: <MessageSquareText />, text: "SMS", onClick: () => navigateTo("sms:+18136812477") },
  ];

  return (
    isClient && (
      <Fab mainButtonStyles={buttonStyles} icon={<MessageSquare />}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    className={`rtf open`}
      >
        {actions.map(({ icon, text, onClick }, index) => (
          <Action key={index} style={buttonStyles} text={text} onClick={onClick}>
            {icon}
          </Action>
        ))}
      </Fab>
    )
  );
};

export default FabComponent;
