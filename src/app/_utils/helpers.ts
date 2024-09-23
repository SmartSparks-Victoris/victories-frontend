export function formatPhoneNumber(phoneNumber: string) {
  const digits = phoneNumber.replace(/\D/g, '');

  if (digits.length === 10) {
    return '20' + digits.slice(1);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    return '20' + digits.slice(1);
  } else if (digits.length === 12 && digits.startsWith('20')) {
    return digits;
  } else {
    throw new Error('Invalid phone number format');
  }
}

export function convertToDateString(datetimeString) {
  const date = new Date(datetimeString);

  if (isNaN(date)) {
    throw new Error('Invalid datetime format');
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function convertToChatTime(datetimeString) {
  const date = new Date(datetimeString);

  if (isNaN(date)) {
    throw new Error('Invalid datetime format');
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12; // Convert to 12-hour format
  hours = hours ? String(hours).padStart(2, '0') : '12'; // Hour '0' should be '12'

  return `${year}-${month}-${day} @ ${hours}:${minutes} ${ampm}`;
}

