import EmployeeCard from "./employeeCard";
import employees_data from "../pages/api/employees_data";

function EmployeeGrid() {
    return <>
        <div className="m-8 grid gap-5 lg:grid-cols-5 lg:grid-rows-2 md:grid-rows-2 md:grid-cols-3 bg-light-primary px-5">
            {employees_data.map((emp) => {
                return <EmployeeCard key={emp.id} {...emp}/>;
            })}
        </div>
    </>
}

export default EmployeeGrid;