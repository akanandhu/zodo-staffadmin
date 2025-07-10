import { Link } from "react-router-dom";
import { exporticon } from "../imagepath";
import { useAuth } from "../../hooks/useAuth";
import { useExportHospitalBookings } from "../../hooks/appointments/useExportHospitalBookings";
import jsPDF from "jspdf";

function ExportHospitalAppointments() {
  const { hospitalId } = useAuth();
  console.log(hospitalId);
  const { data, isLoading } = useExportHospitalBookings(hospitalId);
  console.log(data);
    console.log(isLoading);
    
  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const lineHeight = 14;
    const margin = 40;
    const lines = data.split("\n");

    lines.forEach((line, index) => {
      doc.text(line, margin, margin + index * lineHeight);
    });

    doc.save("hex_dump.pdf");
  };

  //   useEffect(() => {
  //     handleDownload();
  //   }, [data]);

  return (
    <div className="form-group local-forms">
      <Link to className="outlined-btn form-control" onClick={handleDownload}>
        <img src={exporticon} alt="" />
        <span className="ms-2 me-2 text-primary">Export</span>
      </Link>
    </div>
  );
}

export default ExportHospitalAppointments;
