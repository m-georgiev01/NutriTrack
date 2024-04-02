import { Form, InputGroup } from 'react-bootstrap';

export function SearchBar({ handleSearch }) {
  return (
    <div>
      <InputGroup className="mb-3" data-bs-theme="dark">
        <InputGroup.Text id="basic-addon1"> &#x1F50E;&#xFE0E;</InputGroup.Text>
        <Form.Control
          placeholder="Search foods..."
          aria-label="Search foods..."
          aria-describedby="basic-addon1"
          onChange={handleSearch}
        />
      </InputGroup>
    </div>
  );
}
