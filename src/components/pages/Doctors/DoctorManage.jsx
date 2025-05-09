import { useState } from "react";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Layout from "../../layout/Layout";
import BasicHero from "../../heros/BasicHero";
import DoctorsTable from "../../Tables/DoctorsTable";
import { useDoctorsList } from "../../../hooks/doctors/useDoctorsList";
import { useAuth } from "../../../hooks/useAuth";
import ButtonSerchHero from "../../heros/ButtonSerchHero";
import SideModal from "../../modals/SideModal";
import Overview from "../../modals/AddDoctor/Overview";
import DoctorTimeslot from "../../modals/AddDoctor/DoctorTimeslot";
import TransparentTabs from "../../tabs/TransparentTabs";

function DoctorManage() {
  const { hospitalId } = useAuth();
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const breadCrumpData = [
    {
      name: "Doctors",
      status: "active",
      link: "/doctor-manage",
    },
  ];
  const query = searchTerm ? `name=${searchTerm}` : "";
  const { data: doctorsList, isLoading } = useDoctorsList(hospitalId, query);
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  const handleShow = () => {
    setShow(true);
  };
  const tabData = [
    { id: "add_dr_overview", title: "Overview", content: <Overview /> },
    { id: "dr_timeslot", title: "Time Slot", content: <DoctorTimeslot /> },
  ];
  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <Layout activeClassName="doctor-manage" id="menu-item4" id1="menu-items4">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <BasicHero title="Doctor Details" />
          <ButtonSerchHero
            handleShow={handleShow}
            title="All Doctors"
            handleSearchterm={handleSearch}
            buttonTitle="Add Doctor"
          />
          <DoctorsTable doctorsList={doctorsList} loading={isLoading} />
        </div>
      </div>

      <SideModal show={show} handleClose={handleCloseModal} title="Add Doctor">
        <TransparentTabs tabData={tabData} />
      </SideModal>
    </Layout>
  );
}

export default DoctorManage;
