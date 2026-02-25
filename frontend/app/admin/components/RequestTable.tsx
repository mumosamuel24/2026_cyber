import RequestRow from "./RequestRow";

interface Props {
  requests: any[];
  refresh: () => void;
}

export default function RequestTable({ requests, refresh }: Props) {
  return (
    <table className="min-w-full bg-white rounded-lg shadow-md">
      <thead>
        <tr className="bg-blue-900 text-white">
          <th className="p-3">Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Service</th>
          <th>Status</th>
          <th>Payment</th>
          <th>Attachments</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((req) => (
          <RequestRow key={req._id} request={req} refresh={refresh} />
        ))}
      </tbody>
    </table>
  );
}