import { Button, Table } from 'react-bootstrap';

export function FoodTable({
  isSelected,
  foods,
  handleSelection,
  handleDelete,
}) {
  function calculateTotalValue(foods, propertyExtractor) {
    let value = 0;

    if (foods) {
      value = foods.reduce((prev, curr) => {
        return prev + propertyExtractor(curr);
      }, 0);

      return value.toFixed(2);
    }

    return value.toFixed(2);
  }

  return (
    <div>
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>KCal</th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Fat</th>
            <th>Fiber</th>
            {isSelected && foods.length !== 0 && <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {foods &&
            foods.map((food) => {
              return (
                <tr
                  key={food.id}
                  onClick={() => !isSelected && handleSelection(food.id)}
                >
                  <td>{food.name}</td>
                  <td>{food.calories}</td>
                  <td>{food.protein}</td>
                  <td>{food.carbs}</td>
                  <td>{food.fat}</td>
                  <td>{food.fiber}</td>
                  {isSelected && foods.length !== 0 && (
                    <td>
                      {
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(food.id)}
                        >
                          Delete
                        </Button>
                      }
                    </td>
                  )}
                </tr>
              );
            })}

          {isSelected && (
            <tr className="fw-bold fst-italic">
              <td>Total</td>
              <td>{calculateTotalValue(foods, (food) => food.calories)}</td>
              <td>{calculateTotalValue(foods, (food) => food.protein)}</td>
              <td>{calculateTotalValue(foods, (food) => food.carbs)}</td>
              <td>{calculateTotalValue(foods, (food) => food.fat)}</td>
              <td>{calculateTotalValue(foods, (food) => food.fiber)}</td>
              {isSelected && foods.length !== 0 && <td></td>}
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
