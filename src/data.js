// function image(src, alt)
const description = `
  <p>
    Aliquam sed tincidunt rutrum, aliquam vel sem. Proin vehicula tempor enim.
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

function genImgs(id, numImgs) {
  let imgs = [];
  for (let i = 0; i < numImgs; i++) {
    imgs.push({
      src: `https://via.placeholder.com/500x500.png?text=${id}+${i + 1}`,
      alt: `TODO alt text for ${id}, pic #${i + 1}`,
    });
  }
}

export const products = {
  "0ac55dd3": {
    id: "0ac55dd3",
    title: "Connection Wristband",
    stars: 4.1,
    nrOfRatings: 51,
    images: genImgs("0ac55dd3", 6),
    description: "Descripiton for 0ac55dd3. " + description,
  },
  "26578380": {
    id: "26578380",
    title: "Curabitur a Tortor Nec Lorem Bibendum",
    stars: 3.2,
    nrOfRatings: 4,
    images: genImgs("26578380", 3),
    description: "Descripiton for 26578380. " + description,
  },
  "2dd88a1f": {
    id: "2dd88a1f",
    title: "Phasellus Sit Amet | #sodales #ipsum",
    stars: 4.8,
    nrOfRatings: 27,
    images: genImgs("2dd88a1f", 4),
    description: "Descripiton for 2dd88a1f. " + description,
  },
  "58b81ae9": {
    id: "58b81ae9",
    title: "Suspendisse vel dui tempor | semper",
    stars: 3.9,
    nrOfRatings: 14,
    images: genImgs("58b81ae9", 1),
    description: "Descripiton for 58b81ae9. " + description,
  },
  "45c07bdd": {
    id: "45c07bdd",
    title: "Morbi lobortis in justo ut dapibus",
    stars: 1.4,
    nrOfRatings: 11,
    images: genImgs("45c07bdd", 2),
    description: "Descripiton for 45c07bdd. " + description,
  },
  "6561d06e": {
    id: "6561d06e",
    title: "Erat in mollis semper",
    stars: 4.9,
    nrOfRatings: 39,
    images: genImgs("6561d06e", 5),
    description: "Descripiton for 6561d06e. " + description,
  },
};
// 9c75281bf2bd8b2e
// 73448b8241a7da1a42195c19dc20880d
// 9bb7862bcf3dc5747dee8b962e414cba
// 31c466b7e4823d4c4930bc4117054db3
