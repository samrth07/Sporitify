import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateLive = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null); // for loading state of a specific card

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/creator/live/filter/kabaddi`);
        setMatches(res.data.matches);
      } catch (err) {
        console.error("Error fetching live matches", err);
        setMatches([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const handleInputChange = (matchId, field, value) => {
    setMatches(prev =>
      prev.map(match =>
        match._id === matchId ? { ...match, [field]: Number(value) } : match
      )
    );
  };

  const handleUpdate = async (matchId, teamAGoals, teamBGoals) => {
    setUpdatingId(matchId);
    console.log(matchId);
    try {
      await axios.put(`http://localhost:3000/creator/live/kabaddi?matchId=${matchId}`, {
        teamAGoals,
        teamBGoals
      });
      alert("Score updated successfully!");
    } catch (error) {
      console.error("Error updating match:", error);
      alert("Failed to update score");
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) return <p className="p-4 text-gray-700">Loading live football matches...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {matches.map(match => (
        <div key={match._id} className="border p-4 rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold mb-2">{match.teamA} vs {match.teamB}</h2>

          <div className="flex justify-between items-center mb-4">
            <div>
              <label className="text-sm">Score ({match.teamA}):</label>
              <input
                type="number"
                value={match.teamAGoals}
                onChange={(e) => handleInputChange(match._id, "teamAGoals", e.target.value)}
                className="border p-1 rounded w-20"
              />
            </div>

            <div>
              <label className="text-sm">Score ({match.teamB}):</label>
              <input
                type="number"
                value={match.teamBGoals}
                onChange={(e) => handleInputChange(match._id, "teamBGoals", e.target.value)}
                className="border p-1 rounded w-20"
              />
            </div>
          </div>

          <button
            onClick={() => handleUpdate(match._id, match.teamAGoals, match.teamBGoals)}
            disabled={updatingId === match._id}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {updatingId === match._id ? "Updating..." : "Update Score"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UpdateLive;
