'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  course: string;
}

const StudentCard: React.FC<{ student: Student }> = ({ student }) => {
    return (
        <Card className="student-card">
            <CardHeader>
                <h2>{student.name}</h2>
            </CardHeader>
            <CardContent>
                <p>Email: {student.email}</p>
                <p>Phone: {student.phone}</p>
                <p>Address: {student.address}</p>
                <p>Date of Birth: {student.dob}</p>
                <p>Course: {student.course}</p>
            </CardContent>
        </Card>
    );
};

const StudentsPage: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/students');
                setStudents(response.data);
            } catch (err) {
                console.error('Error fetching student data:', err);
                setError('Failed to fetch student data');
            }
        };

        fetchStudents();
    }, []);

    if (error) return <p>{error}</p>;
    if (!students.length) return <p>No students found</p>;

    return (
        <div className="student-container">
            <div className="student-grid">
                {students.map(student => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </div>
    );
};

export default StudentsPage;
