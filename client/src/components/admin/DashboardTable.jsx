import React ,{useState , useEffect} from 'react';
import DashboardTableRow from '@/components/admin/DashboardTableRow';
import DashboardTableHeader from '@/components/admin/DashboardTableHeader';
import { getPendingTeachers } from '@services/TeacherService';

const DashboardTable = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchPendingTeachers = async () => {
      try {
        const response = await getPendingTeachers();
        const fetchedTeachers = response.data.slice(0,3);
        if (Array.isArray(fetchedTeachers)) {
          setTeachers(fetchedTeachers);
        } else {
          setTeachers([]); 
        }
      } catch (error) {
        console.error(error);
        setTeachers([]); 
      }
    };

    fetchPendingTeachers();
  }, []);


  return (
    <div>
      <div>
      <DashboardTableHeader
            user="User"
            name="name"
            email="email"
            validationProof="validationProof"
            subjects="subjects"
          />
        {teachers.map((row) => (
          <DashboardTableRow
            key={row.userId}
            name={row.firstName}
            email={row.email}
            validationProof={row.proofRef}
            // subjects={row.subjects}
          />
        ))}
        
      </div>
      
    </div>
  );
};

export default DashboardTable;
