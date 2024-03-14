export default function calculateAge(date) {
  let birthDate = new Date(date);
  let birthYear = birthDate.getFullYear();
  let birthMonth = birthDate.getMonth();
  let birthDay = birthDate.getDate();

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  let age = currentYear - birthYear;

  if (currentMonth < birthMonth) {
    age--;
  }
  else if (currentMonth === birthMonth && currentDay < birthDay) {
    age--;
  }

  return age;
}