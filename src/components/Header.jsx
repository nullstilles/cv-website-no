import { useEffect, useState } from "react";

function Header() {
    const [time, setTime] = useState("");

    useEffect(() => {
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const dateString = now.toLocaleDateString("no-NO", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });

            setTime(`${dateString} - ${timeString}`);
        }

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="site-header" role="banner">
            <div className="container header-inner">
                <div className="profile-card">
                    <img src="pic/ken.jpg" alt="Bilde av Ken Vikan" className="avatar" loading="lazy" />
                    <div className="profile-meta">
                        <h1 className="site-title">Ken Vikan</h1>
                        <p className="role">Charlottenlund Videregående — Informasjonsteknologi (VG2)</p>
                        <p className="location">Trondheim, Norge</p>
                        <p className="date-time" id="clock" aria-live="polite">{time}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
