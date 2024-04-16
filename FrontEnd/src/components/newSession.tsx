import React, { memo, useCallback } from 'react'; // Import React and required hooks
import { Row, Col } from 'react-bootstrap'; // Import any other dependencies

interface NewSessionProps {
    status: boolean;
    name: string;
    getSession: (session: any) => void;
    session: any;
    deleteSession: (session: any) => void;
}

const NewSession: React.FC<NewSessionProps> = memo(({ status, name, getSession, session, deleteSession }: NewSessionProps) => {
    const handleSessionClick = useCallback(() => {
        getSession(session);
    }, [getSession, session]);

    const handleDeleteClick = useCallback(() => {
        deleteSession(session);
    }, [deleteSession, session]);

    return (
        <>
            <div  style={{ width: "100%", textAlign: "left" }} className={`position-relative  ${status ? " btn btn-primary" : "  btn btn-outline-light"} my-1`}>
                <div className="position-absolute end-0 top-0 btn btn-outline-light border-0 " onClick={handleDeleteClick} style={{}}>x</div>
                <Row >
                    <Col onClick={handleSessionClick}>
                        {name}
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </div>
        </>
    );
});

// Add a display name to the component
NewSession.displayName = 'NewSession';

export default NewSession;
