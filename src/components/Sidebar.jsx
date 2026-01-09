function Sidebar() {
    return (
        <aside className="sidebar" aria-label="Kontakt og referanser">
            <section className="panel contact" aria-labelledby="kontakt">
                <h2 id="kontakt">Kontakt</h2>
                <address className="contact-block">
                    <ul className="contact-list">
                        <li>Email: <a className="break" href="mailto:nullstilles@gmail.com">nullstilles@gmail.com</a></li>
                        <li>Telefon: <a href="tel:+4793270531">+47 932 70 531</a></li>
                        <li>Adresse: Saupstadringen 53A, 7078 Saupstad, Trondheim</li>
                        <li>Språk:
                            <span className="chip">Engelsk</span>
                            <span className="chip">Norsk</span>
                            <span className="chip">Thai</span>
                            <span className="chip">Laos</span>
                        </li>
                    </ul>
                </address>
            </section>

            <section className="panel references" aria-labelledby="referanser">
                <h2 id="referanser">Referanser</h2>
                <p>Tilgjengelig på forespørsel.</p>
            </section>
        </aside>
    );
}

export default Sidebar;