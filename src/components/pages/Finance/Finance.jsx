import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import FinanceTabs from "../../tabs/FinanceTabs";
import Payout from '../../Finance/Payout';
import History from '../../Finance/History'
function Finance() {
  const breadCrumpData = [
    {
      name: "Finance",
      status: "active",
      link: "/finance",
    },
  ];

  const financeTab = [
  { id: "payout", title: "Payout", content: <Payout/> },
  { id: "history", title: "History", content: <History/> },
];
  return (
    <Layout activeClassName="finance" id="menu-item5" id1="menu-items5">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <FinanceTabs tabData={financeTab} />
        </div>
      </div>
    </Layout>
  );
}

export default Finance;
