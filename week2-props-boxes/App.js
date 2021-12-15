

import Card from './Card';

function App() {     

  return(
<div className="container">
    <Card title="Title 1" subtitle="Subtitle 1" description="Hello World 1" bgColor="red" width="250px"/>
    <Card title="Title 2" subtitle="Subtitle 2" description="Hello World 2" bgColor="orange" width="250px"/>
    <Card title="Title 3" subtitle="Subtitle 3" description="Hello World 3" bgColor="yellow" width="250px"/>
    <Card title="Title 4" subtitle="Subtitle 4" description="Hello World 4" bgColor="green" width="250px"/>
</div>

  ); //end return
}
export default App;
