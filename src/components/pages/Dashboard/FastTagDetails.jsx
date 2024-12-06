import React from "react";

function FastTagDetails() {
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          {/* <FasttagRevenueHeader/> */}
          <HospitalHero tabData={tabData} />
          <HospitalsList tabData={tabData} />
        </div>
      </div>
    </Layout>
  );
}

export default FastTagDetails;
