import { useState } from "react";
import DataTable from "../Tables/DataTable";
import ScheduleModal from "../modals/Schedule/ScheduleModal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {formatDate} from '../configs/formatDate'
function RequestedAppointments(props) {
  const { appointments, loading } = props;
  const [show, setShow] = useState(false);
  const [requestDetails, setRequestDetails] = useState({});

  const handleSchedule = (record) => {
    const detail = {
      patientname: record?.user_details?.name,
      age: record?.user_details?.age,
      gender: record?.user_details?.gender,
      mobile: record?.user?.phone,
      isFasttag: record?.is_fast_tag,
      doctorName: record?.doctor?.name,
      doctorId:record?.doctor?.id,
    };
    setRequestDetails(detail);
    setShow(true);
  };
  const columns = [
    {
      title: "Patient Name",
      dataIndex: "",
      // sorter: (a, b) => a.patientname.length - b.patientname.length,
      render:(item,record)=><div>{record?.user_details?.name}</div>
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      // sorter: (a, b) => a.time.length - b.time.length,
      render:(item)=><div>{formatDate(item)}</div>
    },
    {
      title: "Type",
      dataIndex: "type",
      // sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Department",
      dataIndex: "department",
      // sorter: (a, b) => a.department.length - b.department.length,
      render:(item,record)=><div>{record?.user_details?.department}</div>
    },
    {
      title: "Assigned Dr",
      dataIndex: "",
      // sorter: (a, b) => a.assingned.length - b.assingned.length,
      render:(item,record)=><div>{record?.doctor?.name}</div>

    },
    {
      title: "Contact Info",
      dataIndex: "contactinfo",
      // sorter: (a, b) => a.contactinfo.length - b.contactinfo.length,
      render:(item,record)=><div>{record?.user?.phone}</div>
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (item, record) => (
        <Link
          to="?tab=requested"
          className="hospital-add-btn rounded-pill ms-md-1 text-white schedule-btn"
          // onClick={() => setShow(true)}
          onClick={() => handleSchedule(record)}
        >
          Schedule Now
        </Link>
      ),
    },
  ];
  return (
    <div className="card-box mt-3">
      <DataTable columns={columns} dataSource={appointments} loading={loading}/>
      <ScheduleModal show={show} setShow={setShow} requestDetails={requestDetails} />
    </div>
  );
}

RequestedAppointments.propTypes = {
  appointments: PropTypes.array,
  loading: PropTypes.bool,
};


export default RequestedAppointments;
