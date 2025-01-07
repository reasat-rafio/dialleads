export const pages = [
  { title: 'Landing', value: '/' },
  { title: 'Pricing', value: '/pricing' },
  { title: 'Contact', value: '/contact' },
  { title: 'Real State', value: '/industry-use-cases/real-estate' },
];

export const pagesWithOutSlash = removeSlashFromArray(pages);
function removeSlashFromArray(arr: typeof pages) {
  return arr
    .map(({ value }) => value.replace(/^\//, ''))
    .filter((item) => item !== '');
}
