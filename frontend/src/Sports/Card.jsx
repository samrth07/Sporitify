import React, { useState } from 'react';

const Card = ({ matches }) => {
  const [activeTab, setActiveTab] = useState('Live');

  const filtered = matches.filter(
    (match) => match.status.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <div>
      <div className="flex justify-center text-xl font-semibold gap-6 mb-6">
        {['Live', 'Upcoming', 'completed'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded transition ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
        
      </div>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">No {activeTab} matches found.</p>
        ) : (
          filtered.map((match) => (
            <div key={match.id} className="bg-white p-4 rounded shadow-md">
              <h4 className="text-lg font-bold">{match.teamA} vs {match.teamB}</h4>
              <p className="text-sm text-gray-600">{match.time}</p>
              {/* <p className="text-sm text-gray-500 capitalize">Status: {match.status}</p> */}
              <p className="text-sm text-gray-500 capitalize">{match.teamA}: {match.teamAGoals}</p>
              <p className="text-sm text-gray-500 capitalize">{match.teamB}: {match.teamBGoals}</p>
              <p className="text-sm text-gray-500 capitalize">Date: {match.date}</p>
              <p className="text-sm text-gray-500 capitalize">Date: {match.startTime}</p>
            </div>
          ))
        )}
      </div>
    </div>

// teamA: String,
// teamB: String,
// winningTeam: {type: String, default:null},
// teamAGoals: {type: Number, default:0},
// teamBGoals: {type: Number, default:0},
// date: Date,
// startTime: Date,
// status: { type: String, enum: ['upcoming', 'live', 'completed'], default: 'upcoming' },
  );
};

export default Card;
