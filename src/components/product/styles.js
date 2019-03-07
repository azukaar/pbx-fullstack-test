import { CSS } from 'electron-css';

const container = CSS({
  width: '300px',
  margin: '20px',
});

const title = CSS({
  margin:'10px',
});

const description = CSS({
  padding:'10px',
  height: '80px',
  display: 'table-cell',
  verticalAlign: 'middle',
});

const label = (empty) => CSS({
  backgroundColor: empty ? 'white' : 'red',
  height: '20px',
  fontWeight: 'bold',
  display: 'inline-block',
  color: 'white',
  padding: '5px',
});

const image = CSS({
  textAlign: 'center',
});

const priceContainer = CSS({
  margin:'10px',
})

const price = CSS({
  fontSize: '200%',
  fontWeight: 'bold',
});


const cta = CSS({
  margin:'10px',
  display: 'block',
  padding: '10px',
  textAlign: 'center',
  border: ['4px', 'green', 'solid'],
  fontWeight: 'bold',
  '> a': {
    color: '#3b4153',
    textDecoration: 'none',
  }
});

export {
  container,
  title,
  description,
  label,
  image,
  priceContainer,
  price,
  cta,
};
