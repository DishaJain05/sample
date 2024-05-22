'use client';
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component available

const BranchesPage = () => {
    const [selectedBranch, setSelectedBranch] = useState('Hyderabad');

    const handleBranchClick = (branch: string) => {
        setSelectedBranch(branch);
    };
    

    return (
        <div className="branches-page">
            <h1>Branches</h1>
            <div className="content">
                <div className="sidebar">
                    <Button onClick={() => handleBranchClick('Hyderabad')} className={selectedBranch === 'Hyderabad' ? 'active' : ''}>Hyderabad</Button>
                    <Button onClick={() => handleBranchClick('Bhimavaram')} className={selectedBranch === 'Bhimavaram' ? 'active' : ''}>Bhimavaram</Button>
                </div>
                <div className="branch-details" style={{ backgroundColor: selectedBranch === 'Bhimavaram' ? 'green' : 'blue' }}>
                    {selectedBranch && <h2>{selectedBranch}</h2>}
                </div>
            </div>
        </div>
    );
};

export default BranchesPage;
