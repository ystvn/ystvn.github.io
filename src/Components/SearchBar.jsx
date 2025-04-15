import React from 'react';
import Form from 'react-bootstrap/Form';

function SearchBar({ onSearch }) {
    return (
        <Form className="d-flex">
            <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                onChange={onSearch}
            />
        </Form>
    );
}

export default SearchBar;
