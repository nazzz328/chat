import dayjs from "dayjs";
const convertEpoch = (epoch, output) => {
  if (output === "time") return dayjs.unix(epoch).format("HH:mm");
  else if (output === "date") return dayjs.unix(epoch).format("DD.MM.YYYY");
};

export default convertEpoch;
