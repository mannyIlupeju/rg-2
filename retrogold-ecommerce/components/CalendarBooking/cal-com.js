import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookAppointment() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: {
                    branding: { brandColor: "#000000" }
                }
            });
        })();
    }, []);

    
    return (
         <button className="btn"
        data-cal-link="retrogoldlifestyle/30min"
        >Book Me</button>
      
    )
}