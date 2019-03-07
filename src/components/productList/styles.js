import { CSS, units } from 'electron-css';
const { px } = units;

const flexbox = CSS({
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1024px',
  margin: 'auto',
  flexWrap: 'wrap', 
});

const error = CSS({
  color: '#b74e6d',
  fontWeight: 'bold',
  textAlign: 'center',
	padding: px(10),
	backgroundColor: '#e5c3cd',
	border: [
		'#b74e6d',
		px(1),
		'solid'
  ],
});

const info = CSS({
  color: '#4a79b2',
	fontWeight: 'bold',
  textAlign: 'center',
	padding: px(10),
	backgroundColor: '#d7e4f4',
	border: [
		'#4a79b2',
		px(1),
		'solid'
  ],
});

export {
  flexbox,
  error,
  info,
};
