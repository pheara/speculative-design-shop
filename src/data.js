function genDescription(id) {
  return `
  <p>
    Aliquam sed tincidunt rutrum, aliquam vel sem. Description for ${id}, proin vehicula tempor enim.
    Ut dignissim at justo at vulputate. Nunc quis hendrerit elit, id ultrices
    libero. Morbi lobortis in justo ut dapibus. Sed ultricies, erat in mollis
    semper, enim nisl interdum erat, ut euismod massa ante in magna.
  </p>
  <ul>
    <li>
      Integer varius lectus vel sagittis auctor. Curabitur id tempor arcu.
    </li>
    <li>Phasellus sed consequat dolor, eget pulvinar nisl.</li>
    <li>
      Suspendisse vel dui tempor diam blandit scelerisque a ut sem. Praesent at
      sollicitudin felis. Aenean tellus nibh, faucibus ac lectus quis, tincidunt
      consectetur sem.
    </li>
    <li>
      Phasellus mi nunc, aliquam sed tincidunt rutrum, aliquam vel sem. Proin
      vehicula tempor enim. Ut dignissim at justo at vulputate. Nunc quis
      hendrerit elit, id ultrices libero. Morbi lobortis in justo ut dapibus.
      Sed ultricies, erat in mollis semper, enim nisl interdum erat, ut euismod
      massa ante in magna.
    </li>
  </ul>
  <p />
  `;
}

function genImgs(id, numImgs) {
  let imgs = [];
  for (let i = 0; i < numImgs; i++) {
    imgs.push({
      src:
        `https://via.placeholder.com/500x500.png?text=pic+` +
        `nr+${i + 1}+for+${id}`,
      alt: `TODO alt text for ${id}, pic #${i + 1}`,
    });
  }
  return imgs;
}

function genDate(daysInFuture) {
  const d = new Date(Date.now());
  d.setDate(d.getDate() + daysInFuture);
  return d;
}

const comments = [
  {
    name: "Jane Doe",
    rating: 4,
    date: genDate(-31),
    country: "Austria",
    title: "Keep the connection in those last moments",
    comment:
      "Curabitur a tortor nec lorem bibendum viverra. Phasellus sit amet sodales ipsum. Etiam non diam vel enim dapibus consectetur. Praesent nulla enim, mattis eget commodo a, ultricies vel libero. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    name: "John Miller",
    rating: 1,
    date: genDate(-14),
    country: "Germany",
    title: "Absolutely terrible!",
    comment:
      "Maecenas viverra mattis lacus, ut dictum ipsum tincidunt ac. Sed condimentum turpis vitae magna pharetra, finibus eleifend tellus dictum.",
  },
];

export const products = {
  "0ac55dd3": {
    id: "0ac55dd3",
    title: "Connection Wristband",
    stars: 4.1,
    nrOfRatings: 51,
    nrOfComments: 13,
    priceEUR: 49.9,
    images: genImgs("0ac55dd3", 6),
    description: genDescription("0ac55dd3"),
    comments: comments,
  },
  "26578380": {
    id: "26578380",
    title: "Curabitur a Tortor Nec Lorem Bibendum",
    stars: 3.2,
    nrOfRatings: 4,
    nrOfComments: 8,
    priceEUR: 29.9,
    images: genImgs("26578380", 3),
    description: genDescription("26578380"),
    comments: comments,
  },
  "2dd88a1f": {
    id: "2dd88a1f",
    title: "Phasellus Sit Amet | #sodales #ipsum",
    stars: 4.8,
    nrOfRatings: 27,
    nrOfComments: 5,
    priceEUR: 9.9,
    images: genImgs("2dd88a1f", 4),
    description: genDescription("2dd88a1f"),
    comments: comments,
  },
  "58b81ae9": {
    id: "58b81ae9",
    title: "Suspendisse vel dui tempor | semper",
    stars: 3.9,
    nrOfRatings: 14,
    nrOfComments: 13,
    priceEUR: 12,
    images: genImgs("58b81ae9", 1),
    description: genDescription("58b81ae9"),
    comments: comments,
  },
  "45c07bdd": {
    id: "45c07bdd",
    title: "Morbi lobortis in justo ut dapibus",
    stars: 1.4,
    nrOfRatings: 11,
    nrOfComments: 0,
    priceEUR: 55,
    images: genImgs("45c07bdd", 2),
    description: genDescription("45c07bdd"),
    comments: comments,
  },
  "6561d06e": {
    id: "6561d06e",
    title: "Erat in mollis semper",
    stars: 4.9,
    nrOfRatings: 39,
    nrOfComments: 3,
    priceEUR: 99,
    images: genImgs("6561d06e", 5),
    description: genDescription("6561d06e"),
    comments: comments,
  },
};
// 9c75281bf2bd8b2e
// 73448b8241a7da1a42195c19dc20880d
// 9bb7862bcf3dc5747dee8b962e414cba
// 31c466b7e4823d4c4930bc4117054db3
