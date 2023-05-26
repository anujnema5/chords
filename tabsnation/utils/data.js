// IN FUTURE DYNAMIC FETCHING WOULD BE ENABLED
const headerNavLinks = [
  { href: '/', title: 'Home' },
    { href: '/chords', title: 'Chords' },
    { href: '/category', title: 'Categories' },
    { href: '/tags', title: 'Tags' },
    { href: '/authors', title: 'Authors' },
    { href: '/about', title: 'About' },
  ]

  const featuredCategory = [
    { href: 'category/guitar-chords', title: 'guitar Chords', id : 1 },
    { href: 'category/ukulele-chords', title: 'ukulele Chords', id : 2 },
    { href: 'tag/indian-bands', title: 'Indian Bands', id : 3 },
    { href: 'tag/hindi-songs', title: 'Hindi Songs', id : 4 },
    { href: 'tag/english-songs', title: 'English Songs', id: 5 },
    { href: 'category/blogs', title: 'Blogs' },
  ]

  const details = {
    title : 'tabsnation',
    subtitle : 'A Website that eases your playing',
    desc : 'Discover the ultimate destination for guitar enthusiasts! Our website is your gateway to playing guitar chords songs. From popular hits to timeless classics, we provide a wide selection of chords and tabs for all skill levels. ',
    developer : "Anuj Nema"
  }
  
  export {headerNavLinks, featuredCategory, details}