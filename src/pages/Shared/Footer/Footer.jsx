

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src="../../../../public/toyZone-2.png" alt="" height="100px" width="100px"/>
                <p>ToyZone is the largest online toy marketplace.<br />Providing services since 1992</p>
            </div>
            <div>
                <span className="footer-title">Quick Links</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Find Us on</span>
                <a className="link link-hover"><i className="fa-brands fa-facebook"></i> facebook</a>
                <a className="link link-hover"><i className="fa-brands fa-twitter"></i> Twitter</a>
                <a className="link link-hover"><i className="fa-brands fa-instagram"></i> Instagram</a>
                <a className="link link-hover"><i className="fa-brands fa-youtube"></i> YouTube</a>
            </div>
            <div>
                <span className="footer-title">Contact Us</span>
                <a className="link link-hover"><i className="fa-solid fa-house"></i> DIU-hall,Ashulia,Savar,Dhaka-1216</a>
                <a className="link link-hover"><i className="fa-solid fa-envelope"></i> example@email.com</a>
                <a className="link link-hover"><i className="fa-solid fa-phone"></i> +880 16xxxxxxxxx</a>
            </div>
        </footer>
    );
};

export default Footer;