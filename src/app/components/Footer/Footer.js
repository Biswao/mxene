import social1 from "../../../../public/assets/facebook.png";
import social2 from "../../../../public/assets/instagram.png";
import social3 from "../../../../public/assets/twitter.png";
import social4 from "../../../../public/assets/linkedin.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <h4 className="text-xl font-bold mb-4">Find Us</h4>
            <p>
              DCB-401, DLF Tower,
              <br /> Bhubaneswar <br />
              Odisha, India
            </p>
          </div>
          <div className="col-lg-3 mb-4">
            <h4 className="text-xl font-bold mb-4">General Information</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Cookie Management
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4" style={{display:"flex" , alignItems:"center" , flexDirection:"column" }}>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="d-flex gap-2">
              <Link href="https://www.facebook.com/">
                <img
                  src={social1.src}
                  alt="Social Icon 1"
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
              <Link href="https://www.facebook.com/">
                <img
                  src={social2.src}
                  alt="Social Icon 2"
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
              <Link href="https://www.facebook.com/">
                <img
                  src={social3.src}
                  alt="Social Icon 3"
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
              <Link href="https://www.facebook.com/">
                <img
                  src={social4.src}
                  alt="Social Icon 4"
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} MXeneTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
