import './last.css'

function Last() {
    return (
        <div id="about">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className="last">
                <h1 className="text">Why Choose us</h1>
            </div>
            <div className="last-cards">
                <div className="last-card">
                    <span class="material-symbols-outlined">
                        book_online
                    </span>
                    <h2 className="text-title">
                        Easy & Quick Booking
                    </h2>
                    <p className="text">For a quick and easy flight booking, choose a reliable travel website or app, enter your departure and arrival cities, travel dates, and passenger details. </p>
                </div>
                <div className="last-card">
                    <span class="material-symbols-outlined">
                        price_change
                    </span>
                    <h2 className="text-title">
                        Best Price gaurante
                    </h2>
                    <p className="text">A "Best Price Guarantee" ensures that if you find a lower price for the same flight elsewhere, the booking platform will match that price or offer a refund.</p>
                </div>
                <div className="last-card">
                    <span class="material-symbols-outlined">
                        support_agent
                    </span>
                    <h2 className="text-title">
                        Customer Service 24/7
                    </h2>
                    <p className="text">For 24/7 customer service, many travel booking platforms and airlines offer round-the-clock support through various channels. Look for companies that provide.</p>
                </div>
            </div>
        </div>
    )
}

export default Last
