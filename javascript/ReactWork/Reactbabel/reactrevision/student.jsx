
function Student() {
  // Creating elements manually with info added
  const h1 = React.createElement('h1', {style:{fontSize:'50px'}}, 'Student Details');
  const p1 = React.createElement('p', {}, 'ID: 61');
  const p2 = React.createElement('p', {}, 'Name: bhumika');
  const p3 = React.createElement('p', {}, 'Roll No: 2300153');
  const p4 = React.createElement('p', {}, 'Branch: CSE AIML');
  const p5 = React.createElement('p', {}, 'College: ABES EC');

  // Wrapping everything in one parent <div>
  const div1 = React.createElement('div', {style:{border: '2px solid black',backgroundColor:'pink'}}, h1, p1, p2, p3, p4, p5);

  return div1;
}

// Rendering the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Student));
