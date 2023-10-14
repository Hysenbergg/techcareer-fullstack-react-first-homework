import React from "react";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ImageLocationMap from "./ImageLocationMap";

function PageContent() {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <ImageLocationMap />
    </div>
  );
}

export default PageContent;
