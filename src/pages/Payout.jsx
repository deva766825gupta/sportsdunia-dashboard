import { useAuth } from "../context/AuthContext";

const Payout = () => {
  const { users, loginActivities } = useAuth();

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Total Registered Users: {users.length}</h3>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Login Activity</h3>
        <ul className="list-disc pl-5 space-y-1">
          {loginActivities.map((activity, index) => (
            <li key={index}>
              {activity.email} logged in at {activity.time}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">User Download Data</h3>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">User Email</th>
              <th className="p-2 border">Login Count</th>
              <th className="p-2 border">Downloads</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="text-center">
                <td className="p-2 border">{u.email}</td>
                <td className="p-2 border">{u.loginCount}</td>
                <td className="p-2 border">
                  {u.downloads.length > 0
                    ? u.downloads.join(", ")
                    : "No downloads yet"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payout;
