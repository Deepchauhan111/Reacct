import './footer.css'
import footer_logo from './Assets/footer-logo.png'
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-logo">
                    <img src={footer_logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum tenetur ipsum debitis ad dolor corrupti?</p>
                </div>
                <div className="footer-text">
                    <h3 className="footer-title">Quick Links</h3>
                    <a href="">Flight</a>
                    <a href="">Tour</a>
                    <a href="">About</a>
                    <a href="">Terms of service</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Report an issu</a>
                </div>
                <div className="footer-text">
                    <h3 className="footer-title">Contact</h3>
                    <a href="tel:6355979085">Phone:- 6355979085</a>
                    <a href="mailto:deepchauahn3262@gmail.com">Email: deepchauahn3262@gmail.com</a>
                    <a href="">Address: Junagadh, India</a>
                    <a href="">Time: Mon - Fri(9:00 to 9:00)</a>
                </div>
            </div>
        </>
    )
}

export default Footer
