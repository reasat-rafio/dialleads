export const pages = [
  { title: 'Landing', value: '/' },
  { title: 'Pricing', value: '/pricing' },
  { title: 'Contact', value: '/contact' },
  { title: 'Real State', value: '/industry-use-cases/real-estate' },
  { title: 'Mortgage', value: '/industry-use-cases/mortgage' },
];

export const pagesWithOutSlash = removeSlashFromArray(pages);
function removeSlashFromArray(arr: typeof pages) {
  return arr
    .map(({ value }) => value.replace(/^\//, ''))
    .filter((item) => item !== '');
}
