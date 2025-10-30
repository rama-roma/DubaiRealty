export default function ServiceTable() {
  return (
    <div className="max-w-[1200px] mx-auto p-6 bg-[#272727] text-white">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#444]">
          <thead>
            <tr className="bg-[#FCD54C] text-[black]" >
              <th className="border border-[#444] p-3 text-left w-1/3  font-bold">
                # Included in the package
              </th>
              <th className="border border-[#444] p-3 text-center font-semibold">Complete management</th>
              <th className="border border-[#444] p-3 text-center font-semibold">Partial control</th>
            </tr>
          </thead>
          <tbody>
            <TableRow service="Real estate advertising" />
            <TableRow service="Search for tenants" />
            <TableRow service="Conclusion of a lease agreement" />
            <TableRow service="Getting paid" />
            <TableRow service="Key handover" />
            <TableRow service="Payment processing" />
            <TableRow service="Dealing with repair requests" />
            <TableRow service="DEWA connection (electricity/water)" />
            <TableRow service="Registration of the rental agreement Ejari" />
            <TableRow service="Separate administrator" />
            <TableRow service="Detailed inspection of the object" />
            <TableRow service="Property preparation before arrival" />
            <TableRow service="Reporting" />
            <TableRow service="Repair Request Management" />
            <TableRow service="Repair management" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableRow({ service }) {
  return (
    <tr className="hover:bg-[#333]">
      <td className="border border-[#444] p-3 font-medium">{service}</td>
      <td className="border border-[#444] p-3 text-center">
        <Checkmark />
      </td>
      <td className="border border-[#444] p-3 text-center">
        <Checkmark />
      </td>
    </tr>
  );
}

function Checkmark() {
  return (
    <span className="text-[#FCD54C] font-bold text-xl">✓</span>
  );
}