import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const checkDigits = (time: string) => {
  return /^\d{2}$/.test(time);
};

export const verifyTime = (str: string) => {
  const currTime = str.split(":");
  if (currTime.length < 3 || !currTime.every(checkDigits)) return false;
  return true;
};

export const removeTimestamps = (filename: string) => filename.split("-")[1];

export const sanatizeDate = (timestamp: string) => {
  const date = new Date(Number(timestamp));

  const year = date.getFullYear().toString().slice(-2); // Extract the last two digits of the year
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Add leading zero to the month
  const day = ("0" + date.getDate()).slice(-2); // Add leading zero to the day

  const hours = ("0" + (date.getHours() % 12 || 12)).slice(-2); // Convert hours to 12-hour format
  const minutes = ("0" + date.getMinutes()).slice(-2); // Add leading zero to the minutes
  const period = date.getHours() >= 12 ? "pm" : "am"; // Determine AM/PM

  const formattedDate = `${day}-${month}-${year} ${hours}:${minutes} ${period}`;
  return formattedDate;
};
