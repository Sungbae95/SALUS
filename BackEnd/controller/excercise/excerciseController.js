// 운동 컨트롤러
const ExcerciseModel = require("../../model/excercise/excerciseModel");
const searchExcerciseData = ExcerciseModel.excerciseData;
const mobileExcerciseData = ExcerciseModel.mobileExcerciseData;
const mobileExcerciseDataList = ExcerciseModel.mobileExcerciseDataList;
const testNow = ExcerciseModel.nowTest;
module.exports = {
  searchExcerciseData,
  mobileExcerciseData,
  mobileExcerciseDataList,
  testNow
};
