import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";

function Finance() {
  const breadCrumpData = [
    {
      name: "Finance",
      status: "active",
      link: "/finance",
    },
  ];
  return (
    <Layout activeClassName="finance" id="menu-item5" id1="menu-items5">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
        </div>
      </div>
    </Layout>
  );
}

export default Finance;
