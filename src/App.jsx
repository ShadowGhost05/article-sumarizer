import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState(null);
  const [summary, setSummary] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const summarize = async () => {
    const options = {
      method: "GET",
      url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
      params: {
        url: text,
        lang: "en",
        engine: "2",
      },
      headers: {
        "x-rapidapi-key": "864ffb92c5mshafb6c0161e29c61p142481jsn1668e8274efd",
        "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    setSummary(response.data.summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-500 to-purple-300 text-gray-100 flex flex-col items-center justify-center p-6 space-y-12">
      <h1 className="text-6xl font-bold text-white drop-shadow-xl tracking-widest mb-10 animate-bounce">
         Article Summarizer
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-5 mb-8 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Paste the article URL here"
          className="flex-grow w-full sm:w-auto px-5 py-4 rounded-lg border-2 border-purple-300 shadow-md focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all text-lg"
          onChange={handleInput}
        />
        <button
          className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-900 hover:to-purple-700 text-white px-8 py-3 rounded-lg shadow-xl font-semibold text-lg transition-transform transform hover:scale-110"
          onClick={summarize}
        >
          Summarize
        </button>
      </div>

      <div className="w-full max-w-4xl bg-purple-100 rounded-xl shadow-2xl p-8 text-gray-800 overflow-y-auto max-h-[60vh]">
        <h2 className="text-3xl font-bold mb-6 text-purple-800 border-b-4 border-purple-600 pb-3">
          Summary
        </h2>
        <p
          className={`whitespace-pre-wrap text-lg leading-relaxed ${
            summary
              ? "text-gray-900 animate-fadeIn"
              : "text-purple-500 italic"
          }`}
        >
          {summary || "Your summarized content will appear here."}
        </p>
      </div>
    </div>
  );
}

export default App;
