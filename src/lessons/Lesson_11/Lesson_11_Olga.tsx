import React, { useState } from "react";
import axios from "axios";
import * as S from "./styles";
import Lesson_11_Anna from "./Lesson_11_Anna";
import Lesson_11_Maria from "./Lesson_11_Maria";

type University = { name: string; country: string; web_pages: string[] };

const Lesson_11_Olga: React.FC = () => {
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState<University[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getUniversities = async () => {
    setError(null);
    setLoading(true);
    setUniversities([]);
    try {
      const res = await axios.get(
        `http://universities.hipolabs.com/search?country=${encodeURIComponent(
          country.trim()
        )}`
      );
      setUniversities(Array.isArray(res.data) ? res.data.slice(0, 15) : []);
    } catch {
      setError("Some Network Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={S.container}>
      <h2 style={S.header}>Lesson 11 — Universities search</h2>

      <Lesson_11_Anna value={country} onChange={setCountry} />
      <Lesson_11_Maria onClick={getUniversities} disabled={!country.trim() || loading} />

      {loading && <p>Loading...</p>}
      {error ? (
        <p style={S.errorText}>{error}</p>
      ) : (
        <div style={S.grid}>
          {universities.map((uni, idx) => (
            <div key={idx} style={S.card}>
              <p><b>Name:</b> {uni.name}</p>
              <p><b>Country:</b> {uni.country}</p>
              {uni.web_pages?.[0] && (
                <a href={uni.web_pages[0]} target="_blank" rel="noreferrer">
                  {uni.web_pages[0]}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lesson_11_Olga;

