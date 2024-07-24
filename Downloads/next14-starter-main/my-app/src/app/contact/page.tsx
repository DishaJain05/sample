import React from 'react';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
    return (
        <div className="container2">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <h3>SVECW-Shri Vishnu Engineering College for Women</h3>
                <br />
                <p>Jawaharlal Nehru Technological University</p>
                <p>West Godavari, Andhra Pradesh,India </p>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td><strong>Admission Cell</strong></td>
                        <td>Contact Person: Dr. D Suryanarayana</td>
                        <td>Contact Number: 9949433588</td>
                        <td>Email: surya_dasika@yahoo.com</td>
                    </tr>
                    <tr>
                        <td><strong>Placement Cell</strong></td>
                        <td>Contact Person: Dr. P. Srinivasa Raju</td>
                        <td>Contact Number: 9949433561</td>
                        <td>Email: info@svecw.edu.in</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <strong>Address</strong>
                <Textarea
                    name="address"
                    rows={4} // Adjust the number of rows as needed
                    placeholder="Address"
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', marginTop: '8px' }}
                />
            </div>
            <br />
            <br />
        </div>
    );
};

export default ContactPage;
