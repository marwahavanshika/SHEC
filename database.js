// db.js
import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host: "srv1113.hstgr.io",
    database: "u500566683_SilverHeights",
    user: "u500566683_Getmax",
    password: ":6wiFTt?oZ8",
  },
});
export default async function excuteQuery({ query, values=[] }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
