import './FoodForm.css';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

export function FoodForm() {
  return (
    <div>
      <h2 className="mt-4">Add new food</h2>

      <Form className="food-form border rounded mt-3 mb-4 mx-auto p-3">
        <Form.Group className="mb-3 mt-1 mx-auto" controlId="formBasicName">
          <FloatingLabel
            controlId="floatingInput1"
            label="Name"
            className="mb-1"
          >
            <Form.Control type="text" placeholder="Name" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 mx-auto" controlId="formBasicKCal">
          <FloatingLabel
            controlId="floatingInput2"
            label="KCal"
            className="mb-3"
          >
            <Form.Control type="number" placeholder="KCal" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 mx-auto" controlId="formBasicProtein">
          <FloatingLabel
            controlId="floatingInput3"
            label="Protein"
            className="mb-3"
          >
            <Form.Control type="number" placeholder="Protein" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 mx-auto" controlId="formBasicCarbs">
          <FloatingLabel
            controlId="floatingInput4"
            label="Carbs"
            className="mb-3"
          >
            <Form.Control type="number" placeholder="Carbs" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 mx-auto" controlId="formBasicFat">
          <FloatingLabel
            controlId="floatingInput5"
            label="Fat"
            className="mb-3"
          >
            <Form.Control type="number" placeholder="Fat" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 mx-auto" controlId="formBasicFiber">
          <FloatingLabel
            controlId="floatingInput6"
            label="Fiber"
            className="mb-3"
          >
            <Form.Control type="number" placeholder="Fiber" />
          </FloatingLabel>
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-1">
          Add Food
        </Button>
      </Form>
    </div>
  );
}
