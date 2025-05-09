import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Payout from '../../Finance/Payout';
import History from '../../Finance/History';
import ButtonTabs from "../../tabs/ButtonTabs";
function Finance() {
  const breadCrumpData = [
    {
      name: "Finance",
      status: "active",
      link: "/finance",
    },
  ];

  const financeTab = [
  { id: "payout", title: "Payout", content: <Payout/>, link:"payout" },
  { id: "history", title: "History", content: <History/>, link:"history" },
];
  return (
    <Layout activeClassName="finance" id="menu-item5" id1="menu-items5">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <ButtonTabs tabData={financeTab} />
        </div>
      </div>
    </Layout>
  );
}

export default Finance;
