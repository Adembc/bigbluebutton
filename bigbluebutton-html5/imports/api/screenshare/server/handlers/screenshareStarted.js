import { check } from "meteor/check";
import addScreenshare from "../modifiers/addScreenshare";

export default async function handleScreenshareStarted({ body }, meetingId) {
  check(meetingId, String);
  check(body, Object);
  console.log({ body, msg: "hamndleScreenShare" });
  const result = await addScreenshare(meetingId, body);
  return result;
}
