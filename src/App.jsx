import { Container } from "react-bootstrap";
import { persons } from "./utils/data";
import DatesCount from "./Components/DatesCount";
import DatesList from "./Components/DatesList";
import ActionButtons from "./Components/ActionButtons";
import { useState } from "react";

function App() {
  const [personsData, setPersonsData] = useState(persons);

  const handleDelete = () => {
    setPersonsData([]);
  };

  const handleShowData = () => {
    setPersonsData(persons);
  };

  return (
    <>
      <div className="font color-body">
        <Container className="py-5">
          <DatesCount count={personsData.length} />
          <DatesList persons={personsData} />
          <ActionButtons deleteData={handleDelete} showData={handleShowData} />
        </Container>
      </div>
    </>
  );
}

export default App;
