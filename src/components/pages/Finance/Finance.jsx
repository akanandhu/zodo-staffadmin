import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Payout from "../../Finance/Payout";
import History from "../../Finance/History";
import ButtonTabs from "../../tabs/ButtonTabs";
import { useAuth } from "../../../hooks/useAuth";
import { useHospitalAnalytics } from "../../../hooks/hospital/useHospitalAnalytics";
import FullscreenLoader from "../../loaders/FullscreenLoader";
function Finance() {
  const { hospitalId } = useAuth();
  const { data: hospitalAnalytics, isLoading } =
    useHospitalAnalytics(hospitalId);
  const breadCrumpData = [
    {
      name: "Finance",
      status: "active",
      link: "/finance",
    },
  ];
  console.log("Hospital analytics", hospitalAnalytics);
  
  const financeTab = [
    { id: "payout", title: "Payout", content: <Payout data={hospitalAnalytics}/>, link: "payout" },
    { id: "history", title: "History", content: <History />, link: "history" },
  ];
  return (
    <Layout activeClassName="finance" id="menu-item5" id1="menu-items5">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <ButtonTabs tabData={financeTab} />
          {isLoading && <FullscreenLoader />}
        </div>
      </div>
    </Layout>
  );
}

export default Finance;
