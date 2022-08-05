var conn = require("../../database/db");
const mybatisMapper = require("mybatis-mapper");
const MybatisMapper = require("mybatis-mapper");
const searchUser = async (req, res) => {
  var param = {
    rfidKey: req.params.rfidKey,
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "kiosk",
    "searchuser",
    param,
    format
  );
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    if (results.length === 0) {
      console.log("유저 데이터 없음");
    } else {
      const query2 = mybatisMapper.getStatement(
        "kiosk",
        "todayCheck",
        param,
        format
      );
      conn.query(query2, (err2, results2) => {
        if (err2) console.log(err2);
        console.log(results2);
        if (results2.length === 0) {
          console.log("출석체크 X");
          const query3 = mybatisMapper.getStatement(
            "kiosk",
            "attendanceEntry",
            param,
            format
          );
          conn.query(query3, (err3, results3) => {
            if (err3) console.log(err3);
            console.log(results3);
            const rfidKey = results[0].rfidKey;
            return res.redirect("/kiosk/daily/" + rfidKey);
          });
        } else {
          const query4 = MybatisMapper.getStatement(
            "kiosk",
            "attendanceExit",
            param,
            format
          );
          conn.query(query4, (err4, results4) => {
            if (err4) console.log(err4);
            console.log(results4);
            const rfidKey = results[0].rfidKey;
            return res.redirect("/kiosk/daily/" + rfidKey);
          });
        }
      });
    }
  });
};

//오늘 운동 데이터 받아오기
const DailyData = (req, res) => {
  var param = {
    rfidKey: req.params.rfidKey,
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement("kiosk", "DailyData", param, format);
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    return res.json(results);
  });
};

const calendarData = async (req, res) => {
  var param = {
    userid: req.params.userid,
  };
  const format = { language: "sql", indent: "" };
  const query = mybatisMapper.getStatement(
    "kiosk",
    "searchCalendarDailyData",
    param,
    format
  );
  conn.query(query, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    return res.json(results);
  });
};

module.exports = {
  DailyData,
  searchUser,
  calendarData,
};