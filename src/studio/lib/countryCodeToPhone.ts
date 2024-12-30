const countryCodeToPhoneNum: {
  [key: string]: string;
} = {
  us: '+12', // United States
  ca: '+1', // Canada
  bd: '+88', // Bangladesh
};

export const DEFAULT_PhoneNum = '+1';
export default countryCodeToPhoneNum;
