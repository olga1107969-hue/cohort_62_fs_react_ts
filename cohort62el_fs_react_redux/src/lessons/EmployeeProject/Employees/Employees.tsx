
import { useAppSelector } from "store/hooks";
import OutputForm from "../components/OutputForm/OutputForm";
import { PageWrapper } from "../CreateEmployee/styles"
import { v4 } from "uuid";
import { employeeSliceSelectors } from "store/redux/employeeSlice/employeeSlice";



export default function Employees() {

  const employees = useAppSelector(employeeSliceSelectors.person);

  return (
    <PageWrapper>
      {employees.map((person) => (
        <OutputForm key={v4()} person={person} />
      ))}
    </PageWrapper>
  );
}

