import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import BasicHero from "../../heros/BasicHero";
import { useAuth } from "../../../hooks/useAuth";
import { useDepartmentList } from "../../../hooks/departments/useDepartmentList";
import Department from "../../Hospitals/Departments/Department";
import DepartmentSearch from "../../Hospitals/Departments/DepartmentSearch";
import { useDebounce } from "../../../hooks/useDebounce";

function Departments() {
  const [query, setQuery] = useState("");
  const searchTerm = useDebounce(query, 500);
  const handleQuery = (searchTerm) => {
    setQuery(searchTerm);
  };
  const { hospitalId } = useAuth();
  const { data: departmentsList } = useDepartmentList(hospitalId, searchTerm);
  console.log("Search term", searchTerm);

  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/hospital/departments",
    },
    {
      name: "Departments",
      status: "active",
      link: "/hospital/departments",
    },
  ];
  return (
    <Layout
      activeClassName="hospital-departments"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <BasicHero title="Departments" />
          <DepartmentSearch handleQuery={handleQuery} />
          <Department departmentList={departmentsList ?? []} />
        </div>
      </div>
    </Layout>
  );
}

export default Departments;
