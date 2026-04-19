import { useState } from "react";
import API from "../api/client";
import Layout from "../components/Layout";
import Stats from "../components/Dashboard/Stats";
import UploadBox from "../components/Ingestion/UploadBox";
import ComparisonCard from "../components/Comparison/ComparisonCard";
import LegalNoticeCard from "../components/Legal/LegalNoticeCard";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [notice, setNotice] = useState("");

  const detect = async () => {
    const res = await API.get("/v1/compare");
    setData(res.data);
  };

  const legal = async () => {
    const res = await API.get("/v1/legal");
    setNotice(res.data.notice);
  };

  return (
    <Layout>
      <Stats />
      <UploadBox onDetect={detect} />
      <ComparisonCard data={data} />

      <button onClick={legal}>Generate Legal</button>
      <LegalNoticeCard notice={notice} />
    </Layout>
  );
}
