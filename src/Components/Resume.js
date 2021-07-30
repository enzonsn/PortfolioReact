import React from 'react';
import { Document, Page } from 'react-pdf';
import { Container } from 'react-bootstrap';

import pdf from '../Assets/resume.pdf';

export default function Resume() {
  return (
    <section className="resume-main-cont">
        <Container fluid className="resume-cont">
            <Container className="resume-cont2">
                <Document file={pdf}>
                    <Page pageNumber={1} />
                </Document>
            </Container>
        </Container>
    </section>
  );
}
