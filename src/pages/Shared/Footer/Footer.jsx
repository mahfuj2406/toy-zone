

const Footer = () => {
    return (
        <div className="bg-teal-800">
            <footer className="container  mx-auto footer p-10 md:py-10 md:px-0 bg-teal-800 text-base-content">
                <div>
                    <img src="/toyZone-2.png" alt="" height="100px" width="100px" />
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
            <div className="bg-teal-900 h-[50px] flex items-center justify-center">
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;