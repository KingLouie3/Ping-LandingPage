import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Logo from "../components/Logo";
import Photo from "../components/Photo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faRocket } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

{
  /* <i class="fab fa-facebook"></i> */
}

export default function Home() {
  return (
    <>
      <div className="container">
        <Logo></Logo>
        <h1 className="title-soon">
          We are launching <span className="span-soon">soon!</span>
        </h1>
        <p className="w-auto font-normal text-opacity-25 text-gray mb-8">Subscribe and get notified</p>
        <div className="input-container">
          <div className="md:mr-6">
            <input
              className="border-2 border-gray-200 mb-4 h-12 rounded-full py-3 px-6 shadow-inner"
              type="text"
            ></input>
          </div>
          {/* button below */}
          <div style={{
            margin: "auto",
            marginBottom: '10em',
            }} className="bg-blue-700 md:ml-6 h-12 w-auto text-center rounded-full py-3 px-6 text-white shadow-2xl cursor-pointer">
            Notify Me
          </div>
        </div>
        <img
          src="/static/images/dashboard.png"
          width="80%"
          height="auto"
          alt=""
        />
        {/* footer is below  */}
        <Footer />
      </div>
    </>
  );
}
