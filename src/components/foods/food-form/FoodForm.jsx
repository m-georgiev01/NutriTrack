import './FoodForm.css';
import { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { createFood } from '../../../services/food-service';
import { useNavigate } from 'react-router-dom';

export function FoodForm() {
  const navigate = useNavigate();
  const [food, setFood] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    fiber: '',
  });
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = (food) => {
    const errors = {};
    if (food.calories < 0)
      errors.calories = 'Calories must be a positive number!';
    if (food.protein < 0) errors.protein = 'Protein must be a positive number!';
    if (food.carbs < 0)
      errors.carbs = 'Carbohydrates must be a positive number!';
    if (food.fat < 0) errors.fat = 'Fat must be a positive number!';
    if (food.fiber < 0) errors.fiber = 'Fiber must be a positive number!';

    return errors;
  };

  const onInputChange = (e) => {
    setFood((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFoodSubmit = (e) => {
    const currFieldErrs = validate(food);
    setFieldErrors(currFieldErrs);
    e.preventDefault();

    if (Object.keys(currFieldErrs).length) return;

    createFood(food).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      <h2 className="mt-4">Add new food</h2>

      <Form
        onSubmit={onFoodSubmit}
        className="food-form border rounded mt-3 mb-4 mx-auto p-3"
      >
        <Form.Group className="mb-3 mt-1 mx-auto" controlId="formBasicName">
          <FloatingLabel
            controlId="floatingInput1"
            label="Name"
            className="mb-1"
          >
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={food.name}
              onChange={onInputChange}
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 mx-auto" controlId="formBasicKCal">
          <FloatingLabel
            controlId="floatingInput2"
            label="KCal"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="KCal"
              name="calories"
              value={food.calories}
              onChange={onInputChange}
              required
            />
          </FloatingLabel>
          {fieldErrors.calories && (
            <span className="text-danger">{fieldErrors.calories}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3 mx-auto" controlId="formBasicProtein">
          <FloatingLabel
            controlId="floatingInput3"
            label="Protein"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="Protein"
              name="protein"
              value={food.protein}
              onChange={onInputChange}
              required
            />
          </FloatingLabel>
          {fieldErrors.protein && (
            <span className="text-danger">{fieldErrors.protein}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3 mx-auto" controlId="formBasicCarbs">
          <FloatingLabel
            controlId="floatingInput4"
            label="Carbohydrates"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="Carbohydrates"
              name="carbs"
              value={food.carbs}
              onChange={onInputChange}
              required
            />
          </FloatingLabel>
          {fieldErrors.carbs && (
            <span className="text-danger">{fieldErrors.carbs}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3 mx-auto" controlId="formBasicFat">
          <FloatingLabel
            controlId="floatingInput5"
            label="Fat"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="Fat"
              name="fat"
              value={food.fat}
              onChange={onInputChange}
              required
            />
          </FloatingLabel>
          {fieldErrors.fat && (
            <span className="text-danger">{fieldErrors.fat}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3 mx-auto" controlId="formBasicFiber">
          <FloatingLabel
            controlId="floatingInput6"
            label="Fiber"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="Fiber"
              name="fiber"
              value={food.fiber}
              onChange={onInputChange}
              required
            />
          </FloatingLabel>
          {fieldErrors.fiber && (
            <span className="text-danger">{fieldErrors.fiber}</span>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-1">
          Add Food
        </Button>
      </Form>
    </div>
  );
}
