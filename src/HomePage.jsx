import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MarqLtoR from "./MarqLtoR";
import LocationSelector from "./LocationSelector";
import CatalogSection from "./CatalogueSection";
import Gallery from "./Gallery";
import FrenchiseDrive from "./FrenchiseDrive";
import HierearchyMod from "./HierearchyMod";
import NewsSection from "./NewsSection";
import AwardandRec from "./AwardandRec";
import Cert from "./Cert";
import CourseRegistration from "./CourseRegistration";

const HomePage = () => {
  const [seoData, setSeoData] = useState({
    title: "Noble Institute of Technology",
    metaDescription: "NOBLE INSTITUTE OF TECHNOLOGY is leading skill development Computer Institute in Assam, Providing quality education with career support. Our primary aim is to achieve good skill and knowledge among the student and give them to a right path for their destination. Our institute is established under Act,1932 Section 58&Rules 4(2)of I.P in 2019 with aim to build bridge between skill and certification.our Institute is ISO certified Institute.",
  });
  useEffect(() => {
    const fetchSeoData = async () => {
      try {
        const postPageUrl =
          "https://nobleeducation.in/noble-institute-of-technology/";
        const response = await axios.get(
          `https://nobleeducation.in/wp-json/yoast/v1/get_head?url=${encodeURIComponent(
            postPageUrl
          )}`
        );

        console.log("Response from SEO API:", response);

        if (response.status === 200) {
          const { json } = response.data;
          const { title, description } = json;

          setSeoData({
            title: title || "Default Title",
            metaDescription: description || "Default meta description",
          });
        } else {
          console.error("Error fetching SEO data. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching SEO data:", error);
      }
    };

    fetchSeoData();
  }, []);

  return (
    <HelmetProvider>
      <div className="hide-scrollbar scrollbar-hide">
        <Helmet>
          <title>{seoData.title}</title>
          <meta name="description" content={seoData.metaDescription} />
          {/* Add other meta tags as needed */}
        </Helmet>

        <MarqLtoR />
        <Gallery />
        <NewsSection />
        <div className="p-4">
          <h1 className="font-extrabold text-2xl mb-4 text-center">
            Select Location and Institute
          </h1>
          <LocationSelector />
        </div>
        <CatalogSection />
        <Cert />
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
  <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">Get a Valuable Course Now and increase your Skills ! </h2>
  <p className="text-4xl text-gray-600 text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text mb-3 pb-3">Take the first step towards a brighter future. Fill out the form to get started!</p>
  <CourseRegistration />
  <div className="text-center mt-4">
    <button className="bg-red-400 hover:bg-red-300 text-white p-2 rounded-lg">Get Started Now!</button>
  </div>
</div>
        <HierearchyMod />
        <FrenchiseDrive />
        <AwardandRec />
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
